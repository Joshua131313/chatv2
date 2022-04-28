import React from 'react'
import { useGetUserInfo } from '../../services/GetUserInfo'

export const Name = (props) => {
  const userinfo = useGetUserInfo(props.userid)

  return (
    <span className='name'>{userinfo?.name}</span>
  )
}