import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateUser = ({children}) => {
  const IsDirector = useSelector((state)=>state.userReducer.user.role)
  return (
    <div>
        {localStorage.getItem('token') && IsDirector==="director"? children: <Navigate to="/login" />}
   
    </div>
  )
}

export default PrivateUser