import React, { useEffect, useState } from "react";

const RecordVoice = ({enableSpeech,stopSpeaking,audioFetched,autoVoiceEnd})=> {
   const[voiceState,setVoiceState]= useState(false)
  // const[repeatVoice,setRepeatVoice]= useState(false)
  let repeatVoice = false


    useEffect(()=>{
        if(enableSpeech){
            handleSpeech()
        }
    },[enableSpeech])

useEffect(()=>{

})

let recognition;
//let isRecognizing = false;

const handleSpeech = () => {
  let dummyResult = null
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.log("Speech Recognition not supported");
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    
    let fullTranscript = '';

    const result = event.results[event.resultIndex];
    dummyResult = result
    let finalResultTimeout;

    for (let i = 0; i < event.results.length; i++) {

       clearTimeout(finalResultTimeout);
        fullTranscript += event.results[i][0].transcript + ' ';
        //console.log(fullTranscript);
        audioFetched(fullTranscript);
    }

    if(result.isFinal){


        finalResultTimeout = setTimeout(() => {
          // Optional check again if needed
          if(result.isFinal){
            setTimeout(() => {
            stopSpeaking(false);
            recognition.stop();
            console.log("voice stopped Ajith");
            autoVoiceEnd(fullTranscript,true)
            repeatVoice = true;
          },100); // This will run after 100ms, which is fine
          }
          
        }, 2000); // Initial delay of 1 second
 
            
    }
  };

      

    recognition.onerror = (event) => {
    console.log("Speech recognition error:", event.error);
    recognition.stop();
  };


  recognition.onend=()=>{  
    recognition.stop();
    stopSpeaking(false)
    repeatVoice = false
  }
  
  recognition.start();
};






  return (
    <>
    </>
  );
}

export default RecordVoice;
 