import React from 'react'
import { useGetAllUserChats } from '../../../services/GetAllUserChats'
import { useGetUser } from '../../../services/GetUserId'
import { ConvoItem } from './ConvoItem'

export const ConvoRow = () => {
  const usersConvos = useGetAllUserChats()
  const user = useGetUser()
  const usersconvosRow = usersConvos?.map(convo=> {
    let otherUserId = convo?.members.length === 1? user?.uid : convo?.members.find(x=> x !== user?.uid)

    return (
     <ConvoItem  isGroup={convo?.members.length >2} convoid={convo?.convoid} members={convo?.members} lastMsg={convo?.lastMsg} userid={otherUserId} />
    )
    
  }) 
  return (
    <>
    {usersconvosRow}
    </>
  )
}