import React, { useState } from "react";
import { Header } from "./Header";
import { Toolbar } from "./Toolbar";
import "./ChatSection.css";
import { CreateNewHeader } from "./CreateNewHeader";
import { Route, Switch } from "react-router-dom";
import { useGetConvoIDFromPath } from "../../../services/GetConvoIDFromLocation";
import { useGetMembersById } from "../../../services/GetMembersById";
import { useGetUser } from "../../../services/GetUserId";

export const ChatSectionTemp = (props) => {
  const { chatuser, pathName, headersRow, usersConvos } = props;
  const [to, setTo] = useState([]);
  const convoid = useGetConvoIDFromPath()
  const user = useGetUser()
  const members = useGetMembersById(convoid)
  return (
    <div className="chatsection">
      <Switch>
        <Route exact path="/chat"></Route>
        <Route path="/chat/create-new">
          <CreateNewHeader to={to} setTo={setTo} />
        </Route>
      </Switch>
      {headersRow} 
      {props.children}
      <Switch>
        <Route exact path="/chat"></Route>
        <Route path='/chat/create-new'>
          <Toolbar usersConvos={usersConvos} to={to} setTo={setTo} />
        </Route>
        <Route>
          {
            members?.length ? 
            !(user && members.includes(user.uid)) ? '': <Toolbar usersConvos={usersConvos} to={to} setTo={setTo} />
           : 
           null
          }
        </Route>
      </Switch>
    </div>
  );
};
