import React, { useEffect, useState } from 'react';
import { saveLastSeen, fetchLastSeen } from './firebaseStorage.js';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  Sidebar,
  ConversationList,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,


  TypingIndicator,
  Avatar,
  Status,
  Conversation,
  ConversationHeader,
 
} from '@chatscope/chat-ui-kit-react';
import Gemini from './ai-interface/Gemini'
import TextToSpeech from './ai-interface/TextToSpeech.jsx';
import SpeechToText from './SpeechToText.jsx';
import MyAudioRecorder from './ai-interface/MyAudioRecorder.jsx';
import RecordVoice from '../RecordVoice.jsx';
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { BsSendCheck } from "react-icons/bs";
import { BsSendX } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";
import { IoClose, IoFlag } from "react-icons/io5";
const voiceIcon = <MdOutlineKeyboardVoice size={28} />
const msgEnable = <BsSendCheck size={20} />
const msgDisable = <BsSendX size={20}/>
const clearChat = <MdOutlineClear  size={20}/>
const closeIcon = <IoClose size={20}/>

const Voicechat = () => {

  const[messages,setMessages] = useState([])
  const[getMessage,setGetMessage] = useState("")
  const[statusIndicator,setStatusIndicator]= useState(false)
  const[timeStamp, setTimeStamp] = useState("")
  const[lastActive,setLastActive] = useState()
  const[testAudio,setTestAudio] = useState(true)
  const[processAudio,setProcessAudio]= useState("")
  const[voiceButton,setVoiceButton] = useState(false)
  const [fullText,setFulText]=useState("")
  const[autoMode,setAutoMode]= useState(false)


 

  useEffect(()=>{
   
    manageDate()
    fetchLastSeen()
    
  },[])

 const voiceEndRecognized=(flag)=>{
   // console.log("voice end recognized", flag);
   if(flag && autoMode){
    clickToSpeak()
   }
    
  }


  const userVoiceEnded=(tranScript,flag)=>{
    if(flag){
     // setProcessAudio(tranScript)
      autoSend(tranScript) 
       console.log("Auto send check",tranScript);       
    }
  }

  const autoSend=(transcript)=>{
    if(transcript.trim()==="")
      return
    const audio = new Audio('/sendSound.wav')
    audio.play().catch((err) => {
      console.log("Playback failed:", err);
    });

    const date = new Date();
    const getTime = date.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
});

setFulText(transcript)
setMessages(prev =>[
  ...prev,
  {
    message: transcript,
    sender: "user",
    sentTime: getTime,
    direction: "outgoing",
    position: "single",   
  
  }

])
setProcessAudio("") 

  }



    const handleSend=()=>{
      if(processAudio.trim()==="")
        return
  const audio = new Audio('/sendSound.wav')
  audio.play().catch((err) => {
    console.log("Playback failed:", err);
  });



        const date = new Date();
        const getTime = date.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

      setFulText(processAudio)
      setMessages(prev =>[
        ...prev,
        {
          message: processAudio,
          sender: "user",
          sentTime: getTime,
          direction: "outgoing",
          position: "single",   
        
        }

      ])
      setProcessAudio("") 
       // console.log("Time",getHours,getMins);   
            
    }


    const senderTyping=(e)=>{
      console.log(e);
      setGetMessage(e)
      setStatusIndicator(true)
    }


    const manageDate = ()=>{
      const date = new Date();
      const getTime = date.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

   
  
setTimeStamp(getTime)
   // saveLastSeen(getHours,getMins)      
   // setTimeStamp(getTime)
   
    
return getTime
     

    }



    const handleSendData=(receiveData)=>{
    
      const date = new Date();
      const getTime = date.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
     
      if(receiveData.trim()==="")
        return
        
      setStatusIndicator(false)

      setMessages(prev =>[
        ...prev,
        {
          message: receiveData,
          sender: "model",
          sentTime: getTime,
          direction: "incoming",
          position: "single",   
         }   
      ]) 

      //setGetMessage("")
      setTimeStamp(getTime)   

    }


    const lastSeenTime = ()=>{

    }


    const recievedAudio=(audioData)=>{
      console.log(audioData.type);
      setProcessAudio(audioData.type)

    }

   

    const turnOffSpeak=()=>{
      const audio = new Audio('/mic.wav')
      audio.play().catch((err) => {
        console.log("Playback failed:", err);
      });
     /// console.log("voice button clicked");

      setVoiceButton(false)
    }




    const handlefetchAudio=(e)=>{
     // setProcessAudio(e)
     //const getAudio = processAudio +" "+ e
     const getAudio =  e
     setProcessAudio(getAudio)
     //console.log("recorded:1, process audio",getAudio);
     }
     

    const clickToClear=()=>{
      setProcessAudio("")
    }

    const clearAllChat=()=>{
      setMessages([])
    }

    const responseToText=(e)=>{
      setGetMessage(e)
      handleSendData(e)
     console.log("response in voice",e);
    
      

        }


        const clickToSpeak=()=>{
          setVoiceButton(true)
          const audio = new Audio('/mic.wav')
          audio.play().catch((err) => {
            console.log("Playback failed:", err);
          });
          console.log("voice button clicked");
          
        }

const enableAuto = ()=>{
  setAutoMode((prev)=>!prev)
 
}

const fetchingVoiceFlag =()=>{

}


    

    
  return (
    <div className='w-full h-[100vh]'>
      <div className='lg:w-full lg:h-4/5 md:w-full md:h-4/5 w-full h-4/5 flex justify-center items-center flex-col'>
  
      <RecordVoice enableSpeech={voiceButton} stopSpeaking={turnOffSpeak} audioFetched={handlefetchAudio} autoVoiceEnd={userVoiceEnded}/>
      {/* <TextToSpeech inputText={getMessage} proceed={statusIndicator}/> */}

     <Gemini request={fullText} voiceEndFlag={voiceEndRecognized} aiResponse={responseToText} voiceFlagSet={fetchingVoiceFlag}/>
        <div className="relative lg:w-full lg:h-full md:w-full md:h-full w-full h-full">
        <MainContainer>        
          <ChatContainer  className="my-chat-container">           
              <ConversationHeader>
                {/* <Avatar src='/ai-girl.png'/> */}
                {/* <img src="/ai-girl.png" alt="test" width="50" height="50" /> */}
                <ConversationHeader.Content userName='Arya-AI' info={`${statusIndicator ? "online" : `last active: ${timeStamp}`} `}>

                </ConversationHeader.Content>
               
              </ConversationHeader>

            <MessageList>
              {/* <div className='w-44 h-10 fixed'>
                {statusIndicator && <TypingIndicator content='processing..'/>}   
              </div> */}
            
              {/* {messages.map((msg,id)=>{<div key={id}>{msg}</div>})}  */}
              {messages.map((msg,index)=>( 
                <Message key={index} model={{
                  message:  msg.message,
                  sender: msg.sender,
                  sentTime: msg.sentTime,
                  direction: msg.direction,
                  position: msg.position,
                  
                }}>  <Message.Footer>{msg.sentTime}</Message.Footer>         
                
              
              
              </Message>
              ))}
              

            </MessageList>



<MessageInput placeholder='Type here...' sendButton={false}
           attachButton={false} value={processAudio} onChange={handlefetchAudio}
           onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
         >
            </MessageInput>


           
          </ChatContainer>
        </MainContainer>
     
     
        </div>
        </div>
            <div className={`lg:w-full lg:h-1/5 md:w-full md:h-1/5 w-full h-1/5 bg-white flex justify-end  p-4`} >
            <button
                className={`w-28 h-8 rounded-lg border text-xs cursor-pointer hover:text-stone-800 mr-2 font-poppins hover:border-stone-800 
                  ${autoMode ? "border-black text-black" : "border-stone-500 text-stone-500"}`}
                onClick={enableAuto}
              >
              {autoMode ? "Auto Enabled":"Auto Disabled"}
              </button>

            <button className='w-20 h-8 rounded-lg border border-stone-500 text-stone-500 text-xs  cursor-pointer hover:text-stone-800 mr-2 font-poppins hover:border-stone-800' onClick={clickToClear}>Clear input</button>
            {/* <div className={`text-red-300 px-1 pr-1 cursor-pointer hover:text-red-500`} onClick={clickToClear}>{clearChat}</div> */}
            <div className={`${voiceButton ? "text-red-500":"text-red-300"} px-1 pr-1 cursor-pointer hover:text-red-500`} onClick={clickToSpeak}>{voiceIcon}</div>
            <div className={`text-blue-300 px-1 cursor-pointer hover:text-blue-500`} onClick={handleSend} >{msgEnable}</div> 
            </div>
            {/* <div className='w-full h-auto'>
              <input type='text' className='w-38 h-12 border border-stone-500 text-white' value={getMessage} onChange={(e)=>senderTyping(e.target.value)}/> 
              <button className='w-24 h-10 border border-stone-500 text-white' onClick={handleSendData}>send</button> 
          
          </div>*/}

        
        
    </div>
  )
}

export default Voicechat