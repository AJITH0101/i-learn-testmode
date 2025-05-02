import React, { useEffect, useState } from "react";

const RecordVoice = ({enableSpeech,stopSpeaking,audioFetched})=> {
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
  let muteCount = 0
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
    let finalResultTimeout;

    for (let i = 0; i < event.results.length; i++) {

       clearTimeout(finalResultTimeout);
        fullTranscript += event.results[i][0].transcript + ' ';
        console.log(fullTranscript);
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
            repeatVoice = true;
          },100); // This will run after 100ms, which is fine
          }
          
        }, 2000); // Initial delay of 1 second
   



     
        //   if(result.isFinal) {
        // stopSpeaking(false);
        // recognition.stop();
        // console.log("voice stopped Ajith");
        // repeatVoice = true  
        //   }      
   
            
    }
  };

      

    recognition.onerror = (event) => {
    console.log("Speech recognition error:", event.error);
    recognition.stop();
  };


  recognition.onend=()=>{
 
      if(repeatVoice){
        //recognition.start();
            console.log("on end trigeered successfully");  
            recognition.stop();
            stopSpeaking(false)
           repeatVoice = false
            }
            else{
              recognition.start();
              console.log("voice started again");  
            }
 
  }
  
  recognition.start();
};


/*
const handleSpeech = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.log("Speech Recognition not supported");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
  //   const spokenText = event.results[0][0].transcript;
  //   const spokenText1 = event.results[1][0].transcript;
  //   const spokenText2 = event.results[2][0].transcript;

  //  console.log(spokenText, spokenText1, spokenText2);
  let fullTranscript = '';
  
  // Loop through all available results
  for (let i = 0; i < event.results.length; i++) {
    fullTranscript += event.results[i][0].transcript + ' ';
  }

  console.log(fullTranscript); // Outputs all transcriptions combined
   audioFetched(fullTranscript)
  };

  recognition.onerror = (event) => {
    console.log("Speech recognition error:", event.error);
  };

  recognition.start();


  recognition.onend = () => {
      stopSpeaking(false)    
        console.log("speech stopped");

 };
 
};
*/

/*

  const handleSpeech = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.log("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
     console.log(spokenText);
     audioFetched(spokenText)
    };

    recognition.onerror = (event) => {
      console.log("Speech recognition error:", event.error);
    };

    recognition.start();

   

  
    recognition.onend = () => {
        stopSpeaking(false)    
          console.log("speech stopped");
  
   };
   
  };

*/



  return (
    <>
    </>
  );
}

export default RecordVoice;
 