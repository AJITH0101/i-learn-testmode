import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login'; // create this component
import './App.css'

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (location.pathname !== '/login') {
      navigate('/login');
    }
  }, []);
  return (
    <>
     <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App