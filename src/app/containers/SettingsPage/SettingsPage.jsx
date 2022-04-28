import React, {useState, useEffect, useContext} from 'react'
import { StoreContext } from '../../../ContextAPI'
import AppBtn from '../../components/AppBtn/AppBtn'
import { Appicon } from '../../components/AppIcon/Appicon'
import { UploadImg } from '../../components/AppInput/UploadImg'
import ImgLoaded from '../../components/Imgloaded/Imgloaded'
import { User } from '../../components/User/User'
import './SettingsPage.css'

export const SettingsPage = (props) => {
    const {userinfo} = useContext(StoreContext)
    const {title, className, text='Update your personal details.'} = props
    const [bg, setBg] = useState(userinfo.userinfo?.secondarycover ?? 'https://i.imgur.com/ZmEcN9a.jpg')
   
    return (
        <div className={`${className} settingspage`}>
            <div className='secondaryimg'>
                    <ImgLoaded img={bg}/>
                    <UploadImg value={bg} setValue={setBg}>
                        <Appicon icon='fal fa-upload'/>
                    </UploadImg>
            </div>
            <div className="userimg flexrow">
                <div className="settingsuser">
                    <User />
                    <UploadImg>
                        <Appicon icon='fal fa-upload'/>
                    </UploadImg>
                </div>
                <div className="content">
                    <h2>{title}</h2>
                    <small>{text}</small>
                    {/* <div className="controlbtns flexrow">
                      <AppBtn text='Cancel' className='border'/>
                      <AppBtn text='Save'/>
                    </div> */}
                </div>
            </div>
            <hr/>
            {props.children}
        </div>
    )
}
