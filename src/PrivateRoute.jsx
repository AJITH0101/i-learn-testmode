import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Login from './Login';


const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

export default PrivateRoute