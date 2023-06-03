export const handleSpeak = (text) => {
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