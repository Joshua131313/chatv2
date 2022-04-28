import React from "react";
import TimeAgo from "react-timeago";
import { DeleteFromDB } from "../../services/DBFunctions";
import { useGetUser } from "../../services/GetUserId";
import { ChatUserImg } from "../User/ChatUserImg";
import "./Message.css";
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import { LinkIt, urlRegex } from 'react-linkify-it';



export const Message = (props) => {
  const { members, i, nextMsgIsUsers, prevMsgIsUsers, convoid, nextMsgType } = props;
  const { date, msg, msgid, senderid } = props.msg;
  const { type, content } = msg;
  const user = useGetUser();

  const renderMsgContent = () => {
    if(urlRegex.test(content)) {
      let str = content.split(' ').filter(x=> !urlRegex.test(x))
      return <span>
      {str.length ? 
        <div className="abovelinkpreviewmsg">
          {str.join(' ')}
        </div>
        :null
      }
      {content.split(' ').filter(x=> urlRegex.test(x)).join(' ')}
      </span>
    }
    else  {
      switch (type) {
      case "img":
        return <img src={content} alt="" />;
      case "icon":
        return <i className={"msgicon fa fa-" + content}></i>;
      default:
        return <span className={`msgcontent ${type === "text" ? "hasBgColor" : ""}`}>{content}</span>;
    }
  }
  };

  const CustomLink = (info) => {
    const {match} = info
    return (
      <>
      {/* <a href={match} target='__blank'>{match}</a> */}
      <LinkPreview borderColor='transparent'  className='linkpreview' url={match}  />
     </>
    )
}

  //    onClick={()=> DeleteFromDB(`chats/${convoid}/messages`, msgid)}
  return (
    <>
      <div
        className={`message flexrow 
      ${senderid === user?.uid ? "usermsg" : "otherusermsg"}
      ${nextMsgIsUsers ? "nextmsgisusers" : ""}
      ${prevMsgIsUsers ? "prevmsgisusers" : ""}
      ${members?.length > 2 ? "groupmsg" : ""}`}
      >
        {members?.length > 2 && user?.uid !== senderid && (
          <ChatUserImg userid={senderid} />
        )}
        <div className="messagecontent flexcol">
          <div className='mmsg'>
           <LinkIt 
            regex={urlRegex} 
            component={(match, key)=> <CustomLink match={match}  key={key}/>} > 
            {renderMsgContent()} 
          </LinkIt>
          </div>
        </div>
      </div>
    </>
  );
};
