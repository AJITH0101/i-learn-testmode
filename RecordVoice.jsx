import React, { useEffect, useState } from "react";

const RecordVoice = ({enableSpeech,stopSpeaking,audioFetched})=> {
   const[voiceState,setVoiceState]= useState(false)

    useEffect(()=>{
        if(enableSpeech){
            handleSpeech()
        }
    },[enableSpeech])


  const handleSpeech = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.log("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
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
      };
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 className="text-white">Click to Speak</h2>
      <button className="text-white border border-stone-500" onClick={handleSpeech}>Start Listening</button>
    </div>
  );
}

export default RecordVoice;
 