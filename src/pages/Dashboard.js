import React from 'react';
import { Link } from 'react-router-dom';
 
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard!</p>
      <Link to="/login">Log out</Link>
    </div>
  );
}

export default Dashboard;