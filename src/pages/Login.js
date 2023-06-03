import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from './contexts/AuthContext';
import { useAuth } from '../contexts/AuthContext';
import Dashboard from './Dashboard';
import { Navigate } from 'react-router-dom/dist';

function Login() {
  const { LoggedIn, password, setPassword, username, setUsername, login } = useAuth();
  const navigate = useNavigate();
  /* 
  const { loggedIn, login } = useContext(AuthContext); */
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  //  const handleLogin = (e) => {
  //   e.preventDefault();
  //   login(username, password);
  // };

  // if (loggedIn) {
  //   return <Navigate to="/dashboard" replace />;
  // } 
   const handleLogin = (e) => {
    e.preventDefault();
    // setCurrentUser({ name: userName });
    // setEmail({ email: email });
    // setPassword({ password: password });
    login();
    navigate('/dashboard');
  };

 

  return !LoggedIn ? (
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
  ): (
    <Navigate to="/dashboard" replace />
  )
}

export default Login;
