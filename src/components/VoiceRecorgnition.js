import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import AudioVisuals from "./AudioVisuals";
import Speech from "react-speech";
import { handleSpeak } from "../utils/utils";
function VoiceRecorgnition() {
  const [message, setMessage] = useState('');
  const [speak, setSpeak] = useState(false)
  const [text, setText] = useState('');

  
  const commands = [
    {
      command: 'reset',
      callback: () => resetTranscript()
    },
    {
      command: 'shut up',
      callback: () => setMessage('I wasn\'t talking.')
    },
    {
      command: 'Hello',
      callback: () => setMessage('Hi there!')
    },
    {
      command: 'Balance',
      callback: () => setMessage("Your Account balance is Red. Get out")
    },
    {
      command: 'Transfer',
      callback: () => setMessage("How you wan transfer when yur account is Red")
    }
  ]
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands }); 
  useEffect(() => {
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
 
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-GB',
    });
  };
  // const handleSpeak = () => {
  //   setSpeak(true);
  //   // Speech.speak({
  //   //   text: transcript,
  //   // });
  // };


  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const speechSynthesis = window.speechSynthesis;
      const speechUtterance = new SpeechSynthesisUtterance(text);
  
      const handleVoicesChanged = () => {
        // Get the list of available voices
        const voices = speechSynthesis.getVoices();
  
        // Find a female voice
        const femaleVoice = voices.find(voice => voice.name.includes('female'));
  
        if (femaleVoice) {
          speechUtterance.voice = femaleVoice;
        } else {
          console.warn('No female voice available. Using the default voice.');
        }
  
        speechSynthesis.speak(speechUtterance);
      };
  
      speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
  
      // Ensure that the 'voiceschanged' event has already fired
      if (speechSynthesis.getVoices().length > 0) {
        handleVoicesChanged();
      }
    } else {
      console.error('Speech synthesis is not supported in this browser.');
    }
  };

  
  return (
    <div>
      <button onClick={resetTranscript}>Reset Transcript</button>

      <button onClick={listenContinuously}>Start Listening</button>
      <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
      <textarea value={text} onChange={handleInputChange} placeholder="Enter text to speak" />
     
      <button onClick={handleSpeak}>Speak</button>
 
      {
        listening && 
        <AudioVisuals />
      }
      <p>Message: {message}</p>
      <p>Transcript: {transcript}</p>
         {speak && <Speech text={transcript} voice="Google UK English Female" />}     
    </div>
  );
}

export default VoiceRecorgnition;
