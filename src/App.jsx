import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login'; // create this component
import './App.css'

const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App