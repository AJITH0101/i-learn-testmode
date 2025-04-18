import React, { useEffect } from 'react'
import { AssemblyAI } from 'assemblyai';



const SpeechToText = () => {

  useEffect(()=>{
    run()
  },[])
 const client = new AssemblyAI({
   apiKey: "cdcc68093a3b4fb69ae25aaf1c334fba",
  });
  const FILE_URL =
  'https://assembly.ai/sports_injuries.mp3';
  const data = {
    audio: FILE_URL
  }

  
  const run = async () => {
    const transcript = await client.transcripts.transcribe(data);
    console.log(transcript.text);
  };

  return (
    <div className='text-white text-xl'>SpeechToText</div>
  )
}

export default SpeechToText