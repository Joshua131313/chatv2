import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { db } from "../../Fire";

export const useGetNotifications = (limit = 40) => {
  const [notifications, setNotifications] = useState([]);
  const user = firebase.auth().currentUser;
  useEffect(() => {
    setNotifications([])
    user &&
      db.collection("users")
        .doc(user.uid)
        .collection("notifications")
        .limit(limit)
        .onSnapshot((snap) => {
          const items = []
          snap.forEach(doc => items.push(doc.data()))
          setNotifications(items)
        });
  }, [user, limit]);
  
  return notifications
};
