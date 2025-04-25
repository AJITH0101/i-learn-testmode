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
import { IoClose } from "react-icons/io5";
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

 

  useEffect(()=>{
   
    manageDate()
    fetchLastSeen()
    
  },[])

useEffect(()=>{

},[])

    const handleSend=(e)=>{


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

    const clickToSpeak=()=>{
      setVoiceButton(true)
      const audio = new Audio('/mic.wav')
      audio.play().catch((err) => {
        console.log("Playback failed:", err);
      });
      console.log("voice button clicked");
      
    }

    const turnOffSpeak=()=>{
      const audio = new Audio('/mic.wav')
      audio.play().catch((err) => {
        console.log("Playback failed:", err);
      });
      console.log("voice button clicked");

      setVoiceButton(false)
    }

    const handlefetchAudio=(e)=>{
      setProcessAudio(e)


    
   
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
      //console.log("response in voice",e);
      
    }

    
  return (
    <div className='w-full h-[100vh] flex justify-center items-center flex-col'>
  
      <RecordVoice enableSpeech={voiceButton} stopSpeaking={turnOffSpeak} audioFetched={handlefetchAudio}/>
      {/* <TextToSpeech inputText={getMessage} proceed={statusIndicator}/> */}

     <Gemini request={fullText} messageArray={messages} aiResponse={responseToText}/>
        <div className="relative lg:w-1/4 lg:h-3/4 md:w-1/4 md:h-3/4 w-9/10 h-8/10">
        <MainContainer>        
          <ChatContainer>           
              <ConversationHeader>
                <Avatar src='/ai-girl.png'/>
                <ConversationHeader.Content userName='Sani' info={`${statusIndicator ? "online" : `last active: ${timeStamp}`} `}>

                </ConversationHeader.Content>
               
              </ConversationHeader>

            <MessageList>
              <div className='w-44 h-10 fixed'>
                {statusIndicator && <TypingIndicator content='processing..'/>}   
              </div>
            
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
        <div className={`lg:w-1/4 lg:h-auto md:w-1/4 md:h-auto w-9/10 h-auto bg-white flex justify-end  items-center p-2`} >
        <button className='w-20 h-8 rounded-lg border border-stone-500 text-stone-500 text-xs  cursor-pointer hover:text-stone-800 mr-2 font-poppins hover:border-stone-800' onClick={clearAllChat}>Clear chat</button>
        <div className={`text-red-300 px-1 pr-1 cursor-pointer hover:text-red-500`} onClick={clickToClear}>{clearChat}</div>
        <div className={`${voiceButton ? "text-red-500":"text-red-300"} px-1 pr-1 cursor-pointer hover:text-red-500`} onClick={clickToSpeak}>{voiceIcon}</div>
        <div className={`text-blue-300 px-1 cursor-pointer hover:text-blue-500`} onClick={handleSend} >{msgEnable}</div> 
        </div>
        <div className='w-full h-auto'>
          {/* <input type='text' className='w-38 h-12 border border-stone-500 text-white' value={getMessage} onChange={(e)=>senderTyping(e.target.value)}/> 
          <button className='w-24 h-10 border border-stone-500 text-white' onClick={handleSendData}>send</button> */}
          
        </div>
        
    </div>
  )
}

export default Voicechat