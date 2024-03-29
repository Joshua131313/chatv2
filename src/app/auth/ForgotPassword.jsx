import React from 'react'
import AuthContainer from '../containers/AuthContainer/AuthContainer'
import { useHistory } from "react-router-dom";
import firebase from 'firebase'
export const ForgotPassword = (props) => {
  const history = useHistory()
  const handleSendEmail = (states, setStates) => {
    const {email} = states
    const {addNoti} = setStates
    firebase.auth().sendPasswordResetEmail(email).then(()=> {
      addNoti('Reset email sent!', 'fal fa-check')
    })
    .catch((error)=> {
      addNoti('Account does not exist!', 'fal fa-exclamation-circle')
    })
  }

  return (
    <AuthContainer 
      isForgotPassword
      title='Forgot password' 
      btnText1={{
        text: 'Go back',
        onClick: ()=>  history.goBack()
      }}
      mainBtn={{
        text: 'Send email',
        onClick: (states, setStates)=>  handleSendEmail(states, setStates)
      }}
    />
  )
}