import React, { useEffect, useState } from 'react'
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
  const[currentLocation,setCurrentLocation] = useState({
    home:true,
    learn:false,
    pro:false,
    call:false,
    discover:false
  })
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=>{
    if(location.pathname==="/"){
      setCurrentLocation((prev)=>{
        return{
          ...prev,
          home:true,learn:false,pro:false,call:false,discover:false  }}) 
    }

  },[])

  /*

  useEffect(()=>{
 //console.log("location is",location.pathname);
 switch(location.pathname){
  case "/":{
   setCurrentLocation((prev)=>{
      return{
        ...prev,
        home:true,learn:false,pro:false,call:false,discover:false  }}) 
        break;
        }

    case "/":{
   setCurrentLocation((prev)=>{
      return{
        ...prev,
        home:true,learn:false,pro:false,call:false,discover:false  }}) 
        break;
        }
}

  },[])*/

    const navigateTo= (path)=>{
      if(path==="/"){
        setCurrentLocation((prev)=>{
        return{
          ...prev,
          home:true,learn:false,pro:false,call:false,discover:false }}) 
      
        
      }
      if(path==="/learn"){
        setCurrentLocation((prev)=>{
          return{
            ...prev,
            home:false,learn:true,pro:false,call:false,discover:false}}) 

      }

      if(path==="/pro"){
        setCurrentLocation((prev)=>{
          return{
            ...prev,
            home:false,learn:false,pro:true,call:false,discover:false}}) 

      }

      if(path==="/call"){
        setCurrentLocation((prev)=>{
          return{
            ...prev,
            home:false,learn:false,pro:false,call:true,discover:false}}) 

      }


      if(path==="/discover"){
        setCurrentLocation((prev)=>{
          return{
            ...prev,
            home:false,learn:false,pro:false,call:false,discover:true}}) 

      }
      navigate(path)
    }
  return (
   <>
 
     <div className='lg:w-full lg:h-12 flex justify-between mt-1 lg:px-20 md:px-2 px-2'>  
               <div className={`flex lg:flex-row md:flex-row flex-col items-center cursor-pointer  ${currentLocation.home ? "text-white":"text-stone-400"}`} onClick={()=>navigateTo("/")}>
                 <div>{home}</div>
                 <div className=' font-poppins mt-1 text-sm'>Home</div>
               </div>
               <div className={`flex lg:flex-row md:flex-row flex-col items-center cursor-pointer  ${currentLocation.learn ? "text-white":"text-stone-400"}`} onClick={()=>navigateTo("/learn")}>                
                <div>{learn}</div>
                <div className='font-poppins mt-1 text-sm'>Learn</div>
               </div>
               <div className={`flex lg:flex-row md:flex-row flex-col items-center cursor-pointer  ${currentLocation.pro ? "text-white":"text-stone-400"}`} onClick={()=>navigateTo("/pro")}>  
                <div>{pro}</div>
                <div className='font-poppins mt-1 text-sm'>Get Pro</div>
               </div>
               <div className={`flex lg:flex-row md:flex-row flex-col items-center cursor-pointer  ${currentLocation.call ? "text-white":"text-stone-400"}`} onClick={()=>navigateTo("/call")}>  
               <div>{call}</div>
               <div className='font-poppins mt-1 text-sm'>Call</div>
               </div>
               <div className={`flex lg:flex-row md:flex-row flex-col items-center cursor-pointer  ${currentLocation.discover ? "text-white":"text-stone-400"}`} onClick={()=>navigateTo("/discover")}> 
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