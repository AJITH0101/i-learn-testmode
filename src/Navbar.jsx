import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import aiGirl from './assets/ai-girl.png'
import { GoHomeFill } from "react-icons/go";
import { MdMenuBook } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { RiCompass3Fill } from "react-icons/ri";
import Taskbar from './Taskbar';
const home = <GoHomeFill color='white' size={21} />
const learn = <MdMenuBook  color='white' size={21} />
const pro = <FaCrown color='white' size={21} />
const call = <IoCallSharp color='white' size={21} />
const discover = <RiCompass3Fill color='white' size={21} />

const Navbar = () => {
    const navigate = useNavigate()
    const navigateToLogin = ()=>{
        navigate("/login")
    }
  return (
    <>
 
           <div className='w-full  h-12 flex flex-row '> 
             <div className='lg:w-1/2 lg:h-24 md:w-1/2 md:h-24  flex flex-row '> 
               <div className='text-blue-300 font-poppins pl-6 mt-1'>i-learn</div>
               <div className='flex flex-row mt-2 ml-10 '>
                  <img src={aiGirl} alt='girl image' className='w-6 h-6' />
                  <div className='text-white font-poppins  ml-2'>Sani-AI</div>
               </div>
              
               </div>    

            <div className='lg:w-1/2 lg:h-12 md:w-1/2 md:h-12  lg:block md:block hidden'> <Taskbar/></div>
                   
                
              
        </div>
  
    </>
  )
}

export default Navbar