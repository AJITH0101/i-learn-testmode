import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
const arrow =<IoIosArrowDown size={15}/>

const WorkPage = () => {
  const [rotated, setRotated] = useState(false);

  const handleClick = () => {
    setRotated(prev => !prev);
  };
  return (
    <>
    <div className='w-full h-[100vh]'>
      <div className='lg:w-1/6 lg:h-full md:w-1/6 md:h-full bg-stone-300 flex  flex-col'>
      <div className='w-[80%] h-8 border border-stone-500 rounded-sm text-stone-800 text-sm font-poppins flex items-center pl-2'>
        <div className='w-3/4'>Select a Topic</div>
        <div 
      onClick={handleClick}
      className={`transition-transform duration-300 cursor-pointer z-10 ml-2 ${rotated ? 'rotate-180' : 'rotate-0'}`}
    >
      {arrow}
    </div>
  
    </div>
    <div className={`w-[80%] transition-all duration-500 ease-in-out bg-white ${rotated?"h-40":"h-0"}`}>
    <h1
    className={`
      w-full h-8 flex items-center transition-all duration-500 ease-in-out  font-poppins text-xs text-stone-600 pl-1 border-b border-stone-400 
      ${rotated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
    `}
  >
    Casual Conversation
  </h1>


  <h1
    className={`
      w-full h-8 flex items-center transition-all duration-500 ease-in-out  font-poppins text-xs text-stone-600 pl-1 border-b border-stone-400 
      ${rotated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
    `}
  >
    Job Interviews
  </h1>


  <h1
    className={`
      w-full h-8 flex items-center transition-all duration-500 ease-in-out  font-poppins text-xs text-stone-600 pl-1 border-b border-stone-400 
      ${rotated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
    `}
  >
    Restaurant/Order food
  </h1>
  <h1
    className={`
      w-full h-8 flex items-center transition-all duration-500 ease-in-out  font-poppins text-xs text-stone-600 pl-1 border-b border-stone-400 
      ${rotated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
    `}
  >
    Shopping
  </h1>
  <h1
    className={`
      w-full h-8 flex items-center transition-all duration-500 ease-in-out  font-poppins text-xs text-stone-600 pl-1 
      ${rotated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
    `}
  >
    Travel and Directions
  </h1>
    </div>
      </div>

    </div>
    </>
    
  )
}

export default WorkPage