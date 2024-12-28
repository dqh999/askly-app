'use client'

import Button from '@component/Button';
import ResultFeedback from '@component/ResultFeedback';
import SelectComponent from '@component/SelectComponent';
import { useTranslationPractice } from '../../hook/useTranslationPractice';
import { contentTypes, ieltsBands, ieltsTopics } from '../../utils/ieltsData';
import { Header } from '@component/Header';
import { Footer } from '@component/Footer';

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
    feedback,
    issues,
    isNextLoading,
    isCorrect,
    handleTopicChange,
    handleBandChange,
    handleTypeChange,
    handleNextSentence,
    toggleTranslationDirection,
    handleUserAnswerChange,
    handleCheckAnswer,
    isCheckAnswerLoading
  } = useTranslationPractice();



  return (
    <div className="min-h-screen flex flex-col bg-red-50">
      <Header/>
      <div className="max-w-3xl mx-auto flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-red-900 mb-8">
          IELTS Translation Practice
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>

            <SelectComponent
              title='Select a topic:'
              input={selectedTopic}
              handleInputChange={(e) => handleTopicChange(e.target.value as Topic)}
              options={[...ieltsTopics]}
            />
            <SelectComponent
              title='Select IELTS band:'
              input={selectedBand}
              handleInputChange={(e) => handleBandChange(Number(e.target.value))}
              options={ieltsBands}
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
            <p className="text-gray-700 mb-4">
              {isEnglishToVietnamese ? currentContent?.english : currentContent?.vietnamese}
            </p>
            <textarea
              value={userAnswer}
              onChange={handleUserAnswerChange}
              className="w-full p-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              rows={4}
              placeholder="Enter your translation here"
            />
          </div>
          <div className="flex sm:flex-row flex-col justify-between mb-6">
            <Button
              onClick={handleCheckAnswer}
              isLoading={isCheckAnswerLoading}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              children="CheckAnswer" />
            <Button
              onClick={toggleTranslationDirection}
              className='bg-red-100 text-red-700 px-4 py-2 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
              children={`Switch to ${isEnglishToVietnamese ? 'Vietnamese → English' : 'English → Vietnamese'}`} />
          </div>
          {showAnswer && (
            <ResultFeedback
              isCorrect={isCorrect}
              feedback={feedback}
              issues={issues}
              currentContent={currentContent}
              isEnglishToVietnamese={isEnglishToVietnamese}
            />
          )}
          <Button
            onClick={handleNextSentence}
            isLoading={isNextLoading}
            className={`w-full ${isNextLoading ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'} text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
            children="Next Sentence" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}