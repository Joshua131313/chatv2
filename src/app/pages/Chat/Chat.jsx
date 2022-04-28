import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Logo } from "../../components/Logo/Logo";
import { useGetAllUserChats } from "../../services/GetAllUserChats";
import { useGetConvoIDFromPath } from "../../services/GetConvoIDFromLocation";
import { useGetUser } from "../../services/GetUserId";
import "./Chat.css";
import { ChatMsgs } from "./ChatSection/ChatMsgs";
import { ChatSectionTemp } from "./ChatSection/ChatSectionTemp";
import { Header } from "./ChatSection/Header";
import { ConvoItem } from "./ConvoSidebar/ConvoItem";
import { ConvoSidebar } from "./ConvoSidebar/ConvoSidebar";

export const Chat = () => {
  const usersConvos = useGetAllUserChats();
  const user = useGetUser()
  const convoid = useGetConvoIDFromPath()
  const chatmsgsrow = usersConvos?.map(convo=> {
    return (
      <Route  path={`/chat/${convo.convoid}`} key={convo?.convoid}>
        <ChatMsgs  convoid={convo.convoid} members={convo.members}/>
      </Route>
    ) 
  }) 
  const userItemsRow = usersConvos?.map(convo=> {
    let otherUserId = convo?.members.length === 1? user?.uid : convo?.members.find(x=> x !== user?.uid)
    return (
      // {convoItem({key: convo?.convoid, isGroup: convo?.members.length > 2, convoid: convo?.convoid, members: convo?.members, lastMsg: convo?.lastMsg, userid: otherUserId})}
     <ConvoItem key={convo?.convoid} isGroup={convo?.members.length >2} convoid={convo?.convoid} members={convo?.members} lastMsg={convo?.lastMsg} userid={otherUserId} />
    )
  }) 
  const headersRow = usersConvos?.map(convo=> {
    return (
      <Route path={`/chat/${convo.convoid}`}> 
        <Header convoid={convo?.convoid} members={convo.members}/>
      </Route>
    )
  })

  return (
    <div className="chat flexrow">
      <ConvoSidebar > 
        {userItemsRow}
      </ConvoSidebar>
      <ChatSectionTemp usersConvos={usersConvos} headersRow={headersRow}>
        <Switch> 
          <Route exact path="/chat">
            <div className="emptyboxplaceholder">
              <Logo img="https://i.imgur.com/cRDG5sm.png" />
            </div>
          </Route>
          <Route path="/chat/create-new">
            <div className="createnew"> </div>
          </Route>
          <Route  path={`/chat/${convoid}`} key={convoid}>
           <ChatMsgs  convoid={convoid}/>
          </Route>       
       </Switch>
      </ChatSectionTemp>
    </div>
  );
};
