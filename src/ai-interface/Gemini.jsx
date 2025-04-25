//https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}



import React, {useState, useEffect, useRef  } from 'react'
import { GoogleGenAI } from "@google/genai";
import TextToSpeech from './TextToSpeech';

const Gemini = ({request,messageArray,aiResponse}) => {

    const [textToTalk, setTextToTalk] = useState(false);
    const ai = new GoogleGenAI({ apiKey: "AIzaSyB5e-M-zkQUQblTxrqjFRHwtzYWnyGeyyw" });
    const dataInput = "Your name is Sani, You are a Personal English trainer.(Please do n't exceed the conversation beyond 30 wordings)" 
    
    const hasLogged = useRef(false);


      useEffect(()=>{
        console.log(messageArray[messageArray.length-1]);
        

      },[messageArray])
     

    useEffect(() => {
     
      
      if (messageArray.length===0 && !hasLogged.current) {
        const dataInput = "Your name is Sani, You are a Personal English trainer. (Please don't exceed the conversation beyond 30 wordings)";
        fetchAPI(dataInput)
        hasLogged.current = true; // Set the flag to true so the log doesn't happen again
      }
       
    
    }, [messageArray]);


    useEffect(() => {
   
      if (request !== "") {
        fetchAPI(request);
      }
    }, [request]);


const fetchAPI = async(req)=> {
//console.log("request in fetchApi:",req);

  try{
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: req,
    });
    const filteredText = response.text.replace(/\*\*/g, "");
    setTextToTalk(filteredText)
    aiResponse(filteredText)
  }catch(error){
    console.log("error occure while fetching api");   

  }
 

}




  return (
    <>
    <TextToSpeech inputText={textToTalk}/>
     <div className='text-white text-2xl'></div>
    </>
   
  )
}

export default Gemini