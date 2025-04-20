import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import aiGirl from './assets/ai-girl.png'
import { GoHomeFill } from "react-icons/go";
import talking from './assets/talking.png'
import routine from './assets/routine.png'
import hobbies from './assets/hobbies.png'
import vocabulary from './assets/vocabulary.png'
import Taskbar from './Taskbar';
const home = <GoHomeFill color='white' size={28} />

const Trial = () => {
    const navigate = useNavigate()
    const navigateToLogin = ()=>{
        navigate("/login")

    }
  return (
    <>

<div className='w-full h-full overflow-x-hidden relative'>
    <div className='w-full min-h-screen flex justify-center items-center py-10'>
  <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-4'>
    {/* Card 1 */}
    <div className='lg:w-68 lg:h-68 md:w-72 md:h-72 w-40 h-40 border border-stone-500 bg-stone-900 rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out'>
      <div className='w-full h-3/4 flex justify-center'>
        <img src={talking} alt='talking' className='w-4/5 h-4/5' />
      </div>
      <div className='w-full h-1/4'>
        <div className='text-white text-center font-poppins lg:text-md md:text-md text-sm'>Talk about anything</div>
      </div>
    </div>

    <div className='lg:w-68 lg:h-68 md:w-72 md:h-72 w-40 h-40 border border-stone-500 bg-stone-900  rounded-lg  hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out'>
      <div className='w-full h-3/4 flex justify-center'>
        <img src={routine} alt='routine' className='w-3/4 h-auto'/>
        </div>
        <div className='w-full h-1/4'>
        <div className='text-white w-full h-auto text-center font-poppins lg:text-md md:text-md text-sm'>Daily Routine</div>
        </div>
      </div>

      <div className='lg:w-68 lg:h-68 md:w-72 md:h-72 w-40 h-40   border border-stone-500 bg-stone-900  rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out'>
      <div className='w-full h-3/4'>
        <img src={hobbies} alt='hobbies'/>
        </div>
        <div className='w-full h-1/4'>
        <div className='text-white w-full h-auto text-center font-poppins lg:text-md md:text-md text-sm'>Hobbies and Interests</div>
        </div>
      </div>

      <div className='lg:w-68 lg:h-68 md:w-72 md:h-72 w-40 h-40  border border-stone-500 bg-stone-900  rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out'>
        <div className='w-full h-3/4'>
        <img src={vocabulary} alt='vocabulary'/>
        </div>
        <div className='w-full h-1/4'>
        <div className='text-white w-full h-auto text-center font-poppins lg:text-md md:text-md text-sm'>Vocabulary</div>
        </div>
    </div>


    </div>
   
    </div>
<div className='fixed bottom-0 left-0 w-full h-12 bg-stone-800 border-t border-stone-600 z-50 md:hidden lg:hidden'><Taskbar/> </div>
     
     </div>
    </>
   
  )
}

export default Trial