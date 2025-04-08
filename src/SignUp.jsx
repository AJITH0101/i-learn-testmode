import React from 'react'
import { Link } from 'react-router-dom';
import googleIcon from './assets/googleIcon.png'

const SignUp = () => {
  return (
  <>
  <div className='w-full h-[100vh] flex justify-center items-center font-poppins'>
    <div className='w-1/4 h-3/4 bg-white rounded-lg flex justify-center'>
    <div className='w-full h-full flex flex-col items-center'>
    <div className='text-xl text-center mt-6'>Signup</div>
    <input className='w-5/6 h-10 mt-5 border border-stone-300 rounded-lg px-2 text-sm' placeholder='Email' type='email'/>
    <input className='w-5/6 h-10 mt-5 border border-stone-300 rounded-lg px-2 text-sm' placeholder='Create password' type='password'/>
    <input className='w-5/6 h-10 mt-5 border border-stone-300 rounded-lg px-2 text-sm' placeholder='Confirm password' type='password'/>
    <button className='w-5/6 h-10 bg-blue-500 text-white rounded-md mt-5'>Signup</button>
    <label className='text-xs mt-2'>
  Already have an account?{' '}
  <Link to="/login" className='text-blue-600 underline hover:text-blue-800'>
    Login
  </Link>
</label>
    <label className='text-md text-stone-500 mt-3'>Or</label>
    <div className='relative w-full h-24 flex justify-center'>
  <button className='w-5/6 h-10 border border-stone-500 text-xs text-stone-500 rounded-md mt-5 flex items-center justify-center gap-2'>
    <img src={googleIcon} alt='google' className='w-5 h-5' />
    Login with Google
  </button>
</div>
    
 

   
    </div>
    </div>
  </div>
  </>
  )
}

export default SignUp