import React from 'react'
import { Sidebar } from './Sidebar/Sidebar' 
import './Chathome.css'
import { PageContainer } from '../PagesContainer/PageContainer'
import { useEffect } from 'react/cjs/react.production.min'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export const ChatHome = (props) => {

  return (
    <div className="apphome">
        <Sidebar />
        <PageContainer />
    </div>
  )
}
 