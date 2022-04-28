import React from 'react'
import './AppBtn.css'

const AppBtn = (props) => {
  const {onClick, text, className} = props

  return (
    <button className={`appbtn ${className}`} onClick={()=> onClick()}>{text}</button>
  )
}
export default AppBtn