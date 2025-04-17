import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Trial = () => {
    const navigate = useNavigate()
    const navigateToLogin = ()=>{
        navigate("/login")

    }
  return (
    <>
    <div className='w-full h-[100vh]'>
        <div className='w-full h-24 flex justify-end pr-10'>       
      
        <button className='w-1/15 h-9 border border-stone-500 text-sm rounded-md mt-5 text-stone-600  font-poppins' onClick={navigateToLogin}>
            Login         
        </button>
     </div>
    </div>
     
    </>
   
  )
}

export default Trial