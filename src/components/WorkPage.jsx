import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import Trial from '../Trial';
import Voicechat from '../Voicechat';
import { useDispatch } from 'react-redux';
import { selectTopic, selectSlice } from '../selectSlice';
import { countTest, testSlice } from '../testSlice';
const arrow =<IoIosArrowDown size={15}/>

const WorkPage = () => {
  const [rotated, setRotated] = useState(false);
  const[topic,setTopic]=useState("Select a Topic")
  const[background,setBackground] = useState({
    casual:true,
    interview:false,
    restaurant:false,
    shopping:false,
    vocabulary:false
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    if(topic === "Select a Topic")
 dispatch(countTest("Casual conversation"))
else{
  dispatch(countTest(topic)) 
}
     },[topic]) 
   



  const handleClick = () => {
    setRotated(prev => !prev);
  };


    const selectTopic=(note)=>{
  
    setRotated(prev => !prev);
     
    if(note==="casual"){
    
      setBackground((prev)=>{return{...prev,casual:true, interview:false,restaurant:false,shopping:false,travel:false}})
      setTopic("Casual conversation")
        } 
        else if(note==="interview") {
          setBackground((prev)=>{return{...prev,casual:false, interview:true,restaurant:false,shopping:false,travel:false}})   
          setTopic("Job interviews")
        }
        else if(note==="restaurant") {
          setBackground((prev)=>{return{...prev,casual:false, interview:false,restaurant:true,shopping:false,travel:false}})   
          setTopic("Order food")
        }
        else if(note==="shopping") {
          setBackground((prev)=>{return{...prev,casual:false, interview:false,restaurant:false,shopping:true,travel:false}})   
          setTopic("Shopping")
        }
        else if(note==="vocabulary") {
          setBackground((prev)=>{return{...prev,casual:false, interview:false,restaurant:false,shopping:false,travel:true}})   
          setTopic("Vocabulary exercises")
        }
        else{
          setBackground((prev)=>{return{...prev,casual:true, interview:false,restaurant:false,shopping:false,travel:false}})   
        }
  }

  const backToHome=()=>{
    navigate('/')   
  }

  return (
    <>
    <div className='w-full h-[100vh] flex lg:flex-row md:flex-row flex-col overflow-hidden'>
      <div className='lg:w-1/4 lg:h-full md:w-1/4 md:h-full w-full h-full bg-stone-300  flex lg:flex-col md:flex-col flex-row'>
      <div className='w-full h-full'>
        <div className='flex flex-row lg:flex-col md:flex-col'>
      <button className='w-28 h-8 border border-stone-500 rounded-sm text-sm m-2 lg:ml-4 md:ml-4 z-50' onClick={selectTopic}>Back</button>
          <div className='lg:w-[80%] lg:h-8 md:w-[80%] md:h-8 w-1/2 h-8 ml-4 border border-stone-500 rounded-sm text-stone-800 text-sm font-poppins flex items-center pl-2 mt-2'>
            <div className='lg:w-3/4 md:w-1/2 w-3/4 text-sm lg:text-xs md:text-xs '>{topic}</div>
            <div 
          onClick={handleClick}
          className={`transition-transform duration-300 cursor-pointer z-10 ml-2 ${rotated ? 'rotate-180' : 'rotate-0'}`}
        >
          {arrow}
        </div>
        </div>
      
        </div>
            <div className={`lg:w-[80%] md:w-[80%] w-full  lg:ml-4 md:ml-4 ml-0 transition-all duration-500 ease-in-out bg-white  ${rotated?"h-40":"h-0"}`}>
            <h1
            className={`
              w-full h-8 flex items-center transition-all duration-500 ease-in-out  font-poppins text-xs text-stone-600 pl-1 border-b border-stone-400   cursor-pointer
              ${rotated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} ${background.casual ? "bg-stone-400":"bg-white"}
            `}
          onClick={()=>selectTopic("casual")}>
            Casual Conversation
          </h1>


          <h1
            className={`
              w-full h-8 flex items-center transition-all duration-500 ease-in-out  font-poppins text-xs text-stone-600 pl-1 border-b border-stone-400   cursor-pointer
              ${rotated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} ${background.interview ? "bg-stone-400":"bg-white"}
            `}
            onClick={()=>selectTopic("interview")}>
            Job Interviews
          </h1>


          <h1
            className={`
              w-full h-8 flex items-center transition-all duration-500 ease-in-out  font-poppins text-xs text-stone-600 pl-1 border-b border-stone-400   cursor-pointer
              ${rotated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} ${background.restaurant ? "bg-stone-400":"bg-white"}
            `}
            onClick={()=>selectTopic("restaurant")}>
            Restaurant/Order food
          </h1>
          <h1
            className={`
              w-full h-8 flex items-center transition-all duration-500 ease-in-out  font-poppins text-xs text-stone-600 pl-1 border-b border-stone-400   cursor-pointer
              ${rotated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} ${background.shopping ? "bg-stone-400":"bg-white"}
            `}
            onClick={()=>selectTopic("shopping")}>
            Shopping
          </h1>
          <h1
            className={`
              w-full h-8 flex items-center transition-all duration-500 ease-in-out  font-poppins text-xs text-stone-600 pl-1   cursor-pointer
              ${rotated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} ${background.travel ? "bg-stone-400":"bg-white"}
            `}
            onClick={()=>selectTopic("vocabulary")}>
            Vocabulary exercises
          </h1>
            </div>
            </div>
          
      </div>
      <div className='w-full h-[100vh]'>
         <Voicechat />
      </div>
     

    </div>
    </>
    
  )
}

export default WorkPage