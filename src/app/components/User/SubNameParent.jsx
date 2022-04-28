import React, { useEffect, useState } from 'react'
import { useGetLastMsg } from '../../services/GetLastMsg'
import { useGetUser } from '../../services/GetUserId'
import { Name } from './Name'

export const SubNameParent = (props) => {
  const user = useGetUser()

  const { mem} = props

  let NameEl = () => {
    if(mem?.length === 1) {
      return (
        <Name userid={mem[0]}/>
      )
    }
    else if(mem?.length >2) {   
        let namesrow = mem.map(userid=> {
          return <Name userid={userid}/>
        })
        return namesrow
    }
    else {
      return <Name userid={mem?.find(x=> x !== user?.uid)}/>
    }
  }



  return (
   <>
   <NameEl />
   </>
  )
}