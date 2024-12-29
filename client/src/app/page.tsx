'use client'

import Layout from '@component/Layout'
import Pagination from '@component/Pagination'
import Loading from '@component/Loading'
import { useState, useMemo, useEffect } from 'react'
import { TopicCard } from '@component/TopicCard'
import { topics } from '../utils/topicData'

const difficulties = ['all', 'beginner', 'intermediate', 'advanced'] as const

export default function VocabularyTopics() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedDifficulty, setSelectedDifficulty] = useState<typeof difficulties[number]>('all')
    const [currentPage, setCurrentPage] = useState(1)
    const [isInitialLoading, setIsInitialLoading] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const topicsPerPage = 9

    const filteredTopics = useMemo(() => {
        return topics.filter(topic =>
            (selectedDifficulty === 'all' || topic.difficulty.toLowerCase() === selectedDifficulty) &&
            (topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                topic.categories.some(category =>
                    category.toLowerCase().includes(searchTerm.toLowerCase())
                ))
        )
    }, [searchTerm, selectedDifficulty])

    const totalPages = Math.ceil(filteredTopics.length / topicsPerPage)
    const indexOfLastTopic = currentPage * topicsPerPage
    const indexOfFirstTopic = indexOfLastTopic - topicsPerPage
    const currentTopics = filteredTopics.slice(indexOfFirstTopic, indexOfLastTopic)

    const handlePageChange = (page: number) => {
        setIsLoading(true)
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsInitialLoading(false)
        }, 1000) 

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => {
                setIsLoading(false)
            }, 500) 
            return () => clearTimeout(timer)
        }
    }, [isLoading])


    if (isInitialLoading) {
        return <Loading />
    }
    const breadcrumbItems = [
        { label: 'Home /', href: '/', isCurrent: true },
        // { label: 'Dashboard', href: '/dashboard', isCurrent: false },
        // { label: 'Overview', isCurrent: true },
      ];
    return (
        <Layout breadcrumbItems={breadcrumbItems}>
            <div className="max-w-3xl mx-auto text-center mb-10">
                <h1 className="text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                    English Vocabulary Topics
                </h1>
                <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                    Enhance your English vocabulary with our carefully curated topic collections.
                    Choose a category below to start learning!
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                    <div className="relative w-full sm:w-96">
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                        </svg>
                        <input type="text"
                            placeholder="Search topics or categories..."
                            className="pl-10 w-full h-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value)
                                setCurrentPage(1)
                                setIsLoading(true)
                            }}
                        />
                    </div>
                    <div className="flex gap-2">
                        {difficulties.map((difficulty) => (
                            <button key={difficulty}
                                onClick={() => {
                                    setSelectedDifficulty(difficulty)
                                    setCurrentPage(1)
                                    setIsLoading(true)
                                }}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 capitalize
                    ${selectedDifficulty === difficulty
                                        ? 'bg-gray-900 text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                    }`} >
                                {difficulty}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isLoading ? 'opacity-50' : ''}`}>
                {currentTopics.map((topic,index) => (
                    <div key={index}>
                        <TopicCard
                        name={topic.name}
                        // icon={topic.icon}
                        words={topic.words}
                        difficulty={topic.difficulty}
                        categories={topic.categories}
                        description={topic.description}
                    />
                    </div>
                ))}
            </div>
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </Layout>
    )
}

