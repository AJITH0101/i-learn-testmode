import React, { useState } from 'react';
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

const Voicechat = () => {

    const handleSend=(e)=>{
        console.log(e);
        
    }
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
        {/* <div className="lg:w-1/4 lg:h-3/4 border border-stone-500 rounded-lg"> */}
        {/* <Gemini request="what is the date today"/> */}
        {/* </div> */}
        <div className="lg:w-1/4 lg:h-3/4 md:w-1/4 md:h-3/4 w-9/10 h-8/10">
        <MainContainer>
          {/* <Sidebar position='left'>
            <ConversationList>
              <Conversation name='Sani' lastSenderName='Sani' info='hello' active={true}>
                <Avatar src='/ai-girl.png'/>

              </Conversation>
            </ConversationList>
          </Sidebar> */}
          <ChatContainer>
           
              <ConversationHeader>
                <Avatar src='/ai-girl.png'/>
                <ConversationHeader.Content userName='Sani' info='last active:10 mins ago'>

                </ConversationHeader.Content>
              </ConversationHeader>

            <MessageList>

                <Message model={{
                message:"hey Ajith",
                sender:'David',
                sentTime:'10 mins ago',
                direction:'incoming',
                postion:'single',

              }}>
               
              </Message>
            
           



            </MessageList>



            <MessageInput placeholder='Type your message here' onSend={handleSend}>

            </MessageInput>

          </ChatContainer>
        </MainContainer>
        </div>
    </div>
  )
}

export default Voicechat