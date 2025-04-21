//https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}



import React, { useEffect } from 'react'
import { GoogleGenAI } from "@google/genai";








const Gemini = ({request}) => {
    const ai = new GoogleGenAI({ apiKey: "AIzaSyB5e-M-zkQUQblTxrqjFRHwtzYWnyGeyyw" });

    useEffect(()=>{

        fetchAPI(request);
        },[])

const fetchAPI = async(req)=> {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: req,
  });
 console.log("waiting response: ",response.text);
}




  return (
    <div className='text-white text-2xl'>Gemini</div>
  )
}

export default Gemini