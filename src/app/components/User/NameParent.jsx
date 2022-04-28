import React, { useEffect, useState } from 'react'
import { useGetLastMsg } from '../../services/GetLastMsg'
import { useGetUser } from '../../services/GetUserId'
import { Name } from './Name'

export const NameParent = (props) => {
  const user = useGetUser()

  const { members, isComp } = props
  const [mem, setMem] = useState(members)

  let NameEl = () => {
    if(mem?.length === 1) {
      return (
        <Name userid={mem[0]}/>
      )
    }
    else if(mem?.length >2) {
        let namesrow = mem.map(userid=> {
          return <Name key={userid} userid={userid}/>
        })
        return namesrow
    }
    else {
      return <Name userid={mem?.find(x=> x !== user?.uid)}/>
    }
  } 

  useEffect(()=> {
    setMem(members)
  }, [members])

  return (
    <span className={`defaultname`} >
     { mem?.length > 2 ? 
        mem.map(userid=> {
            return <Name key={userid} userid={userid} />
        })
        :
        <Name userid={mem?.length === 1 ? mem[0] : mem?.find(x=> x !== user?.uid)}/>
     }
    </span>
  )
}