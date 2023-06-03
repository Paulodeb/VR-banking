import React, { createContext, useContext, useState } from "react";


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AuthContext = createContext({});

export const AuthContextProvider = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [LoggedIn, setLoggedIn] = useState(false);
  
  const login = (password, email) => {
    // sleep(1000).then(() => {
    //     setUsername(username);
    //     setEmail(email);
    //     setPassword(password);
    // });
      setLoggedIn(true);

    };

  const logout = () => {
    sleep(100).then(() => {
      setLoggedIn(false);
      setUsername(null);
      setEmail(null);
      setPassword(null);
    });
  };

  const authContextValue = {
    username,
    setUsername,
    email,
    setEmail,
    password,
    // handleChange,
    // values,
    setPassword,
    login,
    logout,
    LoggedIn
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

export const useAuth = () => useContext(AuthContext);


