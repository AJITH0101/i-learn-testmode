import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { MdMenuBook } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { RiCompass3Fill } from "react-icons/ri";
const home = <GoHomeFill  size={21} />
const learn = <MdMenuBook  size={21} />
const pro = <FaCrown  size={21} />
const call = <IoCallSharp size={21} />
const discover = <RiCompass3Fill  size={21} />

const Taskbar = () => {
  const navigate = useNavigate()

    const navigateToLogin = ()=>{
        navigate("/login")

    }
  return (
   <>
 
     <div className='lg:w-full lg:h-12 flex justify-between mt-1 lg:px-20 md:px-2 px-2'>  
               <div className='flex lg:flex-row md:flex-row flex-col items-center text-stone-300 text-stone-400'>
                 <div>{home}</div>
                 <div className=' font-poppins mt-1 text-sm'>Home</div>
               </div>
               <div className='flex lg:flex-row md:flex-row flex-col items-center  text-stone-400'>                
                <div>{learn}</div>
                <div className='font-poppins mt-1 text-sm'>Learn</div>
               </div>
               <div className='flex lg:flex-row md:flex-row flex-col items-center  text-stone-400'>  
                <div>{pro}</div>
                <div className='font-poppins mt-1 text-sm'>Get Pro</div>
               </div>
               <div className='flex lg:flex-row md:flex-row flex-col items-center text-stone-400'>  
               <div>{call}</div>
               <div className='font-poppins mt-1 text-sm'>Call</div>
               </div>
               <div className='flex lg:flex-row md:flex-row flex-col items-center  text-stone-400'> 
               <div>{discover}</div>
               <div className='font-poppins mt-1 text-sm'>Discover</div>

               </div>
                 {/* <button className='lg:block md:block hidden w-1/7 h-9 mr-4 border border-stone-500 text-sm rounded-md mt-1 text-stone-600  font-poppins' onClick={navigateToLogin}>
                     Login         
                 </button> */}
               </div>
           
   </>
  )
}

export default Taskbar