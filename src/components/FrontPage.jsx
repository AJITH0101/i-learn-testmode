import React, { useEffect, useState } from 'react'
import Login from '../Login'
import { useNavigate } from 'react-router-dom';
import SignUp from '../SignUp';
import Forgot from '../Forgot';

const FrontPage = () => {
 const[loginState,setLoginState]= useState("login")
  const navigate = useNavigate()

  useEffect(()=>{

  },[])

  const checkSignUp=(value)=>{
  setLoginState(value)
  }

  const forgotAccWindow=(value)=>{
    setLoginState(value)
  }


  const moveToDashboard=()=>{
    navigate("/workpage")
  }

  const gotologinPage=()=>{
navigate("/loginpage")

  }

  return (
    <>
    <div className='w-full h-[100vh] bg-stone-700 text-white flex flex-row flex justify-center'>
        <div className='w-5/6 h-auto ' >
        
        
        <div className="max-w-2xl px-4 pt-3">
            <div className="font-poppins text-xl md:text-2xl lg:text-3xl text-left lg:text-left md:text-left">
            Improve Your English Speaking Skills Through Conversation
            </div>
            {/* <div className="font-poppins lg:text-xl md:text-xl text-sm text-stone-200 mt-2 text-left lg:text-left">
            Improve your English with real-time AI conversation
            </div>    */}
        </div>

        <div className='max-w-2xl h-auto flex justify-center lg:mt-14 md:mt-14 mt-1 font-poppins '>
            <div className='w-full h-auto'> 
                <div className='flex flex-row flex-wrap lg:justify-start md:justify-start justify-center'>
                  <div className='lg:w-2/5 md:w-2/5 w-4/5 lg:h-36 md:h-36 h-26 bg-stone-200 rounded-lg lg:m-4 md:m-4 m-1 text-center'>
                  <h1 className='text-black lg:mt-4 md:mt-2 lg:mt-3 md:mt-3 mt-1'>Speech Recognition</h1>
                  <h1 className='text-stone-600 lg:mt-1 md:mt-1 mt-1 text-left px-5 lg:text-xs  md:text-xs text-xs'>Speak naturally and see your words transcribed in real-time for immediate feedback</h1>
                  </div>

                  <div className='lg:w-2/5 md:w-2/5 w-4/5 lg:h-36 md:h-36 h-26 bg-stone-200 rounded-lg  lg:m-4 md:m-4 m-1 text-center'>
                  <h1 className='text-black lg:mt-4 md:mt-2 lg:mt-3 md:mt-3 mt-1'>Natural Conversation</h1>
                  <h1 className='text-stone-600 lg:mt-1 md:mt-1 mt-1 text-left px-5 lg:text-xs  md:text-xs text-xs'>Practice real-world scenarios like ordering food, job interviews, and casual conversations</h1>
                  </div>             
                </div>

                <div className='flex flex-row flex-wrap lg:justify-start md:justify-start justify-center'>
                  <div className='lg:w-2/5 md:w-2/5 w-4/5  lg:h-36 md:h-36 h-26 bg-stone-200 rounded-lg  lg:m-4 md:m-4 m-1 text-center'>
                  <h1 className='text-black lg:mt-4 md:mt-2  lg:mt-3 md:mt-3 mt-1'>AI Tutor</h1>
                  <h1 className='text-stone-600 lg:mt-1 md:mt-1 mt-1 text-left px-5 lg:text-xs  md:text-xs text-xs'>Receive personalized corrections, grammar tips, and vocabulary suggestions as you speak</h1>
                  </div>
                <div className='lg:w-2/5 md:w-2/5 w-4/5 lg:h-36 md:h-36 h-26 bg-stone-200 rounded-lg  lg:m-4 md:m-4 m-1 text-center'>
                  <h1 className='text-black lg:mt-4 md:mt-2 lg:mt-3 md:mt-3 mt-1'>Speech Recognition</h1>
                  <h1 className='text-stone-600 lg:mt-1 md:mt-1 mt-1 text-left px-5 lg:text-xs  md:text-xs text-xs'>See your improvements over time with detailed feedback and progress tracking</h1>
                </div>             
                </div>

           
                <button className="ml-4 hidden md:block xl:block w-[85%] h-12 border border-stone-300 rounded-lg"onClick={moveToDashboard}> 
                  Start a Free Trial </button>
            </div>                   

            
            
        
        </div> 
        <div className="w-full h-auto">
  {/* Buttons visible only on small screens */}
  <div className="mt-4 block md:hidden flex flex-row flex justify-center">
    <button className="w-40 h-10 border border-white rounded-lg m-2" onClick={moveToDashboard}>Free Trial</button>
    <button className="w-40 h-10 border border-white rounded-lg m-2" onClick={gotologinPage}>Login</button>
  </div>

  {/* Box shown only on md and larger screens */}

</div>
</div>

    <div className="w-full h-auto hidden md:block mt-4">
    {
  loginState === "signup" ? (
    <SignUp loginEnable={checkSignUp} />
  ) : loginState === "login" ? (
    <Login signUpTrue={checkSignUp} forgotAccount={forgotAccWindow} />
  ) : loginState === "forgot" ? (
    <Forgot selectLoginSignup={checkSignUp} />
  ) : null
}
   {/* <SignUp/> */}
  </div>
        


    </div>
    </>
  )
}

export default FrontPage