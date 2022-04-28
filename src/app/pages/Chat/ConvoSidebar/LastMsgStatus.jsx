import React from "react";
import { GuestImg } from "../../../components/User/GuestImg";
import { Name } from "../../../components/User/Name";
import { useGetLastMsg } from "../../../services/GetLastMsg";
import { useGetUser } from "../../../services/GetUserId";

export const LastMsgStatus = (props) => {
  const {convoid} = props
  const user = useGetUser()
  const lastMsg = useGetLastMsg(convoid)

  return (
   <>
      {
      lastMsg?.seenBy?.length === 1 ? 
        <div className="seenbyrow">
          <GuestImg userid={lastMsg?.seenBy[0]}/>
        </div>
      :
      lastMsg?.seenBy?.length >2 ?
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
   </>
  )
}