import React, { useEffect, useRef, useState } from "react";
import { Appicon } from "../../../components/AppIcon/Appicon";
import { AppInput } from "../../../components/AppInput/AppInput";
import "./ChatSection.css";
import TextareaAutosize from "react-textarea-autosize";
import { db } from "../../../../Fire";
import {
  createConvo,
  generateID,
  sendMsg
} from "../../../services/DBFunctions";
import firebase from "firebase";
import { useGetConvoIDFromPath } from "../../../services/GetConvoIDFromLocation";
import { useHistory, useLocation } from "react-router-dom";
import { useGetChatInfo } from "../../../services/GetChatInfo";
import { EmojiPicker } from "../../../components/EmojiPicker/EmojiPicker";
import { useCaretPosition } from 'react-use-caret-position';
import { Usersdropdown } from "../../../components/Dropdown/Usersdropdown";
import { GifPicker } from "../../../components/GifPicker/GifPicker";


export const Toolbar = (props) => {
  const convoid = useGetConvoIDFromPath();
  
  const chatInfo = useGetChatInfo(convoid);
  const [msg, setMsg] = useState("");
  const { to, setTo, usersConvos } = props;
  const user = firebase.auth().currentUser;
  const history = useHistory();
  const location = useLocation();
  const textAreaRef = useRef()
  const { ref: inputRef, updateCaret, start } = useCaretPosition();
  const [pickerVis, setPickerVis] = useState(false)
  const handleCreateNewConvo = () => {
    let convoid = generateID();
    createConvo(user.uid, to, convoid, msg, history);
    setMsg("");
  };

  // console.log(usersConvos.some(convo=> JSON.stringify(convo.members?.filter(x=> x !== user.uid)) === JSON.stringify(to.filter(x=> x !== user.uid))))
  const determineSendMsg = (e) => {
    let path = location.pathname.split("/")[2];
    if (path === "create-new") {
      if (
        usersConvos.some(
          (convo) =>
            JSON.stringify(convo.members?.filter((x) => x !== user.uid)) ===
            JSON.stringify(to)
        )
      ) {
      } else {
        handleCreateNewConvo();
        setTo([]);
      }
    } else {
      sendMsg(user.uid, convoid, msg);
    }
    setMsg("");
  };
  const handleReplaceName = ({name, string}) => {
    setMsg(msg.replace(string, name))
  }

  return (
    <div className="toolbar flexrow">
      <div className="toolbaricon">
        <i className="fa fa-plus"></i>
      </div>
      <div className="toolbarinput">
        <TextareaAutosize
          value={msg}
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              msg.replace(/\s{2,}/g, " ").trim().length && determineSendMsg();
            }
            if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
              updateCaret()
            }
          }}
          onChange={(e) => {
            setMsg(e.target.value);
            updateCaret()
          }}
          onClick={()=> updateCaret()}
          removeText
          placeholder="Type a message..."
        />
        {/* {chatInfo?.members?.length > 2 && <Usersdropdown handleAddRemove={handleReplaceName} search={msg} members={chatInfo?.members} visibleDrop={true} />} */}
        <div className="toolbaricon">
          <i className="fa fa-sticky-note"></i>
          <GifPicker />
        </div>
        <div className="toolbaricon">
          <i className="fa fa-grin" onClick={()=> setPickerVis(!pickerVis)}></i>
          <EmojiPicker pickerVis={pickerVis} setPickerVis={setPickerVis} updateCaret={updateCaret} msg={msg} setMsg={setMsg} caretIndex={start}/>
        </div>
      </div>
      <div className="toolbaricon">
        {msg ? (
          <i
            className="fa fa-paper-plane"
            onClick={() => determineSendMsg()}
          ></i>
        ) : (
          <i
            onClick={() => {
              sendMsg(user.uid, convoid, "thumbs-up", "icon");
            }}
            className={`${
              chatInfo?.customization?.icon
                ? chatInfo?.customization?.icon
                : "fa fa-thumbs-up"
            }`}
          ></i>
        )}
      </div>
    </div>
  );
};
