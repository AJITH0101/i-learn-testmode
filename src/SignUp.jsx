import React, { useState } from 'react'
import { handleGoogleSignIn } from './googleSignIn.js';
import { handleFacebookSignIn } from './facebooksignin.js';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from './firebase'; 
import { Link } from 'react-router-dom';
import googleIcon from './assets/googleIcon.png'
import fbIcon from './assets/fblogo.png'
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
import { IoIosClose } from "react-icons/io";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



const eyeOpen = <RxEyeOpen />
const eyeClosed = <GoEyeClosed />
const closeIcon = <IoIosClose />

const SignUp = ({verification}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
 const [showPassword, setShowPassword] = useState(false);
 const navigate = useNavigate();


        const handleGoogleClick = async()=>{
         await handleGoogleSignIn(verification);
       }
       const handleFaceBookClick = async()=>{
         await handleFacebookSignIn(verification)
         
       }

  const handleSignup = async()=>{

    if (password !== confirm) {    
     toast.error("Password not matching");
     setPassword("")
     setConfirm("")   
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await sendEmailVerification(userCredential.user);
      toast.success('Verification email sent. Please check your inbox.');
      setTimeout(()=>{
    navigate('/login'); 
    setEmail("") 
    setPassword("")   
    setConfirm("")
    },3000)
      
     
    } catch (error) {
      toast.error('Signup Error')
      setEmail("") 
      setPassword("")   
      setConfirm("")

      //console.log(error);     
    }
  
   
      
  }

 
  
  return (
  <>
  <div className='w-full h-[100vh] flex justify-center items-center font-poppins'>
     <ToastContainer />
    <div className='w-1/4 h-5/6 bg-white rounded-lg flex justify-center'>
    <div className='w-full h-full flex flex-col items-center'>
    <div className="w-full relative flex justify-center items-center py-2 mt-2">
  <div className="text-xl text-center">Signup</div>
  <div className="absolute right-4 top-1 text-2xl cursor-pointer">
    {closeIcon}
  </div>
</div>

 


       
    <form className='w-7/8 h-10 mt-5 rounded-lg px-2 text-sm'>
    
    <input className='w-full h-10 border border-stone-300 rounded-lg px-2 text-sm'  placeholder='Email' type='email'
    onChange={(e) => setEmail(e.target.value)}
    autoComplete="email"
    name='email'
    required/>
   </form>
       
       
       
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
        <button  className='w-5/6 h-10 border border-stone-500 text-xs text-stone-500 rounded-md mt-1 flex items-center  gap-14'
        onClick={handleGoogleClick}>
        <img src={googleIcon} alt='google' className='w-5 h-5 ml-2' />
        Login with Google
        </button>
      </div>

        <div className='relative w-full h-12 flex justify-center'>
          <button className='w-5/6 h-10 bg-blue-600 text-xs text-stone-200 rounded-md mt-2 flex items-center  gap-12'
          onClick={handleFaceBookClick }>
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