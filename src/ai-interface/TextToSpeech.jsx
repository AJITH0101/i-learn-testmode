import React,{useState} from 'react' 
//cdcc68093a3b4fb69ae25aaf1c334fba voice to text assebly ai api

const TextToSpeech = () => {
    const [text, setText] = useState("");


    const handleSpeak = () => {
        if (!text) return;
    
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
      };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Text to Speech</h2>
      <textarea
        className="w-full p-2 text-white border border-gray-300 rounded"
        rows="4"
        placeholder="Type something to speak..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        onClick={handleSpeak}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Speak
      </button>
    </div>
  )
}

export default TextToSpeech