import React, { useEffect, useState } from 'react'
import { db } from '../../Fire'

export const useSearchAllUsers = (search) => {
  const [searchedUsers, setSearchedUsers] = useState()
  useEffect(()=> {
    db.collection('users').where('searchName', '>=', search.toLowerCase()).where('searchName', '<=', search.toLowerCase()+'\uf9ff').limit(8).onSnapshot(snap=> {
        let items = []
        snap.forEach(doc => items.push(doc.data()))
        setSearchedUsers(items)
      })
  }, [search])  
  return searchedUsers
}