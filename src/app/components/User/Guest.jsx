import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../../ContextAPI'
import { useGetUserInfo } from '../../services/GetUserInfo'
import ImgLoaded from '../Imgloaded/Imgloaded'
import './User.css'

export const Guest = (props) => {
  const {userid, showName, msg, convoid} = props
  const userinfo = useGetUserInfo(userid)

  return (
    <div  className="user guestuser flexrow ac" >
      <Link to={`/user/${userid}`}>
       <ImgLoaded img={userinfo?.userinfo?.profilePic}/>
      </Link>
      {showName && 
        <div className="namemsg flexcol">
          <span>{userinfo?.userinfo?.name}</span>
         {msg && <Link to={`/chats/${convoid}`}>{msg}</Link>}
        </div>
      }
    </div>
  )
}
