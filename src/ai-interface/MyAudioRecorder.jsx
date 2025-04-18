import React, { useRef, useState } from 'react';

const MyAudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const mediaStream = useRef(null);
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);

  // Start recording
  const startRecording = async () => {

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStream.current = stream;
      // Initialize the MediaRecorder
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };
      mediaRecorder.current.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl); // Set the audio URL to play the recorded file
      };
      mediaRecorder.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  // Stop recording
  const stopRecording = () => {
    mediaRecorder.current.stop();
    mediaStream.current.getTracks().forEach((track) => track.stop());
    setIsRecording(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl mb-4 text-white">Voice Recorder</h2>

      <div className="mb-4">
        {!isRecording ? (
          <button
            onClick={startRecording}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Stop Recording
          </button>
        )}
      </div>

      {audioUrl && (
        <div className="text-center">
          <audio controls src={audioUrl}></audio>
          <br />
          <a
            href={audioUrl}
            download="recording.wav"
            className="bg-green-500 text-white px-4 py-2 rounded mt-2 inline-block"
          >
            Download WAV
          </a>
        </div>
      )}
    </div>
  );
};

export default MyAudioRecorder;


