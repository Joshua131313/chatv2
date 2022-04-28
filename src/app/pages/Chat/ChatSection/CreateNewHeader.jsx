import React, { useEffect, useState } from "react";
import { AppInput } from "../../../components/AppInput/AppInput";
import { Usersdropdown } from "../../../components/Dropdown/Usersdropdown";
import ImgLoaded from "../../../components/Imgloaded/Imgloaded";
import { useSearchAllUsers } from "../../../services/SearchAllUsers";
import "./ChatSection.css";
import { ToName } from "./ToName";

export const CreateNewHeader = (props) => {
  const {to, setTo} = props;
  const [visibleDrop, setVisibleDrop] = useState(false)
  const [name, setName] = useState('')
  const searchedUsers =  useSearchAllUsers(name)

  const handleAddRemove = (userid) => {
    let tempState = [...to]
    let i = tempState.findIndex(x=> x === userid)
    if(to.includes(userid)) {
      tempState.splice(i, 1)
    }
    else {
      tempState.push(userid)
    }
    setTo(tempState)
    setVisibleDrop(false)
  }

  const searchedUsersRow = searchedUsers?.map(user=> {
    return (
      <div className="searcheduser flexrow" onClick={()=> handleAddRemove(user.uid)}>
        {
           user?.userinfo.profilePic ? <ImgLoaded img={user?.userinfo.profilePic} /> : <div className="imgloaded usericonplaceholder"><i className='fa fa-user'></i></div>
         }
        <span>{user?.name}</span>
      </div>
    )
  })
  const torow = to.map(userid=> {
    return <ToName userid={userid} key={userid} onClick={()=> handleAddRemove(userid)}/>
  })

  useEffect(()=> {
    if(visibleDrop) {
      window.onclick = () => {
        setVisibleDrop(false)
      }
    }
  }, [visibleDrop])

  return (
    <>
    <div className="createnewheader">
      <span>To:</span>
      <div className="listusers">
        {torow}
        <div className="searchusersdrop" onClick={(e)=> e.stopPropagation()}>
         <input onFocus={()=> setVisibleDrop(true)} type="text" value={name} placeholder={'Name of the person...'} onChange={(e)=> setName(e.target.value)}/>
         <Usersdropdown handleAddRemove={handleAddRemove} members={searchedUsers} visibleDrop={visibleDrop} setVisibleDrop={setVisibleDrop} />
        </div>
      </div>
    </div>
    <hr/>
    </>
  )
};
