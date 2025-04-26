//https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}

import axios from 'axios'
import React, {useState, useEffect, useRef  } from 'react'
import { GoogleGenAI } from "@google/genai";
import TextToSpeech from './TextToSpeech';

const API_KEY = "AIzaSyB5e-M-zkQUQblTxrqjFRHwtzYWnyGeyyw"
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;


const Gemini = ({request,messageArray,aiResponse}) => {

    const [textToTalk, setTextToTalk] = useState(false);
    const[chatHistory,setChatHistory]=useState([])
    const ai = new GoogleGenAI({ apiKey: "AIzaSyB5e-M-zkQUQblTxrqjFRHwtzYWnyGeyyw" });
    const aiInitialTraining = "Your name is Sani, You are a Personal English trainer.(Please do n't exceed the conversation beyond 30 wordings, also do n't take this as question, just introduce yourself)" 
    const hasFetched = useRef(false);    


useEffect(()=>{   
  // const initialTimer= setTimeout(()=>{   

  initialFetch();
// },3000)
// return ()=> clearTimeout(initialTimer)  

},[])


useEffect(()=>{
  //console.log("request",request);
  
  if(request){
   fetchData(request,"user")
   }
 // fetchData(request,"user")
 //console.log(request);
 

},[request])



const initialFetch = async () => {
  if (hasFetched.current) return;
  hasFetched.current = true;

    const systemPrompt = {
      role: "user",
      parts: [
        {
          text: aiInitialTraining
        }
      ]
    };
  

setChatHistory((prev)=>([...prev,systemPrompt]))



 const updatedHistory = [systemPrompt,...chatHistory] 
  
    try {
       const response = await axios.post(
              url,
              {
                contents: updatedHistory         
              },
              {
                headers: {
                  "Content-Type": "application/json"
                }
              }
            );
        
            const aiFilter =
              response.data.candidates?.[0]?.content?.parts?.[0]?.text
                ?.replace(/\*/g, "")
                ?.trim() || "I m BACK?";
        //console.log(aiFilter); 
        setTextToTalk(aiFilter) 
        aiResponse(aiFilter) 

    } catch (error) {
      console.log("AI Error:", error);
    }
  };






  const fetchData = async(askAI)=>{

  const newUserMessage = { role: "user", parts: [{ text: askAI }] };
  const updatedHistory = [...chatHistory, newUserMessage];
  setChatHistory(updatedHistory); 

    try {
      const response = await axios.post(url,
      {
        contents: updatedHistory,
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
  
 
   const aiFilter= response.data.candidates[0].content.parts[0].text.replace(/\*/g, '').trim();
    //const aiResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text.replace(/\*/g, '').trim() || 'No response';
    aiResponse(aiFilter) 
    setTextToTalk(aiFilter) 
//console.log(aiResponse);

   //addMessage(aiResponse)


   



    const newModelMessage = {
      role: 'model',
      parts: [{ text: aiFilter }],//
    };
    setChatHistory((prev) => [...prev, newModelMessage]);
      
    } catch (error) {
      console.log(error);      
      
    }

   console.log(chatHistory);   
   
  }


  return (
    <>
    <TextToSpeech inputText={textToTalk}/>
     <div className='text-white text-2xl'></div>
    </>
   
  )
}

export default Gemini