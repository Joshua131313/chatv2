import React from 'react'
import { Name } from '../../../components/User/Name'
import { useGetUser } from '../../../services/GetUserId'
import { useGetUserInfo } from '../../../services/GetUserInfo'

export const ToName = (props) => {
  const userinfo = useGetUserInfo(props.userid)
  const {onClick, className='', members} = props

 

  return (
    <span className={`toname`} >
      {userinfo?.name}
      <i className='fal fa-times' onClick={()=> onClick?.()}></i>
    </span>
  )
}