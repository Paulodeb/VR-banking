import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Login from './Login';
import { Navigate } from 'react-router-dom/dist';
 
function Dashboard() {
  
  const { LoggedIn, logout  } = useAuth()

  return LoggedIn ? (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard!</p>
      <Link to="/login">Log out</Link>
    </div>
  ) : (
    <Navigate to="/" replace />
  );
}

export default Dashboard;