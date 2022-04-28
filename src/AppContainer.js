import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthSwitch } from "./app/auth/AuthSwitch";
import { Logo } from "./app/components/Logo/Logo";
import { ChatHome } from "./app/containers/ChatHome/ChatHome";
import { StoreContext } from "./ContextAPI";

export const AppContainer = (props) => {
  const { firebaseLoaded, user } = useContext(StoreContext);
  const history = useHistory()
  useEffect(() => {
    if(firebaseLoaded) {
      if(user) {
      }
      else {
        history.push('/login')
      }
    }
  }, [firebaseLoaded, user]);
 
  return (
    <>
      {firebaseLoaded ? (
        <Switch>
          <Route path={["/login", "/forgot-password", "/register"]}>
            <AuthSwitch />
          </Route>
          <Route>
            <ChatHome />
          </Route>
        </Switch>
      ) : (
        <div className="loadingscreen">
          <Logo />
          <div className="loadingdiv">
            <img src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif" />
          </div>
        </div>
      )}
    </>
  );
};
