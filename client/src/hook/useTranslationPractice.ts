import { useState, useCallback, useEffect } from 'react';
import { ieltsTopics, ieltsBands, contentTypes } from '../utils/ieltsData';
import { useCompletion } from 'ai/react';
import { Content, ContentType } from '../type/contentType';
import { Issue, ResponseData } from '../type/resultType';
import { useTextToSpeed } from './useTextToSpeed';
import { useSpeechToText } from './useSpeechToText';

const defaultContent: Content = {
  topic: ["Environment"],
  english: "Climate change is one of the most pressing issues of our time.",
  vietnamese: "Biến đổi khí hậu là một trong những vấn đề cấp bách nhất của thời đại chúng ta.",
  band: 6,
  type: "s",
}

export const useTranslationPractice = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>(ieltsTopics[0]);
  const [selectedBand, setSelectedBand] = useState(ieltsBands[0]);
  const [selectedType, setSelectedType] = useState<ContentType>(contentTypes[0]);

  const [currentContent, setCurrentContent] = useState<Content>(defaultContent);

  const { speak }: { speak: (text: string, lang?: string) => void } = useTextToSpeed();

  const {
    setLanguage,
    transcript,
    listening: isSpeakingFinished,
    resetTranscript,
    startListening,
    stopListening: stopSpeaking } = useSpeechToText();

  const [currentPage, setCurrentPage] = useState(1);
  const [isEnglishToVietnamese, setIsEnglishToVietnamese] = useState(true);

  const [isCheckAnswer, setIsCheckAnswer] = useState(false);

  const [showAnswer, setShowAnswer] = useState(false);
  const [band, setBand] = useState<Number>(5);
  const [feedback, setFeedback] = useState('');
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isNextLoading, setIsNextLoading] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isContentNotFound, setIsContentNotFound] = useState(false);


  const {
    completion,
    input: userAnswer,
    setInput: setUserAnswer,
    handleInputChange: handleUserAnswerChange,
    handleSubmit,
    isLoading: isCheckAnswerLoading,
  } = useCompletion({
    api: "/api/checkAnswer",
    body: {
      context: isEnglishToVietnamese ? currentContent?.english : currentContent?.vietnamese,
    },
  });
  const resetState = () => {
    setUserAnswer('');
    resetTranscript();
    setCurrentPage(1);
    setIsCheckAnswer(false);
    setShowAnswer(false);
    setFeedback('');
    setIssues([]);
    setIsCorrect(false);
  };

  const handleTopicChange = useCallback((topic: string) => {
    setSelectedTopic(topic);
    resetState();
  }, [resetState]);

  const handleBandChange = useCallback((band: number) => {
    setSelectedBand(band);
    resetState();
  }, [resetState]);
  const handleTypeChange = useCallback((value: string) => {
    const type = contentTypes.find((t) => t.description === value) as ContentType;
    setSelectedType(type);
    resetState();
  }, [resetState]);
  const fetchContent = async (topic: string, bandScore: string, type: string, page: string) => {
    const url = new URL("/api/getContent", window.location.origin);
    const params = new URLSearchParams();

    if (topic) params.set("topic", topic);
    if (bandScore) params.set("bandScore", bandScore);
    if (type) params.set("type", type);
    if (page) params.set("page", page);
    params.set("pageSize", "1");

    url.search = params.toString();
    try {
      const res = await fetch(url);
      
      if (!res.ok){
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      return data[0];

    } catch (err) {
    }
  };
  useEffect(() => {
    console.log("goi ne");
    const fetchNewContent = async () => {

      const content = await fetchContent(
        selectedTopic,
        selectedBand.toString(),
        selectedType.type,
        currentPage.toString(),
      );

      if (!content) {
        setIsContentNotFound(true);
        setCurrentContent({
          topic: ["Environment"],
          english: "",
          vietnamese: "",
          band: 6,
          type: "s",
        });
      } else {
        setIsContentNotFound(false);
        setCurrentContent(content);
      }
    };
  
    fetchNewContent();
  }, [selectedTopic, selectedBand, selectedType, currentPage]);

  const handleNextSentence = useCallback(async () => {
    setIsNextLoading(true);
    setCurrentPage(prev => prev + 1);
    setIsNextLoading(false);
  }, [currentPage, selectedTopic]);

  const toggleTranslationDirection = useCallback(() => {
    setIsEnglishToVietnamese(!isEnglishToVietnamese);
    setUserAnswer('');
    setShowAnswer(false);
    setFeedback('');
    setIsCorrect(false);
  }, [isEnglishToVietnamese]);

  const handleCheckAnswer = useCallback(() => {

    setIsCheckAnswer(true);
    handleSubmit();
  }, [currentContent, isEnglishToVietnamese, userAnswer]);

  useEffect(() => {
    if (!isCheckAnswerLoading && isCheckAnswer) {
      const cleanData = completion.replace(/```json\s*|\s*```/g, '');
      const parsedData: ResponseData = JSON.parse(cleanData);
      console.log(parsedData);
      if (parsedData.is_correct) {
        setIsCorrect(true);
        setBand(parsedData.score);
        setFeedback(parsedData.feedback)
      } else {
        setIsCorrect(false);
        setIssues(parsedData.issues);
      };
      setShowAnswer(true);
    }
  }, [isCheckAnswerLoading, isCheckAnswer, completion])

  const playContentToSpeech = () => {
    const lang = isEnglishToVietnamese ? 'vi-VN' : 'en-US';
    const content = isEnglishToVietnamese ? currentContent.english : currentContent.vietnamese;
    speak(content, lang);
  }
  const convertSpeedToText = () => {
    const lang = !isEnglishToVietnamese ? 'vi-VN' : 'en-US';
    setLanguage(lang);
    startListening();
    setUserAnswer(transcript);
  }
  return {
    selectedTopic,
    selectedBand,
    selectedType,
    currentContent,
    isEnglishToVietnamese,
    userAnswer,
    showAnswer,
    band,
    feedback,
    issues,
    isNextLoading,
    isCorrect,
    handleTopicChange,
    handleBandChange,
    handleTypeChange,
    handleNextSentence,
    isContentNotFound,
    toggleTranslationDirection,
    handleUserAnswerChange,
    handleCheckAnswer,
    isCheckAnswerLoading,
    playContentToSpeech,
    convertSpeedToText,
    isSpeakingFinished,
    stopSpeaking
  };
};