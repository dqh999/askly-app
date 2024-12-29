'use client'
import 'regenerator-runtime/runtime';
import Button from '@component/Button';
import ResultFeedback from '@component/ResultFeedback';
import SelectComponent from '@component/SelectComponent';
import { useTranslationPractice } from '../hook/useTranslationPractice';
import { contentTypes, ieltsBands, ieltsTopics } from '../utils/ieltsData';
import { Header } from '@component/Header';
import { Footer } from '@component/Footer';
import { useEffect, useState } from 'react';

type Topic = typeof ieltsTopics[number];

export default function TranslationPractice() {
  const {
    selectedTopic,
    selectedBand,
    selectedType,
    currentContent,
    isEnglishToVietnamese,
    userAnswer,
    showAnswer,
    band: bandScore,
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
  } = useTranslationPractice();
  const [isSpeaking, setSpeaking] = useState(false);
  const [emptyAnswerError, setEmptyAnswerError] = useState<boolean>(false);

  useEffect(() => {
    if (isSpeaking && !isSpeakingFinished) {
      setSpeaking(false);
    }
  }, [isSpeakingFinished, isSpeaking])

  const handleSpeedToText = () => {
    if (isSpeaking) {
      setSpeaking(false);
      stopSpeaking();
      return;
    }
    setSpeaking(true);
    convertSpeedToText();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="max-w-3xl mx-auto flex-grow container px-4 py-8">
        <div className="bg-white border border-primary-500 shadow-sm rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center text-red-900 mb-8">
            Translation Practice
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
            <SelectComponent
              title='Select a topic:'
              input={selectedTopic}
              handleInputChange={(e) => handleTopicChange(e.target.value as Topic)}
              options={[...ieltsTopics]}
            />
            <SelectComponent
              title='Select IELTS band:'
              input={selectedBand.toString()}
              handleInputChange={(e) => handleBandChange(Number(e.target.value))}
              options={ieltsBands.map((value) => value.toString())}
            />
            <SelectComponent
              title='Select translation type:'
              input={selectedType.description}
              handleInputChange={(e) => handleTypeChange(e.target.value)}
              options={contentTypes.map((type) => type.description)}
            />
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Translate the following sentence:
            </h2>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center items-start mb-4 space-x-1'>
              <p className="text-gray-700">
                {isEnglishToVietnamese ? currentContent?.english : currentContent?.vietnamese}
              </p>
              {isEnglishToVietnamese && (
                <button className="text-gray-500 border p-1 rounded-full"
                  onClick={playContentToSpeech}>
                  <i className='text-gray-600 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /><path d="M16 9a5 5 0 0 1 0 6" /><path d="M19.364 18.364a9 9 0 0 0 0-12.728" /></svg>
                  </i>
                </button>
              )}
            </div>
            <div className='relative'>
              <textarea
                value={userAnswer}
                onChange={handleUserAnswerChange}
                className="w-full p-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                rows={4}
                placeholder="Enter your translation here"
              />
              {!isEnglishToVietnamese && (
                <button
                  onClick={handleSpeedToText}
                  className="absolute bottom-5 right-2">
                  {!isSpeaking ?
                    <i className='text-gray-600'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                    </i> :
                    <i className="text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" x2="12" y1="19" y2="22" />
                      </svg>
                    </i>
                  }
                </button>
              )}
            </div>
          </div>
          {emptyAnswerError && (
            <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
              <div className="flex">
                <p>Please enter your translation before checking the answer.</p>
              </div>
            </div>
          )}
          {isContentNotFound && (
            <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
              <div className="flex">
                <p>No more content available. Please try again later.</p>
              </div>
            </div>
          )}
          <div className="flex sm:flex-row flex-col justify-between mb-6 space-y-5 sm:space-y-0">
            <Button
              onClick={() => {
                if (!userAnswer.trim()) {
                  setEmptyAnswerError(true);
                  return;
                }
                setEmptyAnswerError(false);
                handleCheckAnswer();
              }}
              isLoading={isCheckAnswerLoading}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md  focus:outline-none "
            >
              CheckAnswer
            </Button>
            <Button
              onClick={toggleTranslationDirection}
              className='bg-background hover:bg-background/90 border-[0.5px] border-primary text-primary px-4 py-2 rounded-md focus:outline-none'
            >
              {`Switch to ${isEnglishToVietnamese ? 'Vietnamese → English' : 'English → Vietnamese'}`}
            </Button>
          </div>
          {showAnswer && (
            <ResultFeedback
              isCorrect={isCorrect}
              bandScore={bandScore}
              feedback={feedback}
              issues={issues}
              currentContent={currentContent}
              isEnglishToVietnamese={isEnglishToVietnamese}
            />
          )}
          <Button
            onClick={handleNextSentence}
            isLoading={isNextLoading}
            className={`bg-primary hover:bg-primary/90 w-full text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}
          >
            Next Sentence
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}