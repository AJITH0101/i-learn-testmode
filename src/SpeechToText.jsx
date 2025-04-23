import React, { useEffect } from 'react'
import { AssemblyAI } from 'assemblyai';



const SpeechToText = ({getAudio}) => {

 useEffect(() => {
run()
}, []);


 const client = new AssemblyAI({
   apiKey: "cdcc68093a3b4fb69ae25aaf1c334fba",
  });


const FILE_URL ='https://assembly.ai/sports_injuries.mp3';

  const data = {
    audio: FILE_URL
 }

 
//   const run = async () => {
//     const uploadResponse = await client.files.upload(data);
//     const audioUrl = uploadResponse.upload_url;
//     const transcript = await client.transcripts.transcribe(audioUrl);
// console.log(transcript.text);
    //const transcript = await client.transcripts.transcribe(audioData);
    //console.log(transcript.text);
  //};

  const run = async () => {
    try {
      // Assuming `data` is a File or Blob
      const uploadResponse = await client.files.upload(data);
      const audioUrl = uploadResponse.upload_url;
  
      // IMPORTANT: You must pass { audio_url: audioUrl }
      const transcript = await client.transcripts.transcribe({
        audio_url: audioUrl,
      });
  
      console.log(transcript.text);
    } catch (error) {
      console.error("Transcription failed:", error);
    }
  };
  
 

  return (
    <div className='text-white text-xl'>SpeechToText</div>
  )
}

export default SpeechToText