import { useState, useCallback } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const useSpeechToText = () => {
  const {
    transcript,          
    listening,           
    resetTranscript,     
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const [language,setLanguage] = useState("en-US");

  const startListening = useCallback(() => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({ continuous: true, language: language });

    } else {
      console.error('Browser does not support speech recognition.');
    }
  }, [browserSupportsSpeechRecognition, language]); 

  const stopListening = useCallback(() => {
    SpeechRecognition.stopListening();
  }, []);

  return { 
    setLanguage,
    transcript,          
    listening,           
    resetTranscript,     
    startListening, 
    stopListening, 
  };
};
