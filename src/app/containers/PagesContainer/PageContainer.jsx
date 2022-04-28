import React from 'react'
import { Route } from 'react-router-dom'
import { Meeting } from '../../components/VideoSDK/Meeting'
import { Chat } from '../../pages/Chat/Chat'
import { Settings } from '../../pages/Settings/Settings'
export const PageContainer = (props) => {

  return (
    <>
       <div className="routescontainer">
          <div className="innerroutescontainer">
              <Route path='/'>
                
              </Route>
              <Route path={'/meeting'}>
                <Meeting />
              </Route>
              <Route path='/calendar'>
                
              </Route>
              <Route path='/chat'>
                <Chat />
              </Route>
              <Route path='/notifications'>
                
              </Route>
              <Route path='/settings'>
                <Settings />
              </Route>
          </div>
        </div>
    </>
  )
}