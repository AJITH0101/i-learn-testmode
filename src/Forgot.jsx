import React,{useState} from 'react'
import googleIcon from './assets/googleIcon.png'
import fbIcon from './assets/fblogo.png'
import { Link } from 'react-router-dom';
import { auth } from './firebase'; 
import { sendPasswordResetEmail } from 'firebase/auth';
import { useSelector,useDispatch } from 'react-redux';
import { increment } from './authSlice';

const Forgot = () => {
    const[email,setEmail] = useState("")  
    const count = useSelector((state)=>state.authentic.value)
    const dispatch = useDispatch()
    const handleResetPassword = async()=>{
        try {
            await sendPasswordResetEmail(auth, email);
        }catch(error){

        }
    }
  return (
    <> 
    <div className='w-full h-[100vh] flex justify-center items-center'>
        <div className='w-2/5 h-96 bg-white px-10'>
            <div className=' font-semibold text-xl mt-8 font-poppins text-stone-700'>Password Reset{count}</div>
            <div className='font-poppins mt-4 text-sm text-stone-500'>Provide the email address associated with your account to recover your password.</div>
         <div className="relative w-full mt-5">
         <input className='w-full h-10 mt-5 border border-stone-300 rounded-lg px-2 text-sm  font-poppins' placeholder='Email*' type='email'
     onChange={(e) => setEmail(e.target.value)}
     required/>
     <button className='w-full h-10 bg-blue-500 text-white rounded-md mt-5 font-poppins'  onClick={handleResetPassword}>Reset Password</button>
<div className='w-full h-10 flex justify-end'>
     <button className='w-2/10 h-9 border border-stone-500 text-sm rounded-md mt-5 text-stone-600 font-poppins'>
     <Link to="/login">
        Login
      </Link>
     </button>
     <button className='w-2/10 h-9 border border-stone-500 text-sm rounded-md mt-5 text-stone-600 ml-2 font-poppins'>
     <Link to="/signup">
        Register
      </Link>
     </button>
    
 </div>  
      
           </div>
   
    <div className='w-full h-10 flex justify-start mt-8 font-semibold text-xs font-poppins'> Or sign in-with
     <img src={googleIcon} alt='google' className='w-5 h-5 ml-2' onClick={() => dispatch(increment())} />
    <img src={fbIcon} alt='google' className='w-6 h-6 ml-2 bg-blue-600' /></div>  
   
        </div>
    </div>
    </>
   
  )
}

export default Forgot