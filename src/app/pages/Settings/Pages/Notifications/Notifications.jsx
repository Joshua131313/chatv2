import React, {useState, useEffect, useContext} from 'react'
import AppSwitch from '../../../../components/AppSwitch/AppSwitch'
import { SettingsPage } from '../../../../containers/SettingsPage/SettingsPage'
import { ClearCollection, handleUpdateUserInfo } from '../../../../services/DBFunctions'
import { useGetNotifications } from '../../../../services/GetNotifications'
import { NotificationCard } from './NotificationCard/NotificationCard'
import './Notifications.css'
import firebase from "firebase"
import { Link } from 'react-router-dom'
export const Notifications = (props) => {
    const {} = props
    const user = firebase.auth().currentUser
    const [enableNoti, setEnableNoti] = useState(false)
    const [clearNoti, setClearNoti] = useState(false)
    const [receiveNoti, setReceiveNoti] = useState(false)
    const notifications = useGetNotifications()
    const notificationsrow = notifications.map(noti=> {
        return <NotificationCard noti={noti}/>
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
        <SettingsPage title='Notifications' text='View and manage your notifications.' className='notificationspage'>
          <div className="notificationstoggles flexcol">
            <div className="flexrow ac sb">
                <span>Receive notifications: </span>
                <AppSwitch checked={receiveNoti} setChecked={()=> handleReceive()}/>
            </div>
            <div className="flexrow ac sb">
                <span>Clear notifications: </span>
                <AppSwitch checked={clearNoti} setChecked={()=> handleClearNoti()}/>
            </div>
             <Link to='/settings/notifications/view' className="optionlink flexrow sb">
              <span>View notifications ({notifications.length})</span>
              <i className='fal fa-chevron-right'></i>
             </Link>
          </div>
         
        </SettingsPage>
    )
}
