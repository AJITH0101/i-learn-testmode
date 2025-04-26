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
 /*   const hasLogged = useRef(false);


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


const historyFilter = [...messageArray];

if(historyFilter.length===0){
  historyFilter.push({
    role: "model",
    parts: [{ text: dataInput }]
  })
}
else{
  historyFilter.push({
    role: historyFilter.sender,
    parts: [{ text: req }]
  })

}

console.log("history",historyFilter);


// console.log("datainput",dataInput);
// console.log("req",req);



if(history.length===0){
  history.push({
    role: "model",
    parts: [{ text: dataInput }]

})
}
else{
  history.push({
    role: "user",
    parts: [{ text: req }]
  })
   

}

  history.push({
    role: history.sender,
    parts: [{ text: history.message }]

})



try{
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: historyFilter


      contents: req,
    });*/
    //const filteredText = response.text.replace(/\*\*/g,"");
//     setTextToTalk(filteredText)
//     aiResponse(filteredText)
//   }catch(error){
//     console.log("error occure while fetching api");   

//   }
 

// }

useEffect(()=>{   
 //const initialTimer= setTimeout(()=>{      
  initialFetch();
  //},3000)
 // return ()=> clearTimeout(initialTimer)    
},[])



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
        console.log(aiFilter); 
        aiResponse(aiFilter)  

      // const response = await ai.models.generateContent({
      //   model: "gemini-2.0-flash", 
  
      //   contents: updatedHistory
      // })






      // const response = await axios.post(
      //   url,
      //   {
      //     contents: updatedHistory         
      //   },
      //   {
      //     headers: {
      //       "Content-Type": "application/json"
      //     }
      //   }
      // );
  
  //     const aiFilteredText=
  //       response.data.candidates?.[0]?.content?.parts?.[0]?.text
  //         ?.replace(/\*/g, "")
  //         ?.trim() || "I'm back";
  // console.log(aiFilteredText);   
  // aiResponse(aiFilteredText)




     




    } catch (error) {
      console.log("AI Error:", error);
    }
  };


  return (
    <>
    <TextToSpeech inputText={textToTalk}/>
     <div className='text-white text-2xl'></div>
    </>
   
  )
}

export default Gemini