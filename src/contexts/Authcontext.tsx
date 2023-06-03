import React, { createContext, useState, useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

interface User {
  username: string;
  password: string;
  bal: string;
  accountNumber: string;
  bankName: string;
}

interface AuthContextType {
  loggedIn: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  login: () => {},
  logout: () => {},
});

const AuthProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (username: string, password: string) => {
    // Perform login logic here (e.g., API call, validation, etc.)
    // For simplicity, let's assume successful login
    setLoggedIn(true);
  };

  const logout = () => {
    // Perform logout logic here
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const PrivateRoute: React.FC<{ path: string; element: React.ReactElement }> = ({
  path,
  element,
}) => {
  const { loggedIn } = useContext(AuthContext);

  return loggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export { AuthContext, AuthProvider, PrivateRoute };
