import React from 'react'
import './Logo.css'

export const Logo = (props) => {
  const {img='https://i.imgur.com/YbHOF4M.png'} = props
  return (
    <img src={img} alt="" className='logo'/>
  )
}