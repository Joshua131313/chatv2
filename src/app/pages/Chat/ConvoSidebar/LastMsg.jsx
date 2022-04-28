import React, { useEffect } from "react";
import { Name } from "../../../components/User/Name";
import { useGetLastMsg } from "../../../services/GetLastMsg";
import { useGetUser } from "../../../services/GetUserId";

export const LastMsg = (props) => {
  const {isGroup, convoid, userid} = props
  const user = useGetUser()
  const lastMsg = useGetLastMsg(convoid)


  return (
    <span className='lastmsgcontainer' >
    {
      isGroup ?
      <span className='lastmsg'>
        {lastMsg?.senderid === user.uid ? <span>You:</span> : <Name  userid={lastMsg?.senderid}/>}
      </span>
      :
      user?.uid === lastMsg?.senderid && <span>You:</span>
    }
    <span className='lastmsgcontent'>{lastMsg?.content}</span>
   </span>
  )
}