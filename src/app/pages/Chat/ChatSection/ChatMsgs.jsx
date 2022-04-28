 import React, { useContext, useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { StoreContext } from '../../../../ContextAPI'
import { Message } from '../../../components/Message/Message'
import { useGetChatMsgs } from '../../../services/GetChatMsgs'
import { useGetConvoIDFromPath } from '../../../services/GetConvoIDFromLocation'
import { useGetMembersById } from '../../../services/GetMembersById'
import { useGetUser } from '../../../services/GetUserId'
import './ChatSection.css'

export const ChatMsgs = (props) => {
  const {firebaseLoaded} = useContext(StoreContext)
  const {convoid} = props
  const members = useGetMembersById(convoid)
  const user = useGetUser()
  const [updateLimit, setUpdateLimit] = useState(false)
 const {msgs, loading} = useGetChatMsgs(convoid, setUpdateLimit, updateLimit)
 let sortedMsgs = msgs?.sort((a, b)=> b.date - a.date)
  const chatmsgsrow = sortedMsgs.map((msg, i)=> {
    return (
      <Message 
        convoid={convoid}
        msg={msg} 
        nextMsgType={sortedMsgs[i-1]?.senderid === sortedMsgs[i]?.type}
        nextMsgIsUsers={sortedMsgs[i-1]?.senderid === sortedMsgs[i]?.senderid}
        prevMsgIsUsers={sortedMsgs[i+1]?.senderid === sortedMsgs[i]?.senderid} 
        i={i} 
        members={members}/>
    )
  })
 const handleScroll = (e) => {
  let scrollHeight = e.target.scrollHeight
  let scrollTop = e.target.scrollTop
  let height = e.target.clientHeight
  let top = (height - scrollTop) >= (scrollHeight-10)  

  if(top) {
      setUpdateLimit(true)
  }
  // console.log(height)
  // console.log(scrollHeight)
  // console.log(scrollTop)
 }
 return (
    <div className="chatmsgsbox" onScroll={(e)=> {handleScroll(e)}}>
      {
       members?.length ? 
        !(user && members.includes(user.uid)) && <Redirect to='/chat' /> 
       : 
       null
      }
        {
          // loading? 
          // <div className='loadingdiv'>
          //   <img src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif" alt=""/>
          // </div>
          // :
          chatmsgsrow
          }
    </div>
  )
} 