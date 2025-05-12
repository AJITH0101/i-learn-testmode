//https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}

import axios from 'axios'
import { useSelector } from 'react-redux';
// import { selectTopic } from '../selectSlice';
import React, {useState, useEffect, useRef  } from 'react'
import { GoogleGenAI } from "@google/genai";
import TextToSpeech from './TextToSpeech';
const API_KEY = import.meta.env.VITE_API_KEY;

//const API_KEY = "AIzaSyB5e-M-zkQUQblTxrqjFRHwtzYWnyGeyyw"
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
const aiInitialTraining_1 = "Your name is Arya, You are a Personal english trainer.Just make a casual conversation(Please do n't exceed the conversation beyond 30 words, don't give answers for question otherthan the part of english training, also please analyze the user input conversation,do n't take this as question to answer this line, just introduce yourself)" 
const aiInitialTraining_2 = "Your name is Arya, You are a HR Manager in interview panel.Just start a intterview(Please do n't exceed the conversation beyond 30 wordings, don't give answers for question otherthan the part of interview question and answers, also please analyze the user input conversation,do n't take this as question to answer this line, Start the conversation with wishing)" 
const aiInitialTraining_3 = "Your name is Arya, You are a restaurant supplier. I m your customer(Please do n't exceed the conversation beyond 30 wordings, don't give answers for question otherthan the part of food item, also please analyze the user input conversation,do n't take this as question to answer this line, Start the conversation as a supplier)" 
const aiInitialTraining_4 = "Your name is Arya, You are a shop owner. I m your customer(Please do n't exceed the conversation beyond 30 wordings, don't give answers for question otherthan the part of shopping, also please analyze the user input conversation,do n't take this as question to answer this line, Start the conversation as a shop keeper)" 
const aiInitialTraining_5 = "Your name is Arya, You are a english trainer to teach vocabulary. I m your student(Please do n't exceed the conversation beyond 30 wordings, don't give answers for question otherthan the part of english training, also please analyze the user input conversation,do n't take this as question to answer this line, Just introduce yourself)" 

const Gemini = ({request,voiceEndFlag,aiResponse, voiceFlagSet}) => {

    const [textToTalk, setTextToTalk] = useState(false);
    const[voiceFlag,setVoiceFlag] = useState(false)
    const [chatHistory,setChatHistory]=useState([])
    /*
    const[chatHistory,setChatHistory]=useState([
    {
      role: "user",
      parts: [
        {
          text: aiInitialTraining_1
        }
      ]
    }

    ])*/
    const selectedTopic = useSelector((state) => state.test);
    const ai = new GoogleGenAI({ apiKey: API_KEY });   
    const hasFetched = useRef(false);    


useEffect(()=>{   
 //initialFetch(aiInitialTraining_1);
},[])

 useEffect(()=>{
  

  console.log("chat history cleared");
  let initialPrompt
 
  if(selectedTopic.count==="Casual conversation"){    
    initialPrompt = aiInitialTraining_1;
  }
  else if(selectedTopic.count==="Job interviews"){
    initialPrompt = aiInitialTraining_2;
  }
  else if(selectedTopic.count==="Order food"){
    initialPrompt = aiInitialTraining_3;
  }
  else if(selectedTopic.count==="Shopping"){
    initialPrompt = aiInitialTraining_4;
  }
  else if(selectedTopic.count==="Vocabulary exercises"){
    initialPrompt = aiInitialTraining_5;
  }

 fetchData(initialPrompt)

 },[selectedTopic])

const voiceEndNotification =(voice)=>{
voiceEndFlag(voice)
  //console.log("voice voice",voice);
}


useEffect(()=>{
   
  if(request){
   fetchData(request,"user")
   setVoiceFlag(false)
   }

},[request])


/*
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
              response.data.candidates?.[0]?.content?.parts?.[0]?.text*/
              //  ?.replace(/\*/g, "")
        /*        ?.trim() || "I m BACK?";

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
  };*/

  const initialFetch = async(askAI)=>{
    if (hasFetched.current) return;//to render once
    hasFetched.current = true;

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