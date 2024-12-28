'use client'

import { useTranslationPractice } from '../hook/useTranslationPractice';
import { ieltsBands, ieltsTopics, translationTypes } from '../utils/ieltsData';

type Topic = typeof ieltsTopics[number];
type Band = typeof ieltsBands[number];
type Type = typeof translationTypes[number];

export default function TranslationPractice() {
  const {
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
    checkAnswer
  } = useTranslationPractice();



  return (
    <div className="min-h-screen bg-red-50 py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-red-900 mb-8">
          IELTS Translation Practice
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
            <div className="mb-6">
              <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                Select a topic:
              </label>
              <select
                id="topic"
                value={selectedTopic}
                onChange={(e) => handleTopicChange(e.target.value as Topic)}
                className="w-full p-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              >
                {ieltsTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="band" className="block text-sm font-medium text-gray-700 mb-2">
                Select IELTS band:
              </label>
              <select
                id="band"
                value={selectedBand}
                onChange={(e) => handleBandChange(Number(e.target.value))}
                className="w-full p-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              >
                {ieltsBands.map((band) => (
                  <option key={band} value={band}>
                    Band {band}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                Select translation type:
              </label>
              <select
                id="type"
                value={selectedType}
                onChange={(e) => handleTypeChange(e.target.value)}
                className="w-full p-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              >
                {translationTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Translate the following sentence:
            </h2>
            <p className="text-gray-700 mb-4">
              {isEnglishToVietnamese ? currentSentence.english : currentSentence.vietnamese}
            </p>
            <textarea
              value={userTranslation}
              onChange={(e) => setUserTranslation(e.target.value)}
              className="w-full p-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              rows={4}
              placeholder="Enter your translation here"
            />
          </div>
          <div className="flex sm:flex-row flex-col justify-between mb-6">
            <button
              onClick={checkAnswer}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Check Answer
            </button>
            <button
              onClick={toggleTranslationDirection}
              className="bg-red-100 text-red-700 px-4 py-2 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Switch to {isEnglishToVietnamese ? 'Vietnamese → English' : 'English → Vietnamese'}
            </button>
          </div>
          {showAnswer && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Result:</h3>
              {isCorrect ? (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
                  <p className="font-bold">Correct! (IELTS Band 5)</p>
                  <p className="text-gray-700 whitespace-pre-line">{feedback}</p>
                </div>
              ) : (
                <>
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
                    <p className="font-bold">Incorrect</p>
                    <ul className="list-disc list-inside">
                      {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Correct Translation:</h3>
                  <p className="text-gray-700">
                    {isEnglishToVietnamese ? currentSentence.vietnamese : currentSentence.english}
                  </p>
                </>
              )}
            </div>
          )}

          <button
            onClick={handleNextSentence}
            disabled={isLoading}
            className={`w-full ${isLoading ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'} text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </span>
            ) : (
              'Next Sentence'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
