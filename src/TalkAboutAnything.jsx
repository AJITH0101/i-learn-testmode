import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { RiChatVoiceLine } from "react-icons/ri";
import { TbPhoneCall } from "react-icons/tb";
import sani from "./assets/ai-girl.png"
import guy from "./assets/guy.png"
import { CgArrowsExchange } from "react-icons/cg";

const voiceChatIcon = <RiChatVoiceLine  size={35}/>
const callIcon = <TbPhoneCall  size={35}/>
const arrow = <CgArrowsExchange   size={45}/>

const TalkAboutAnything = () => {
    const navigate = useNavigate()


    const handleVoiceChat =(path)=>{
        navigate(path)
    }

  return (
    <>
    <div className='w-full h-[100vh] border border-stone-600 flex justify-center items-center '>
   
        <div className='w-full h-56 flex justify-center items-center flex-col'>
          <div className='text-white font-poppins text-lg'>Select one</div>   
        <div className='text-blue-400 font-poppins text-sm mt-2'>Voice chat with Sani</div>
        <div className='lg:w-3/10 lg:h-20 md:w-3/10 md:h-20 w-4/5 h-20 bg-stone-900 rounded-lg mt-1 flex flex-row justify-between px-4 items-center' onClick={()=>handleVoiceChat("/talk/voicechat")}>
       
        <div><img src={sani} alt='sani' className='w-14 h-14'/></div> 
        <div className='text-stone-400'>{voiceChatIcon}</div>  
        <div className='text-stone-400'>{arrow}</div>       
        <div><img src={guy} alt='guy' className='w-14 h-14'/></div>
        </div>

        <div className='text-blue-400 font-poppins text-sm mt-3'>Call Sani</div>
        
        <div className='lg:w-3/10 lg:h-20 md:w-3/10 md:h-20 w-4/5 h-20 bg-stone-900 rounded-lg mt-1 flex flex-row justify-between px-4 items-center'>

                <div><img src={sani} alt='sani' className='w-14 h-14'/></div>  
                <div className='text-stone-400'>{callIcon}</div>   
                <div className='text-stone-400'>{arrow}</div>      
                <div><img src={guy} alt='guy' className='w-14 h-14'/></div>
                </div>
                        
        
     
</div>

    </div>
    </>
  )
}

export default TalkAboutAnything