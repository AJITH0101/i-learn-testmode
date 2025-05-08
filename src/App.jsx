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
import Gemini from './ai-interface/Gemini';
import TextToSpeech from './ai-interface/TextToSpeech';
import SpeechToText from './SpeechToText';
import MyAudioRecorder from './ai-interface/MyAudioRecorder';
import Navbar from './Navbar';
import Learn from './Learn';
import GetPro from './GetPro';
import Call from './Call';
import Discover from './Discover';
import Taskbar from './Taskbar';
import TalkAboutAnything from './TalkAboutAnything';
import Voicechat from './Voicechat';
import FrontPage from './components/FrontPage';
import WorkPage from './components/WorkPage';
import LoginScreen from './components/LoginScreen';




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
{/* <div className='w-full h-[100vh]'> */}

     <div className='w-full h-12 fixed z-10'>
      {/* <Navbar/> temp */}
    </div> 
   {/* <div className='fixed bottom-0 left-0 w-full h-12 bg-stone-900 border border-stone-600 z-10 md:hidden lg:hidden'><Taskbar/> </div> */}
       

   

{/* <MyAudioRecorder/>  */}
{/* <TextToSpeech/> */}
     <Routes>
      {/* <Route path='/' element={<Trial />} /> temp */}
      <Route path='/' element={<FrontPage />} />
      <Route path='/workpage' element={<WorkPage />} />
      <Route path='/loginpage' element={<LoginScreen/>} />

      <Route path='/talk' element={<TalkAboutAnything />} />
      <Route path='/talk/voicechat' element={<Voicechat />} />
      <Route path='/learn' element={<Learn />} />
      <Route path='/pro' element={<GetPro/>} />
      <Route path='/call' element={<Call/>} />
      <Route path='/discover' element={<Discover/>} />
      {/* <Route path="/signup" element={<SignUp verification={checkVerification}/>} /> */}
      <Route path="/forgot" element={<Forgot />} />
{/* <Route path="/login" element={<Login verification={checkVerification}/>} />  */}
      <Route path="/dashboard"  element={<PrivateRoute auth={isAuthenticated}><DashBoard /></PrivateRoute>}/> 

    </Routes>  
    {/* </div> */}
    </Provider>
  
  
    </>
  )
}

export default App