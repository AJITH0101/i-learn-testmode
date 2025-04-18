//https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}



import React, { useEffect } from 'react'
import { GoogleGenAI } from "@google/genai";








const Gemini = () => {
    const ai = new GoogleGenAI({ apiKey: "AIzaSyB5e-M-zkQUQblTxrqjFRHwtzYWnyGeyyw" });

    useEffect(()=>{

        fetchAPI();
        },[])

async function fetchAPI() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "can you teach me english, 'Reminder: don't exceed the answer beyond 30 words' ",
  });
  console.log(response.text);
}




  return (
    <div className='text-white text-2xl'>Gemini</div>
  )
}

export default Gemini