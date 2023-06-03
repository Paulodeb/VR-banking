import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Transfer = () => {
    const { LoggedIn } = useAuth()
  return (
    <div>
        <h1>Transfer</h1>
    </div>
  ) 
}

export default Transfer
