import { useCallback } from 'react';

export const useTextToSpeed = () => {
    const speak = useCallback((text: string, lang: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        window.speechSynthesis.speak(utterance);
    }, []);

    return { speak }
}