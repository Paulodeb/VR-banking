import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';

function Login() {/* 
  const { loggedIn, login } = useContext(AuthContext); */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 /*  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  if (loggedIn) {
    return <Navigate to="/dashboard" replace />;
  } */

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
