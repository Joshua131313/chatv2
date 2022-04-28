import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AppBtn from '../../../components/AppBtn/AppBtn'
import { handleLogout } from '../../../services/DBFunctions'
import './Sidebar.css'
import firebase from 'firebase'
import { StoreContext } from '../../../../ContextAPI'
export const Sidebar = () => {
  const {userinfo} = useContext(StoreContext)
  const sidebarlinks = [
    {
      link: '/settings/',
      text: 'Profile'
    },
    {
      link: '/settings/password',
      text: 'Password',
      hide: userinfo.provider
    },
    {
      link: '/settings/customize',
      text: 'Customize'
    },
    {
      link: '/settings/notifications',
      text: 'Notifications'
    },
    {
      link: '/settings/invite-users',
      text: 'Invite users'
    }
  ]
  const sidebarlinksrow = sidebarlinks.map(sidebarlink=> {
    if(!sidebarlink.hide) {
      return (
        <NavLink exact to={sidebarlink.link} className='settingssidebarlink' activeClassName='activesidebarlink'>
          {sidebarlink.text}
        </NavLink>
      )
    }
  })

  return (
    <div className="settingssidebar flexcol">
      <h2>Settings</h2>
      <div className="sidebarlinks flexcol">
        {sidebarlinksrow}
        <AppBtn onClick={()=> handleLogout()} text='Logout'/>
      </div>
    </div>
  )
}