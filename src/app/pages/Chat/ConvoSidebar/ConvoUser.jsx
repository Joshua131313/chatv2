import React from 'react'
import ImgLoaded from '../../../components/Imgloaded/Imgloaded'
import { Guest } from '../../../components/User/Guest'
import { User } from '../../../components/User/User'
import { useGetUserInfo } from '../../../services/GetUserInfo'
import firebase from 'firebase'
import './ConvoSidebar.css'
import { GuestImg } from '../../../components/User/GuestImg'
import { NavLink } from 'react-router-dom'
export const ConvoUser = (props) => {
  const {userid, lastMsg, convoid} = props
  const user = firebase.auth().currentUser
  const userinfo = useGetUserInfo(userid)
  return (
    <NavLink activeClassName='activeconvouser' to={`/chat/${convoid}`} className="convouser flexrow">
     <ImgLoaded img={userinfo?.userinfo.profilePic}/>
     <div className="lastmg flexcol">
       <span>{userinfo?.name}</span>
       <span>
        {
          user?.uid === userid && <span>You:</span>
        }
        <span>{lastMsg?.msg}</span>
       </span>
     </div>
     {
      lastMsg?.seenBy?.length === 1 ? 
        <div className="seenbyrow">
          <GuestImg userid={lastMsg?.seenBy[0]}/>
        </div>
      :
      <div className="checkmark">
        <i className='fa fa-check-circle'></i>
      </div>
    }
    </NavLink>
  )
}