import React, { useEffect, useState } from 'react'
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import './EmojiPicker.css'
export const EmojiPicker = (props) => {
  const [skin, setSkin] = useState(1)
  const {setMsg, caretIndex, msg, updateCaret, pickerVis, setPickerVis} = props

  const handleSetEmoji = (emoji) => {
   let temp = [...msg]
   if(temp[caretIndex-1]) {
    temp[caretIndex-1] = temp[caretIndex-1] + emoji.native
   }
   else if(caretIndex === 0){
     if(msg.length) {
      temp[0] = emoji.native + temp[0]
     }
     else {
       temp.push(emoji.native)
     }
   }
   else {
    temp.push(emoji.native)
   }
   updateCaret()
   setMsg(temp.join(''))
  }
 

  // useEffect(()=> {
  //   if(pickerVis) {
  //     window.onclick = () => {
  //       setPickerVis(false)
  //     }
  //   }
  // }, [pickerVis])

  return (
    <div className="pickerdiv"        
      style={{
        opacity: pickerVis ? 1 : 0,
        pointerEvents: pickerVis ? 'initial' : 'none',
        transition: 'all 0.3s'
      }}
    >
      <Picker 
        onClick={(emoji)=> {handleSetEmoji(emoji)}} 
        color='var(--theme-color)'
        showPreview={false}
        showSkinTones={false}
      />
    </div>
  )
}