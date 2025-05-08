import React, { useState } from 'react'
import { handleGoogleSignIn } from './googleSignIn.js';
import { handleFacebookSignIn } from './facebooksignin.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { IoIosClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'; 
import { Link } from 'react-router-dom';
import googleIcon from './assets/googleIcon.png'
import fbIcon from './assets/fblogo.png'
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


import { useSelector,useDispatch } from 'react-redux';
import { mailid } from './authSlice';

const eyeOpen = <RxEyeOpen />
const eyeClosed = <GoEyeClosed />
const closeIcon = <IoIosClose />

const Login = ({verification,signUpTrue,forgotAccount}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
     const navigate = useNavigate();
     const emailId = useSelector((state)=>state.authentic.value)
     const dispatch = useDispatch()

      const handleGoogleClick = async()=>{
        await handleGoogleSignIn(verification);        
      }
      const handleFaceBookClick = async()=>{
        await handleFacebookSignIn(verification)
        
      }

      const forgotAcc=()=>{
        forgotAccount("forgot")
      }

      const moveToSignup=()=>{
        signUpTrue("signup")
      }

const  handleLogin = async()=>{
  if(email.trim() !== "" && password.trim() !== ""){

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
         verification(true)        
        setEmail("")
        setPassword("")
  
    } catch (error) {
      toast.error("Login Error");      
    }
  }
  else{
    toast.error("Please enter valid email and password");
  }
 
 

}

  return (
    <>

    <div className='w-full h-[100vh] flex justify-center items-center font-poppins'>
    <ToastContainer />
    <div className='lg:w-1/2 lg:h-4/5 md:w-1/2 md:h-4/5 w-[90%] h-4/5 bg-white rounded-lg flex justify-center'>
    <div className='w-full h-full flex flex-col items-center'>
    <div className="w-full relative flex justify-center items-center py-2 mt-2">
  <div className="text-xl text-center text-black">Login</div>
  <div className="absolute right-4 top-1 text-2xl cursor-pointer">
  {/* <Link to="/" > {closeIcon}
  </Link> */}
   
  </div>
</div>
   
   <form className='w-7/8 h-10 mt-5 rounded-lg px-2 text-sm'>
    
      <input className='w-full h-10 border border-stone-300 rounded-lg text-black px-2 text-sm'  placeholder='Email' type='email'
      onChange={(e) => setEmail(e.target.value)}
      autoComplete="email"
      name='email'
      required/>
     </form>
    <div className="relative w-5/6 mt-5">
      <input
        className="w-full h-10 border border-stone-300 rounded-lg px-2 pr-10 text-sm text-black"
        placeholder="Create password" 

        type={showPassword ? 'text' : 'password'}  value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <span
        className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <RxEyeOpen /> : <GoEyeClosed />}
      </span>
    </div>

    <label className='text-xs mt-4'>    
      {/* <Link to="/forgot" className='text-blue-600  hover:text-stone-800'>
      <div onClick={() => dispatch(mailid(email))} className='text-stone-800' >Forgot password?</div>
        
      </Link> */}
      <div className='text-stone-800'onClick={forgotAcc}>Forgot password?</div>
    </label>
 
    <button className='w-5/6 h-10 bg-stone-700 text-white rounded-md mt-5'  onClick={handleLogin}>Login</button>
    <label className='text-xs mt-2 text-black flex flex-row'>
      <div>Don't have an account?&nbsp;</div>
      {/*{' '} <Link to="/signup" className='text-stone-500 underline hover:text-stone-800'> */}
      <div onClick={moveToSignup}>Signup</div>        
      {/* </Link> */}
    </label>
    <label className='text-md text-stone-500 mt-3'>Or</label>

      <div className='relative w-full h-14 flex justify-center'>
        <button className='w-5/6 h-10 border border-stone-500 text-xs text-stone-500 rounded-md mt-1 flex items-center  gap-14'
        onClick={handleGoogleClick}>
        <img src={googleIcon} alt='google' className='w-5 h-5 ml-2' />
        Login with Google
        </button>
      </div>
        <div className='relative w-full h-12 flex justify-center'>
        <button className='w-5/6 h-10 bg-stone-700 text-xs text-stone-200 rounded-md mt-2 flex items-center  gap-12'
        onClick={handleFaceBookClick}>
        <img src={fbIcon} alt='google' className='w-6 h-6 ml-2' />
        Login with Facebook
        </button>
        </div>

        
     </div>
    </div>
  </div>
  
    </>
  )
}

export default Login