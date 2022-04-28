import React, { useEffect, useState, useMemo } from 'react'
import { AppInput } from '../../../components/AppInput/AppInput'
import { useGetAllUserChats } from '../../../services/GetAllUserChats'
import './ConvoSidebar.css'
import { ConvoUser } from './ConvoUser'
import firebase from 'firebase'
import { ConvoGroup } from './ConvoGroup'
import { ConvoItem } from './ConvoItem'
import { Link } from 'react-router-dom'

export const ConvoSidebar = (props) => {
  // const {usersConvos} = props
  const user = firebase.auth().currentUser
  // const usersconvosRow = usersConvos?.sort((a, b)=> b.lastMsgDate - a.lastMsgDate).map(convo=> {
  //   let otherUserId = convo?.members.length === 1? user?.uid : convo?.members.find(x=> x !== user?.uid)
  //   return (
  //    <ConvoItem   isGroup={convo?.members.length >2} convoid={convo?.convoid} members={convo?.members} lastMsg={convo?.lastMsg} userid={otherUserId} />
  //   )
  // }) 
  //  { 
  //    members: ['BIKPSV4uePZ6iZQj6HtCMTXXMXp1', 'w4N7VEuYJrTQFc4rFVKgbl9jAz62],
  //    convoid: 'DnLLHfvBvj9GUdMuXiOz',
  //    
  //  },
  // {
  //  convoid: 'd79VNlAK9D2gXH07ZDkb'
//    memberrs: ['BIKPSV4uePZ6iZQj6HtCMTXXMXp1']
  //}

  return (
    <div className="convosidebar">
     <div className="stickitem">
      <div className="sb adddiv flexrow">
          <h3>Chats</h3>
          <Link to='/chat/create-new' className='fal fa-edit' ></Link>
        </div>
        <AppInput shouldFocusOnKey placeholder='Search (Ctrl + M)' removeText/>
     </div>
      {props.children}
    </div>
  )
}