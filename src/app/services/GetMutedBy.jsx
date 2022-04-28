import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { db } from "../../Fire";

export const useGetMutedBy = (convoid) => {
  const [mutedBy, setMutedBy] = useState([]);
  const user = firebase.auth().currentUser;
  useEffect(() => {
    setMutedBy([])
    user &&
      db.collection("chats")
        .doc(convoid)
        .collection("mutedBy")
        .onSnapshot((snap) => {
          const items = []
          snap.forEach(doc => items.push(doc.data()))
          setMutedBy(items)
        });
  }, [user, convoid]);
  
  return mutedBy
};
