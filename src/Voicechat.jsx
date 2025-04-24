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

const Voicechat = () => {

  const[messages,setMessages] = useState([])
  const[getMessage,setGetMessage] = useState("")
  const[statusIndicator,setStatusIndicator]= useState(false)
  const[timeStamp, setTimeStamp] = useState("")
  const[lastActive,setLastActive] = useState()
  const[testAudio,setTestAudio] = useState(true)
  const[processAudio,setProcessAudio]= useState()

 

  useEffect(()=>{
   
    manageDate()
    fetchLastSeen()
    
  },[])



    const handleSend=(e)=>{

      const date = new Date();
      const getTime = date.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

 
      setMessages(prev =>[
        ...prev,
        {
          message: e,
          sender: "ajith",
          sentTime: getTime,
          direction: "outgoing",
          position: "single",   
        
        }

      ])
        console.log("Time",getHours,getMins);        
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



    const handleSendData=()=>{
      const date = new Date();
      const getTime = date.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
     
      if(getMessage.trim()==="")
        return
        
      setStatusIndicator(false)

      setMessages(prev =>[
        ...prev,
        {
          message: getMessage,
          sender: "Sani",
          sentTime: getTime,
          direction: "incoming",
          position: "single",   
         }   
      ]) 

      setGetMessage("")
      setTimeStamp(getTime)

    }


    const lastSeenTime = ()=>{

    }


    const recievedAudio=(audioData)=>{
      console.log(audioData.type);
      setProcessAudio(audioData.type)

    }

    
  return (
    <div className='w-full h-[100vh] flex justify-center items-center flex-col'>
      {/* <MyAudioRecorder audioFile={recievedAudio}/> */}
      <RecordVoice/>
      <TextToSpeech inputText={getMessage} proceed={statusIndicator}/>
      <SpeechToText getAudio={processAudio}/>
     
        <div className="lg:w-1/4 lg:h-3/4 md:w-1/4 md:h-3/4 w-9/10 h-8/10">
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



            <MessageInput placeholder='Type here...' onSend={handleSend}
           attachButton={false}
            >

            </MessageInput>

          </ChatContainer>
        </MainContainer>
        </div>
        <div className='w-full h-auto'>
          <input type='text' className='w-38 h-12 border border-stone-500 text-white' value={getMessage} onChange={(e)=>senderTyping(e.target.value)}/> 
          <button className='w-24 h-10 border border-stone-500 text-white' onClick={handleSendData}>send</button>
          
        </div>
        
    </div>
  )
}

export default Voicechat