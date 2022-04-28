import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { StoreContext } from "../../ContextAPI";
import { ForgotPassword } from "./ForgotPassword";
import { Login } from "./Login";
import { Register } from "./Register";

export const AuthSwitch = () => {
  const { user } = useContext(StoreContext);
  return (
    <>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/forgot-password">
        <ForgotPassword />
      </Route>
    </>
  );
};
