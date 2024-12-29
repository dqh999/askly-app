// import { useCallback } from 'react';

// export const useTextToSpeed = () => {
//     const speak = useCallback((text: string, lang: string) => {
//         const utterance = new SpeechSynthesisUtterance(text);
//         utterance.lang = lang;
//         window.speechSynthesis.speak(utterance);
//     }, []);

//     return { speak }
// }

import { useState, useEffect, useCallback } from 'react';

export const useTextToSpeed = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [speechSynth, setSpeechSynth] = useState<SpeechSynthesis | null>(null);
  const _cache: { [key: string]: SpeechSynthesisVoice[] } = {};

  // Load voices when available
  const loadVoicesWhenAvailable = useCallback((onComplete: () => void) => {
    const _speechSynth = window.speechSynthesis;
    const voices = _speechSynth.getVoices();

    if (voices.length !== 0) {
      setSpeechSynth(_speechSynth);
      setVoices(voices);
      onComplete();
    } else {
      setTimeout(() => loadVoicesWhenAvailable(onComplete), 100);
    }
  }, []);

  // Get voices for a specific locale
  const getVoices = useCallback((locale: string) => {
    if (!speechSynth) {
      throw new Error('Browser does not support speech synthesis');
    }
    if (_cache[locale]) return _cache[locale];

    _cache[locale] = voices.filter(voice => voice.lang === locale);
    return _cache[locale];
  }, [speechSynth, voices]);

  // Speak the given text with specified locale
  const speak = useCallback((locale: string, text: string, onEnd: () => void) => {
    const voices = getVoices(locale);

    // Create an utterance object to speak
    const utterance = new SpeechSynthesisUtterance();
    utterance.voice = voices[0]; // Use the first voice for now
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;
    utterance.text = text;
    utterance.lang = locale;

    if (onEnd) {
      utterance.onend = onEnd;
    }

    speechSynth?.cancel(); // Cancel any ongoing speech
    speechSynth?.speak(utterance);
  }, [getVoices, speechSynth]);

  // Effect to load voices when available
  useEffect(() => {
    loadVoicesWhenAvailable(() => {
      console.log('Voices loaded');
    });
  }, [loadVoicesWhenAvailable]);

  return { speak };
};
