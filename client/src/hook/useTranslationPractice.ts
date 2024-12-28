import { useState, useCallback, useEffect } from 'react';
import { ieltsTopics, ieltsSentences, ieltsBands, translationTypes } from '../utils/ieltsData';

export const useTranslationPractice = () => {
  const [selectedTopic, setSelectedTopic] = useState<keyof typeof ieltsSentences>(ieltsTopics[0]);
  const [selectedBand, setSelectedBand] = useState(ieltsBands[0]);
  const [selectedType, setSelectedType] = useState(translationTypes[0]);

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isEnglishToVietnamese, setIsEnglishToVietnamese] = useState(true);
  const [userTranslation, setUserTranslation] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentSentence = ieltsSentences[selectedTopic][currentSentenceIndex];

  const handleTopicChange = useCallback((topic: keyof typeof ieltsSentences) => {
    setSelectedTopic(topic);
    setCurrentSentenceIndex(0);
    setUserTranslation('');
    setShowAnswer(false);
    setFeedback('');
    setIsCorrect(false);
  }, []);

  const handleBandChange = useCallback((band: number) => {
    setSelectedBand(band);
    setCurrentSentenceIndex(0);
    resetState();
  }, []);
  const handleTypeChange = useCallback((type: string) => {
    setSelectedType(type);
    setCurrentSentenceIndex(0);
    resetState();
  }, []);
  const resetState = () => {
    setUserTranslation('');
    setShowAnswer(false);
    setFeedback('');
    setErrors([]);
    setIsCorrect(false);
  };
  const handleNextSentence = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const nextIndex = (currentSentenceIndex + 1) % ieltsSentences[selectedTopic].length;
      setCurrentSentenceIndex(nextIndex);
      setUserTranslation('');
      setShowAnswer(false);
      setFeedback('');
      setIsCorrect(false);
      setIsLoading(false);
    }, 1000);
  }, [currentSentenceIndex, selectedTopic]);

  const toggleTranslationDirection = useCallback(() => {
    setIsEnglishToVietnamese(!isEnglishToVietnamese);
    setUserTranslation('');
    setShowAnswer(false);
    setFeedback('');
    setIsCorrect(false);
  }, [isEnglishToVietnamese]);

  const checkAnswer = useCallback(() => {
    setShowAnswer(true);
    const correctAnswer = isEnglishToVietnamese ? currentSentence.vietnamese : currentSentence.english;

    if (userTranslation.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
      setFeedback("Correct! Here's a suggestion to make it even better: Consider using more advanced vocabulary or structures.");
      setIsCorrect(true);
    } else {
      const errors = [];
      if (userTranslation.length < correctAnswer.length * 0.5) {
        errors.push("Your translation is too short. Try to include more details from the original sentence.");
      }
      if (userTranslation.length > correctAnswer.length * 1.5) {
        errors.push("Your translation is too long. Try to be more concise while maintaining the original meaning.");
      }
      if (!userTranslation.includes(isEnglishToVietnamese ? "là" : "is") && correctAnswer.includes(isEnglishToVietnamese ? "là" : "is")) {
        errors.push("You missed translating a key verb. Make sure to include all important parts of speech.");
      }
      if (errors.length === 0) {
        errors.push("Your translation has some inaccuracies. Pay attention to word choice and sentence structure.");
      }
      setErrors(errors);
      setFeedback(`Here are some areas for improvement:\n${errors.join('\n')}`);
      setIsCorrect(false);
    }
  }, [currentSentence, isEnglishToVietnamese, userTranslation]);

  return {
    selectedTopic,
    selectedBand,
    selectedType,
    currentSentence,
    isEnglishToVietnamese,
    userTranslation,
    showAnswer,
    feedback,
    errors,
    isLoading,
    isCorrect,
    handleTopicChange,
    handleBandChange,
    handleTypeChange,
    handleNextSentence,
    toggleTranslationDirection,
    setUserTranslation,
    checkAnswer,
  };
};

