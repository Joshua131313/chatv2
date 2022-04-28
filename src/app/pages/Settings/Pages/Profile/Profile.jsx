import React, {useState, useEffect, useContext} from 'react'
import { StoreContext } from '../../../../../ContextAPI'
import { db } from '../../../../../Fire'
import AppBtn from '../../../../components/AppBtn/AppBtn'
import { AppInput } from '../../../../components/AppInput/AppInput'
import { AuthInput } from '../../../../containers/AuthContainer/AuthInput'
import { SettingsPage } from '../../../../containers/SettingsPage/SettingsPage'
import './Profile.css'
import firebase from 'firebase'
export const Profile = (props) => {
    const user = firebase.auth().currentUser
    const {userinfo} = useContext(StoreContext)
    const {} = props
    const [name, setName] = useState(userinfo?.name ?? '')
    const [email, setEmail] = useState(userinfo.userinfo?.email ?? '')
    const [phone, setPhone] = useState(userinfo.userinfo?.phoneNumber ?? '')
    const [birthday, setBirthday] = useState(userinfo.userinfo?.birthday ?? '')
    const [coverUrl, setCoverUrl] = useState(userinfo.userinfo?.secondarycover ?? '')
    const [userPicUrl, setUserPicUrl] = useState(userinfo.userinfo?.profilePic ?? '')
    const profileInputs = [
        {
            title: 'Personal Details',
        },
        {
            placeholder: 'Name',
            value: name, 
            setValue: setName
        },
        {
            placeholder: 'Birthday',
            value: birthday,
            setValue: setBirthday,
            type: 'date'
        },
        {
            title: "Contact Info",
        },
        {
            placeholder: 'Email',
            value: email,
            setValue: setEmail,
            disabled: true
        },
        {
            placeholder: 'Phone number',
            value: phone,
            setValue: setPhone,
            type: 'number'
        },
        {
            title: 'Images'
        },
        {
            placeholder: 'Secondary Image',
            value: coverUrl,
            setValue: setCoverUrl,
        },
        {
            placeholder: 'Profile Image',
            value: userPicUrl,
            setValue: setUserPicUrl,
        },
    ]
    
    const handleUpdateUserInfo = () => {
      user &&  db.collection('users').doc(user.uid).set({
            userinfo:  {
                birthday, 
                phoneNumber: phone,
                secondarycover: coverUrl,
                profilePic: userPicUrl
            },
            name,
            searchName: name.replace(/\s/gm, '').toLowerCase()
        }, {merge: true})
    }
    const profileInputsrow = profileInputs.map(input=> {
        if(input.title) {
            return ( 
                <h3 className='titleseperator'>{input.title}</h3>
            )
        }
        else {
            return (
                <AuthInput 
                    value={input.value} 
                    setValue={input.setValue} 
                    placeholder={input.placeholder} 
                    disabled={input.disabled}
                    type={input.type} />
            )
        }
    })
    const discardChanges = () => {
        setName(userinfo?.name ?? '')
        setEmail(userinfo.userinfo?.email ?? '')
        setPhone(userinfo.userinfo?.phoneNumber ?? '')
        setBirthday(userinfo.userinfo?.birthday ?? '')
        setCoverUrl(userinfo.userinfo?.secondarycover ?? '')
        setUserPicUrl(userinfo.userinfo?.profilePic ?? '')
    }
    return (
        <SettingsPage text='Update your personal details.' title='Profile' className='profilepage'>
          <div className="inputsrow">
              {profileInputsrow}
          </div>
        <div className="flexend btncont">
            <AppBtn text='Discard' className='border' onClick={()=> discardChanges()}/>
            <AppBtn text='Update' 
            onClick={()=>
             handleUpdateUserInfo(user.uid, {
                name, 
                birthday, 
                phoneNumber: phone,
                secondarycover: coverUrl,
                profilePic: userPicUrl
            },
            'userinfo'
           )}/>
        </div>
        </SettingsPage>
    )
}
