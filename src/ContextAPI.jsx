import React, { createContext, useEffect, useRef, useState } from "react";
import firebase from "firebase";
import { db } from "./Fire";
import axios from "axios";
import { addNotification } from "./Notification/Addnotification";
import { useGetAllUserChats } from "./app/services/GetAllUserChats";
import { Redirect, useHistory, useLocation } from "react-router-dom";

export const StoreContext = createContext();
const curUser = firebase.auth().currentUser;
const ContextAppProvider = (props) => {
  const [user, setUser] = useState("");
  const notifisystem = useRef();
  const [userinfo, setUserinfo] = useState("");
  const [firebaseLoaded, setFirebaseLoaded] = useState(false);
  const usersConvos = useGetAllUserChats();
  const history = useHistory()
  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        // history.push('/chat')
      } else {
        setUser("");
        // history.push('/login')
      }
      setFirebaseLoaded(true);
    });
  };
  const addNoti = (msg, icon) => {
    addNotification({
      notifisystem,
      msg,
      icon
    });
  };
  useEffect(() => {
    user &&
      db
        .collection("users")
        .doc(user.uid)
        .onSnapshot((snap) => {
          setUserinfo(snap.data());
        });
  }, [user]);
  // useEffect(()=> {
  //   localStorage.setItem('language', JSON.stringify(lng))
  // }, [lng])
  useEffect(() => {
    authListener();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        user,
        setUser,
        curUser,
        notifisystem,
        addNoti,
        userinfo,
        firebaseLoaded,
        usersConvos
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
export default ContextAppProvider;
