import "./styles.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import firebase from "firebase";
import { db } from "./Fire";
import ContextAppProvider from "./ContextAPI";
import Notifisystem from "./Notification/Notifisystem";
import React, { useState } from "react";
import { Login } from "./app/auth/Login";
import { Register } from "./app/auth/Register";
import { AuthSwitch } from "./app/auth/AuthSwitch";
import { ChatHome } from "./app/containers/ChatHome/ChatHome";
import { AppContainer } from "./AppContainer";

export default function App() {
  const [checked, setChecked] = useState(false);
  return (
    <Router>
      <ContextAppProvider>
        <Notifisystem />
        <AppContainer />
      </ContextAppProvider>
    </Router>
  );
}
