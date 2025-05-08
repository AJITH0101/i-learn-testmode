import React,{useState, useEffect} from 'react'
import Login from '../Login'
import SignUp from '../SignUp'
import Forgot from '../Forgot'
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
const[loginState,setLoginState]= useState("login")
const navigate = useNavigate();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)'); // md breakpoint

    const handleResize = (e) => {
      if (e.matches) {
        navigate('/');
      }
    };

    // Initial check in case the screen is already large
    if (mediaQuery.matches) {
      navigate('/');
    }

    // Listen for changes
    mediaQuery.addEventListener('change', handleResize);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [navigate]);

const checkSignUp=(value)=>{
    setLoginState(value)
    }
  
    const forgotAccWindow=(value)=>{
      setLoginState(value)
    }

    const moveBack=()=>{
        navigate("/")
    }

  return (
    <>
    <div className='w-full h-[100vh] block md:hidden lg:hidden xl:hidden'>

    <div className='w-full h-3/4'>
              {
  loginState === "signup" ? (
    <SignUp loginEnable={checkSignUp} />
  ) : loginState === "login" ? (
    <Login signUpTrue={checkSignUp} forgotAccount={forgotAccWindow} />
  ) : loginState === "forgot" ? (
    <Forgot selectLoginSignup={checkSignUp} />
  ) : null
}
    </div>
    <div className='w-full h-auto'>
    <button className='ml-14 mt-4 w-3/4 h-14 border border-stone-800 rounded-lg text-stone-300 text-stone-600' onClick={moveBack}>Back</button>          
    </div>
   
  
   
 </div>
 
    </>
  )
}

export default LoginScreen