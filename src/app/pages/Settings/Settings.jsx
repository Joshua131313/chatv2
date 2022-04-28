import React from 'react'
import { Sidebar } from './Sidebar/Sidebar'
import './Settings.css'
import { Route } from 'react-router-dom'
import { SettingsRoutes } from './SettingsRoutes'

export const Settings = () => {

  return (
    <div className="settings">
      <Sidebar />
      <SettingsRoutes />
    </div>
  )
}