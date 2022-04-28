import React from "react";
import { useLocation } from "react-router-dom";
import { GuestImg } from "../../../components/User/GuestImg";
import { NameParent } from "../../../components/User/NameParent";
import { useGetConvoIDFromPath } from "../../../services/GetConvoIDFromLocation";
import { useGetMembersById } from "../../../services/GetMembersById";
import { useGetUser } from "../../../services/GetUserId";
import "./ChatSection.css";
import { ToName } from "./ToName";

export const Header = (props) => {
  const { convoid, members } = props;
  // const convoid = useGetConvoIDFromPath()
  // const members = useGetMembersById(convoid)
  // console.log(members)
  return (
    <>
      <div className="chatheader">
        <div className="headeruser">
          <GuestImg members={members} />  
          <NameParent members={members} className="defaultname" />
        </div>
        <div className="headercontrols">
          <i className="fal fa-phone"></i>
          <i className="fal fa-video"></i>
          <i className="fal fa-search"></i>
          <i className="fal fa-ellipsis-v"></i>
        </div>
      </div>
    </>
  );
};
