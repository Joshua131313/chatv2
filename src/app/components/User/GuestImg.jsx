import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../../ContextAPI'
import { useGetLastMsg } from '../../services/GetLastMsg'
import { useGetUser } from '../../services/GetUserId'
import { useGetUserInfo } from '../../services/GetUserInfo'
import ImgLoaded from '../Imgloaded/Imgloaded'
import { ChatUserImg } from './ChatUserImg'
import './User.css' 

export const GuestImg = (props) => {
  const {members, isComp, isCom} = props
  const user = useGetUser() 
  return (
      <div className={`userimgs ${members?.length > 2 ? 'groupimgs' :''}`}>
       {members?.length > 2 ?
        members?.slice(0, 2).map(userid=> {
          return <ChatUserImg userid={userid} />
        })    
        : 
       <ChatUserImg userid={members?.length ===1? members[0] : members?.find(x=> x !== user?.uid)} />
      }
      </div>
  ) 
}  
