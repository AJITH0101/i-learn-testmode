import React, { useEffect, useState } from "react";

const RecordVoice = ({enableSpeech,stopSpeaking,audioFetched})=> {
   const[voiceState,setVoiceState]= useState(false)
   const[repeatCounter,setRepeatCounter]= useState(0)

    useEffect(()=>{
        if(enableSpeech){
            handleSpeech()
        }
    },[enableSpeech])

useEffect(()=>{

})

const handleSpeech = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.log("Speech Recognition not supported");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  //recognition.continuous = true;
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
    // <div style={{ textAlign: "center", marginTop: "50px" }}>
    //   <h2 className="text-white">Click to Speak</h2>
    //   <button className="text-white border border-stone-500" onClick={handleSpeech}>Start Listening</button>
    // </div>
  );
}

export default RecordVoice;
 