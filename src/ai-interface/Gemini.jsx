//https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}



import React, {useState, useEffect } from 'react'
import { GoogleGenAI } from "@google/genai";








const Gemini = ({request,messageArray,aiResponse}) => {

  const [hasFetched, setHasFetched] = useState(false);
    const ai = new GoogleGenAI({ apiKey: "AIzaSyB5e-M-zkQUQblTxrqjFRHwtzYWnyGeyyw" });
    const dataInput = "Your name is Sani, You are a Personal English trainer.(Please do n't exceed the conversation beyond 30 wordings)" 
    
    


      
     

    useEffect(() => {
      // Run this ONCE when the component mounts
      const dataInput = "Your name is Sani, You are a Personal English trainer. (Please don't exceed the conversation beyond 30 wordings)";
      if (!hasFetched && request === "") {
        fetchAPI(dataInput);
        setHasFetched(true); 
      }
    }, [hasFetched, request]); // <-- empty dependency array means it runs only once

/*
    useEffect(() => {
      // This runs every time `request` changes, but NOT initially
      if (request !== "") {
        fetchAPI(request);
      }
    }, [request]);*/

/*
    useEffect(()=>{
      const limit = request 
 console.log("useEffect");

        fetchAPI(limit);
        },[request])
        */

const fetchAPI = async(req)=> {
  console.log("request in fetchApi:",req);
  
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: req,
  });

  const filteredText = response.text.replace(/\*\*/g, "");
//console.log(filteredText);

 aiResponse(filteredText)

}




  return (
    <div className='text-white text-2xl'></div>
  )
}

export default Gemini