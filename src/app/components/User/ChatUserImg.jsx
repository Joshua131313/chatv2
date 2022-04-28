import React from 'react'
import { useGetUserInfo } from '../../services/GetUserInfo'
import ImgLoaded from '../Imgloaded/Imgloaded'

export const ChatUserImg = (props) => {
  const {userid} = props
  const userinfo = useGetUserInfo(userid) 
  return (
    <>{
      userinfo?.userinfo?.profilePic ? <ImgLoaded img={userinfo?.userinfo.profilePic} /> : <div className="imgloaded usericonplaceholder"><i className='fa fa-user'></i></div>
     }  </>
    )
}