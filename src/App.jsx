import React, { useEffect, useState } from 'react'

import { Routes, Route } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import SignUp from './SignUp';
import PrivateRoute from './PrivateRoute';
import Login from './Login'; // create this component
import DashBoard from './DashBoard';
import Forgot from './Forgot';
import Trial from './Trial';
import './App.css'

const App = () => {
  const[isAuthenticated, setIsAuthenticated] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();

  const checkVerification=(verify)=>{
  console.log("verification",verify);
    
    if(verify){
      setIsAuthenticated(true)  
      navigate('/dashboard')
    }
    else{
      setIsAuthenticated(false) 
    }
 

  }

  // const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  //   return isAuthenticated ? children : <Login to="/login" />;
  // };


  useEffect(() => {
   // if (location.pathname !== '/') {
      navigate('/');
    //}
  }, []);

  return (
    <>
      <Provider store={store}>
     <Routes>
      <Route path='/' element={<Trial />} />
      <Route path="/signup" element={<SignUp verification={checkVerification}/>} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/login" element={<Login verification={checkVerification}/>} /> 
      <Route path="/dashboard"  element={<PrivateRoute auth={isAuthenticated}><DashBoard /></PrivateRoute>}/> 

    </Routes>
    </Provider>
    </>
  )
}

export default App