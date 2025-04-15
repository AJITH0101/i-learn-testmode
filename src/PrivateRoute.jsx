import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Login from './Login';


const PrivateRoute = ({ auth, children }) => {
    return auth ? children : <Navigate to="/login" />;
  };

export default PrivateRoute