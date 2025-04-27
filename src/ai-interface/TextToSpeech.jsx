import React,{useEffect, useState} from 'react' 
import { BsSoundwave } from "react-icons/bs";
import aiGirl from '../assets/ai-girl.png'
//cdcc68093a3b4fb69ae25aaf1c334fba voice to text assebly ai api

const voice = <BsSoundwave color='white' size={30} />

const TextToSpeech = ({inputText,proceed,sendVoiceEnd}) => {
    const [text, setText] = useState("");
    const [voiceInput, setVoiceInput] = useState(false)

useEffect(()=>{
//console.log("text to voice",inputText);
  
//setText(inputText)
//if(!proceed){
//console.log("trigger speak");

  handleSpeak(inputText)
//}


},[inputText,proceed])



useEffect(()=>{
  console.log("inputText in TextToSpeech:", inputText);
    console.log("proceed in TextToSpeech:", proceed);
  
  if(!proceed){
     handleSpeak()
  }
 
},[proceed])




    const handleSpeak = (inputTalk) => {
      //console.log("conversation start");

      if (inputText==="") return;
     // console.log("conversation return test", inputTalk);
    
      const utterance = new SpeechSynthesisUtterance(inputTalk);
    
      // Set the event handler BEFORE speaking
      utterance.onend = () => {
       // console.log("conversation return test 3");
        setVoiceInput(false);
        sendVoiceEnd("voice end")
        //console.log("conversation over");
      };
    
      window.speechSynthesis.cancel(); // cancel any previous speech
      window.speechSynthesis.speak(utterance);
      //console.log("conversation return test 2");

    
      };

    
      

  return (
    <div className="w-full h-auto  flex items-center justify-center">
      <h2 className="text-xl font-bold mb-2">Text to Speech</h2>
      {/* <img src={aiGirl} alt='girl image' className='w-20 h-20' /> */}
      <div className={`transition-transform duration-400 ease-in-out transform origin-center ${ voiceInput ? 'scale-100' : 'scale-80'  }`}>
 {voice}
</div>
{/* 
        <input type='text'
        className="w-full p-2 text-white border border-gray-300 rounded"
        rows="4"
        placeholder="Type something to speak..."
        value={text}
        onChange={(e) => setText(e.target.value)} />
      
      <button
        onClick={handleSpeak}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Speak
      </button>  */}
    </div>
  )
}

export default TextToSpeech