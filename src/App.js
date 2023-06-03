import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
// import { AuthProvider, PrivateRoute } from '. /contexts/Authcontext';
import { AuthContextProvider } from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom/dist';
import Transfer from './pages/Transfer';

function App() {
  return (
      <AuthContextProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transfer" element={<Transfer />} />
        </Routes> 
        </BrowserRouter>
      </AuthContextProvider>
  );
}

export default App;
