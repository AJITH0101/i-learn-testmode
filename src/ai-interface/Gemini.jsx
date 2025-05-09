//https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}

import axios from 'axios'
import { useSelector } from 'react-redux';
// import { selectTopic } from '../selectSlice';
import React, {useState, useEffect, useRef  } from 'react'
import { GoogleGenAI } from "@google/genai";
import TextToSpeech from './TextToSpeech';

const API_KEY = "AIzaSyB5e-M-zkQUQblTxrqjFRHwtzYWnyGeyyw"
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
const aiInitialTraining = "Your name is Arya, You are a Personal english trainer.(Please do n't exceed the conversation beyond 30 wordings, don't give answers for question otherthan the part of english training, also please analyze the user input conversation,do n't take this as question to answer this line, just introduce yourself)" 

const Gemini = ({request,voiceEndFlag,aiResponse, voiceFlagSet}) => {

    const [textToTalk, setTextToTalk] = useState(false);
    const[voiceFlag,setVoiceFlag] = useState(false)
    const[chatHistory,setChatHistory]=useState([
    {
      role: "user",
      parts: [
        {
          text: aiInitialTraining
        }
      ]
    }

    ])
   const selectedTopic = useSelector((state) => state.test);
    const ai = new GoogleGenAI({ apiKey: "AIzaSyB5e-M-zkQUQblTxrqjFRHwtzYWnyGeyyw" });
   
    const hasFetched = useRef(false);    


useEffect(()=>{   
  // const initialTimer= setTimeout(()=>{   

  initialFetch();
// },3000)
// return ()=> clearTimeout(initialTimer)  

},[])

 useEffect(()=>{
  console.log("selected topic recieved in Gemini",selectedTopic);  
 },[selectedTopic])

const voiceEndNotification =(voice)=>{
voiceEndFlag(voice)
  console.log("voice voice",voice);
  

}


useEffect(()=>{
  //console.log("request",request);
  
  if(request){
   fetchData(request,"user")
   setVoiceFlag(false)
   }
 // fetchData(request,"user")
 //console.log(request);
 

},[request])



const initialFetch = async () => {
  if (hasFetched.current) return;
  hasFetched.current = true;

  
    try {
       const response = await axios.post(
              url,
              {
                //contents: updatedHistory    
                contents:chatHistory     
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

               const maintainHistory = {
                role: "model",
                parts: [
                  {
                    text: aiFilter
                  }
                ]

               }

                setChatHistory((prev)=>([...prev,maintainHistory]))
        //console.log(aiFilter); 
        setTextToTalk(aiFilter) 
        aiResponse(aiFilter) 
        voiceFlagSet(voiceFlag)

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

    const newModelMessage = {
    role: 'model',
    parts: [{ text: aiFilter }],
  };


   const latestHistory = [...updatedHistory, newModelMessage];
    setChatHistory(latestHistory)
    aiResponse(aiFilter) 
    setTextToTalk(aiFilter) 
      
    } catch (error) {
      console.log(error);      
      
    }

   console.log(chatHistory);   
   
  }


  return (
    <>
    <TextToSpeech inputText={textToTalk} sendVoiceEnd={voiceEndNotification}/>
  
    </>
   
  )
}

export default Gemini