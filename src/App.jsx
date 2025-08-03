import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

// Default import (NavBar2 is exported as default in index.js)
import NavBar from './components'

// Named imports for other components
import {

  Footer,

} from './components'

import { Outlet } from 'react-router-dom'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { useNavigate } from 'react-router-dom'
function App() {

  const [loading  , setLoading]=useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
       if(userData)
       {
        dispatch(login({userData}))
       }
       else{
        dispatch(logout())
       }
    }).finally(()=> setLoading(false))
  },[])
  return (
    <>
     <NavBar/>
     <Outlet/>
     <Footer/>
     
     </>
  )
}

export default App
