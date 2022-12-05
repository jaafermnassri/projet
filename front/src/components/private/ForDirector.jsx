import React from 'react'
import { useSelector } from 'react-redux'

const ForDirector = ({children}) => {
  const IsDirector = useSelector((state)=>state.userReducer.user.role)
  console.log(IsDirector)
  return (
    <div>
          {IsDirector==="director"?children:""}
    </div>
  )
}

export default ForDirector