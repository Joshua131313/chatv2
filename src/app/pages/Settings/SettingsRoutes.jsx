import React from "react";
import { Route } from "react-router-dom";
import { Customize } from "./Pages/Customize/Customize";
import { InviteUsers } from "./Pages/InviteUsers/InviteUsers";
import { Notifications } from "./Pages/Notifications/Notifications";
import { NotificationsList } from "./Pages/Notifications/NotificationsList";
import { Password } from "./Pages/Password/Password";
import { Profile } from "./Pages/Profile/Profile";

export const SettingsRoutes = () => {
  return (
    <div className="innersettingsroutes">
      <Route path="/settings/" exact>
        <Profile />
      </Route>
      <Route path="/settings/password">
        <Password />
      </Route>
      <Route path="/settings/customize">
        <Customize />
      </Route>
      <Route exact path="/settings/notifications">
        <Notifications />
      </Route>
      <Route exact path="/settings/notifications/view">
        <NotificationsList />
      </Route>
      <Route path="/settings/invite-users">
        <InviteUsers />
      </Route>
    </div>
  );
};
