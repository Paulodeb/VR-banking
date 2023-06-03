import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {
    const {loggedIn, logout} = useContext(AuthContext)
  const handleLogout = () => {
    logout()
  }
  if(!loggedIn){
    return <Navigate to="login" replace={true}/>
  }
    return (
    <div>
        <h2>Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard