import React, { useState } from 'react'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from './firebase'; 
import { Link } from 'react-router-dom';
import googleIcon from './assets/googleIcon.png'
import fbIcon from './assets/fblogo.png'
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";


const eyeOpen = <RxEyeOpen />
const eyeClosed = <GoEyeClosed />


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
 const [showPassword, setShowPassword] = useState(false);
 const navigate = useNavigate();

  const handleSignup = async()=>{

    if (password !== confirm) {
      console.log("Password not match");  

      //setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      //await sendEmailVerification(userCredential.user);
      console.log("User created:", userCredential.user); 
 
     
    } catch (error) {
      console.log(error);     
    }
    setEmail("") 
    setPassword("")   
    setConfirm("")
    navigate('/login');    
  }

 
  
  return (
  <>
  <div className='w-full h-[100vh] flex justify-center items-center font-poppins'>
    <div className='w-1/4 h-5/6 bg-white rounded-lg flex justify-center'>
    <div className='w-full h-full flex flex-col items-center'>
    <div className='text-xl text-center mt-6'>Signup</div>

 

    <input className='w-5/6 h-10 mt-5 border border-stone-300 rounded-lg px-2 text-sm' placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <div className="relative w-5/6 mt-5">
          <input
            className="w-full h-10 border border-stone-300 rounded-lg px-2 pr-10 text-sm"
            placeholder="Create password"
            type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <RxEyeOpen /> : <GoEyeClosed />}
          </span>
        </div>
        <input className='w-5/6 h-10 mt-5 border border-stone-300 rounded-lg px-2 text-sm' placeholder='Confirm password' type='password' value={confirm} onChange={(e) => setConfirm(e.target.value)} />
        <button className='w-5/6 h-10 bg-blue-500 text-white rounded-md mt-5' onClick={handleSignup}>Signup</button>
        <label className='text-xs mt-2'>
          Already have an account?{' '}
          <Link to="/login" className='text-blue-600 underline hover:text-blue-800'>
            Login
          </Link>
        </label>

  
    <label className='text-md text-stone-500 mt-3'>Or</label>

      <div className='relative w-full h-14 flex justify-center'>
        <button  className='w-5/6 h-10 border border-stone-500 text-xs text-stone-500 rounded-md mt-1 flex items-center  gap-14'>
        <img src={googleIcon} alt='google' className='w-5 h-5 ml-2' />
        Login with Google
        </button>
      </div>

        <div className='relative w-full h-12 flex justify-center'>
          <button className='w-5/6 h-10 bg-blue-600 text-xs text-stone-200 rounded-md mt-2 flex items-center  gap-12'>
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

export default SignUp