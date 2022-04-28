import React from 'react'
import ImgLoaded from '../../../components/Imgloaded/Imgloaded'
import { ToName } from '../ChatSection/ToName'
import firebase from 'firebase'
import { GuestImg } from '../../../components/User/GuestImg'
import { NavLink } from 'react-router-dom'
export const ConvoGroup = (props) => {
  const {members, lastMsg, img='', groupimg='', convoid} = props
  const user = firebase.auth().currentUser
  const memberNamesRow = members?.map((memberid)=> {
    return (
      <ToName userid={memberid} />
    )
  })
  return (
    <NavLink activeClassName='activeconvouser' to={`/chat/${convoid}`} className="convouser flexrow">
      <ImgLoaded img={groupimg} />
      <div className="lastmg flexcol">
        <div className="namesrows flexrow">
          {memberNamesRow}
        </div>
        <span className='lastmsg'>
          {lastMsg.senderid === user.uid ? <span>You:</span> : <ToName userid={lastMsg.senderid}/>}
          <span>{lastMsg.msg}</span>
        </span>
      </div>
      {
        lastMsg?.seenBy?.length >0 ? 
          <div className='seenbyrow'>
            {
              lastMsg?.seenBy.map(gid=> {
                return (
                  <GuestImg userid={gid} />
                )
               })
            }
          </div>
        :
        <div className="checkmark">
          <i className='fa fa-check-circle'></i>
        </div>
    }
   </NavLink>
  )
}