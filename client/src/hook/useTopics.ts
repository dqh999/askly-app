import { useState, useEffect, useMemo } from 'react'
import { Topic } from '../type/topicType'

export function useTopics(allTopics: Topic[], searchTerm: string, selectedDifficulty: string, currentPage: number, topicsPerPage: number) {
  const [isLoading, setIsLoading] = useState(false)
  const [displayedTopics, setDisplayedTopics] = useState(allTopics)

  const filteredTopics = useMemo(() => {
    return allTopics.filter(topic =>
      (selectedDifficulty === 'all' || topic.difficulty.toLowerCase() === selectedDifficulty) &&
      (topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.categories.some((category: string) => 
        category.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    )
  }, [allTopics, searchTerm, selectedDifficulty])

  const totalPages = Math.ceil(filteredTopics.length / topicsPerPage)
  const indexOfLastTopic = currentPage * topicsPerPage
  const indexOfFirstTopic = indexOfLastTopic - topicsPerPage
  const currentTopics = filteredTopics.slice(indexOfFirstTopic, indexOfLastTopic)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setDisplayedTopics(currentTopics)
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [currentTopics])

  return { isLoading, displayedTopics, totalPages }
}
