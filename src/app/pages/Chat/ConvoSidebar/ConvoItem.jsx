import React from 'react'
import ImgLoaded from '../../../components/Imgloaded/Imgloaded'
import { Guest } from '../../../components/User/Guest'
import { User } from '../../../components/User/User'
import { useGetUserInfo } from '../../../services/GetUserInfo'
import firebase from 'firebase'
import './ConvoSidebar.css'
import { GuestImg } from '../../../components/User/GuestImg'
import { NavLink } from 'react-router-dom'
import { NameParent } from '../../../components/User/NameParent'
import { LastMsg } from './LastMsg'
import { LastMsgStatus } from './LastMsgStatus'
export const ConvoItem = (props) => {
  const {userid, convoid, isGroup, members} = props
  const user = firebase.auth().currentUser
  
  return (
    <NavLink activeClassName='activeconvouser' to={`/chat/${convoid}`} className="convouser flexrow">
     <GuestImg members={members} />
     <div className="lastmg flexcol">
         <div className="namesrows flexrow">
          <NameParent members={members} />
         </div>
        <LastMsg convoid={convoid} userid={userid} isGroup={isGroup} />
     </div>
     <LastMsgStatus convoid={convoid} userid={userid} isGroup={isGroup}/>
    </NavLink>
  )
}