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

const Forgot = () => {
    const[email,setEmail] = useState("")  
    const getMailId = useSelector((state)=>state.authentic.mail)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
    setEmail(getMailId)       
    },[])

const handleNavigateSignup = ()=>{
navigate("/signup")
}

const handleNavigateLogin = ()=>{
navigate("/login")
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
        <div className='w-2/5 h-96 bg-white px-10'>        

            <div className="w-full relative flex  py-2">
                <div className=' font-semibold text-xl mt-8 font-poppins text-stone-700'>Password Reset</div>
              <div className="absolute right-4 top-8 text-2xl cursor-pointer">
                {closeIcon}
              </div>
            </div>

            <div className='font-poppins mt-4 text-sm text-stone-500'>Provide the email address associated with your account to recover your password.</div>
         <div className="relative w-full mt-5">
         <input className='w-full h-10 mt-5 border border-stone-300 rounded-lg px-2 text-sm  font-poppins' placeholder='Email*' type='email' value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
                <button className='w-full h-10 bg-blue-500 text-white rounded-md mt-5 font-poppins'  onClick={handleResetPassword}>Reset Password</button>

            <div className='w-full h-10 flex justify-end'>
                <button className='w-2/10 h-9 border border-stone-500 text-sm rounded-md mt-5 text-stone-600 font-poppins' onClick={handleNavigateLogin}>
                    Login        
                  </button>
                <button className='w-2/10 h-9 border border-stone-500 text-sm rounded-md mt-5 text-stone-600 ml-2 font-poppins' onClick={handleNavigateSignup}>
                    Register
                  </button>    
            </div>  
      
           </div>
   
    <div className='w-full h-10 flex justify-start mt-8 font-semibold text-xs font-poppins'> <div className='mt-1'>Or sign in-with</div>
     <img src={googleIcon} alt='google' className='w-5 h-5 ml-2 mt-1' onClick={() => dispatch(increment())} />
    {/* <img src={fbIcon} alt='google' className='w-6 h-6 ml-2 bg-blue-600' /> */}
    <div className='text-blue-600 ml-1'>{facebookIcon}</div>
    </div>  
   
        </div>
    </div>
    </>
   
  )
}

export default Forgot