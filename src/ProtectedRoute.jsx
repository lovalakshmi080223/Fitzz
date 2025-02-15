import React, {useState, useEffect} from 'react'

import {auth} from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const unsubcribe = onAuthStateChanged(auth, (currentuser) => {
        setUser(currentuser)
        setLoading(false)
      })
      return () => unsubcribe();

    },);
    if(loading){
      return <p> Loading</p>
    }
    return user ? children : <Navigate to='/login'></Navigate>


 
}

export default ProtectedRoute;