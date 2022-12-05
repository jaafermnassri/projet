import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ForStudent = ({children}) => {
  const IsStudent = useSelector((state)=>state.userReducer.user.role)
  console.log(IsStudent)
  return (
    <div>
          {/* {localStorage.getItem('token')? children:<Navigate to="/login" />} */}
         {IsStudent==="student"?children:""}
    </div>
  )
}

export default ForStudent