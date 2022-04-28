import React, {useState, useEffect, useContext} from 'react'
import AppSwitch from '../../../../components/AppSwitch/AppSwitch'
import { SettingsPage } from '../../../../containers/SettingsPage/SettingsPage'
import { ClearCollection, handleUpdateUserInfo } from '../../../../services/DBFunctions'
import { useGetNotifications } from '../../../../services/GetNotifications'
import { NotificationCard } from './NotificationCard/NotificationCard'
import './Notifications.css'
import firebase from "firebase"
import { Link } from 'react-router-dom'
export const NotificationsList = (props) => {
    const {} = props
    const user = firebase.auth().currentUser
    const [enableNoti, setEnableNoti] = useState(false)
    const [clearNoti, setClearNoti] = useState(false)
    const [receiveNoti, setReceiveNoti] = useState(false)
    const notifications = useGetNotifications()
    const [openID, setOpenID] = useState('')

    const notificationsrow = notifications.map(noti=> {
        return <NotificationCard noti={noti} openID={openID} setOpenID={setOpenID}/>
    })

    const handleClearNoti = () => {
      setClearNoti(true)
      ClearCollection(`users/${user.uid}/notifications`, ()=> setClearNoti(false))
    }
    const handleReceive = () => {
      setReceiveNoti(!receiveNoti)
      handleUpdateUserInfo(user.uid, !receiveNoti, 'receiveNoti')
    }

    return (
         <div className="notificationsrowpage settingspage">
           <h2>Notifications</h2>
           <hr/>
           <div className="notificationslist">
              {notificationsrow}
           </div>
         </div>
    )
}
