import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import googleIcon from './assets/googleIcon.png'
import fbIcon from './assets/fblogo.png'
import { Link } from 'react-router-dom';
import { auth } from './firebase'; 
import { sendPasswordResetEmail } from 'firebase/auth';
import { useSelector,useDispatch } from 'react-redux';
import { mailid} from './authSlice';
import { IoIosClose } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const closeIcon = <IoIosClose />
const facebookIcon = <IoLogoFacebook size={27}/>

const Forgot = ({selectLoginSignup}) => {
    const[email,setEmail] = useState("")  
    const getMailId = useSelector((state)=>state.authentic.mail)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
    setEmail(getMailId)       
    },[])

const handleNavigate = (value)=>{
  selectLoginSignup(value)
}




    const handleResetPassword = async()=>{
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("Password Reset link sent, to your email")
            setTimeout(()=>{
              navigate("/login")
            },2000)
        }catch(error){
          toast.error("Password Reset Error")
          setTimeout(()=>{
            navigate("/login")
          },2000)       

        }
    }
  return (
    <>
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <ToastContainer />
      <div className='lg:w-1/2 lg:h-4/5 md:w-1/2 md:h-4/5 w-[90%] h-4/5 bg-white rounded-lg flex justify-center'>
        <div className='w-4/5 flex flex-col items-center justify-center'>
          
          <div className='font-semibold text-xl mb-2 font-poppins text-stone-700 mb-4'>Password Reset</div>
  
          <div className='text-sm text-stone-500 text-center mb-8 font-poppins'>
            Provide the email address associated with your account to recover your password.
          </div>
  
          <input
            className='w-full h-10 border border-stone-300 rounded-lg px-3 text-sm font-poppins mb-4'
            placeholder='Email*'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
  
          <button
            className='w-full h-10 bg-stone-500 text-white rounded-md font-poppins mb-4'
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
  
          <div className='w-full flex justify-between gap-2 mb-6'>
            <button
              className='w-1/2 h-9 border border-stone-500 text-sm rounded-md text-stone-600 font-poppins'
              onClick={()=>handleNavigate("login")}
            >
              Login
            </button>
            <button
              className='w-1/2 h-9 border border-stone-500 text-sm rounded-md text-stone-600 font-poppins'
              onClick={()=>handleNavigate("signup")}
            >
              Register
            </button>
          </div>
  
          <div className='w-full flex items-center justify-center text-xs font-poppins font-semibold text-stone-700'>
            <div>Or sign in with</div>
            <img
              src={googleIcon}
              alt='google'
              className='w-5 h-5 ml-2 cursor-pointer'
              onClick={() => dispatch(increment())}
            />
            <div className='text-blue-600 ml-2 cursor-pointer'>{facebookIcon}</div>
          </div>
        </div>
      </div>
    </div>
  </>
  
   
  )
}

export default Forgot