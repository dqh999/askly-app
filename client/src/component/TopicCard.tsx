import Link from 'next/link'
import React from 'react'

interface TopicCardProps {
  name: string
  // icon: React.ReactNode
  words: number
  difficulty: string
  categories: string[]
  description: string
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'beginner':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200'
    case 'intermediate':
      return 'bg-blue-50 text-blue-700 border-blue-200'
    case 'advanced':
      return 'bg-purple-50 text-purple-700 border-purple-200'
    default:
      return 'bg-gray-50 text-gray-700 border-gray-200'
  }
}

export const TopicCard: React.FC<TopicCardProps> = ({name, words, difficulty, categories, description }) => {
  return (
    <Link href={"/translation"} >
    <div className="group hover:shadow-lg transition-all duration-300 bg-white rounded-lg border-2 border-gray-200 hover:border-gray-300">
      <div className="p-6">
        <div className="flex flex-col items-start  mb-4">
          {/* <div className="p-3 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300">
            <div className="w-6 h-6 text-gray-700">
              {icon}
            </div>
          </div> */}
          {/* <div> */}
            <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
            <p className="text-sm text-gray-500">{words} words</p>
          {/* </div> */}
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="space-y-3">
          <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full border ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600 border border-gray-200"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}
