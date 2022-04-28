import React, { useState } from 'react'
import AppBtn from '../../../../../components/AppBtn/AppBtn'
import { Appicon } from '../../../../../components/AppIcon/Appicon'
import { Guest } from '../../../../../components/User/Guest'
import { AddToDB, DeleteFromDB, generateID, handleMuteChat } from '../../../../../services/DBFunctions'
import './NotificationCard.css'
import firebase from 'firebase'
import { db } from '../../../../../../Fire'
import Dropdown from '../../../../../components/Dropdown/Dropdown'

export const NotificationCard = (props) => {
  const {openID, setOpenID} = props
  const {date, sender, notifid, msg} = props.noti
  const user = firebase.auth().currentUser
  let notificationObject = {

  }
  return (
    <div className="notificationcard flexrow sb ac">
      <Guest msg={msg} showName userid={sender?.senderid} convoid={sender?.convoid}/>
            <Dropdown
              id={notifid}
              openID={openID}
              setOpenID={setOpenID}
              icon='fal fa-ellipsis-h elip'
              options={[
              {
                icon: 'fal fa-comment',
                text: 'View',
                link: `/chat/${sender?.convoid}`
              },
              {
                icon: 'fal fa-trash',
                text: 'Delete',
                onClick: ()=> {
                  DeleteFromDB(`/users/${user.uid}/notifications`, notifid)
                }
              },
              {
                icon: 'fal fa-bell-slash',
                text: 'Mute',
                onClick: ()=> {
                    handleMuteChat(sender?.convoid, user.uid)
                }
              }
            ]}/>
    </div>
  )
}