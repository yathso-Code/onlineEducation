import React from 'react'
import { Navigate, Outlet } from 'react-router' 

function PrivatCom() {
   const auth = localStorage.getItem('userIdOfEducation')
  return auth? <Navigate to='/'/>  :<Outlet/> 
}

export default PrivatCom