import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../../components/Logo/Logo";
import { User } from "../../../components/User/User";
import { handleLogout } from "../../../services/DBFunctions";
import "./Sidebar.css";

export const Sidebar = (props) => {
  const SideLink = (props) => {
    const { icon, link } = props;
    return (
      <NavLink
        to={link}
        exact
        className="sidelink"
        activeClassName="activeSideLink"
      >
        <i className={icon} key={link}></i>
      </NavLink>
    );
  };
  return (
    <div className="sidebar flexcol">
      <Logo />
      <div className="sidelinks">
        {/* <SideLink icon="fa fa-cube" link="/" />
        <SideLink icon="fa fa-calendar" link="/meeting" /> */}
        <SideLink icon="fa fa-comment" link="/chat" />
        <SideLink icon="fa fa-bell" link="/settings/notifications/view" />
        <i className="fa fa-sign-out responsiveicon" onClick={() => handleLogout()}></i>
        <SideLink icon="fa fa-user-plus responsiveicon" link="/settings/invite-users" />
        <SideLink icon="fa fa-cog responsiveicon" link="/settings" />
      </div>
      <div className="bottomlinks">
        <i className="fa fa-sign-out" onClick={() => handleLogout()}></i>
        <SideLink icon="fa fa-user-plus" link="/settings/invite-users" />
        <SideLink icon="fa fa-cog" link="/settings" />
        <User />
      </div>
    </div>
  );
};
