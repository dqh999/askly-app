'use client'

import { useState } from 'react'
// import { ChevronDown, Plus } from 'lucide-react'

interface ConversationHeaderProps {
  currentTopic: string
  onTopicChange: (topic: string) => void
  onNewConversation: () => void
}

const topics = ['Technical', 'Behavioral', 'System Design', 'General']

export function ConversationHeader({ currentTopic, onTopicChange, onNewConversation }: ConversationHeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className=" border-b py-4">
      <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold text-gray-800">{currentTopic} Interview</h2>
          <div className="relative">
            <button
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Change topic</span>
              {/* <ChevronDown className="w-4 h-4" /> */}
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      onTopicChange(topic)
                      setIsDropdownOpen(false)
                    }}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <button
          className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={onNewConversation}
        >
          {/* <Plus className="w-4 h-4" /> */}
          <span>New conversation</span>
        </button>
      </div>
    </div>
  )
}
