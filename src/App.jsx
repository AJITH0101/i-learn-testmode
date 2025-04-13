import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import PrivateRoute from './PrivateRoute';
import Login from './Login'; // create this component
import DashBoard from './DashBoard';
import './App.css'

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  //   return isAuthenticated ? children : <Login to="/login" />;
  // };

/*
  useEffect(() => {
    if (location.pathname !== '/login') {
      navigate('/login');
    }
  }, []);*/
  return (
    <>
     <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/dashboard"  element={<PrivateRoute auth={{ isAuthenticated: false }}><DashBoard /></PrivateRoute>}/> 

    </Routes>
    </>
  )
}

export default App