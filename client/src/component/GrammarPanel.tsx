'use client'

import { GrammarError } from '@/type/grammarType'

interface GrammarPanelProps {
  errors: GrammarError[] | undefined | null,
  currentMessage: string | undefined | null
}

export function GrammarPanel({
  errors,
  currentMessage
}: GrammarPanelProps) {

  const getErrorTypeColor = (type: string) => {
    switch (type) {
      case 'grammar':
        return 'bg-blue-100 text-blue-700'
      case 'vocabulary':
        return 'bg-purple-100 text-purple-700'
      case 'spelling':
        return 'bg-yellow-100 text-yellow-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }
  return (
    <div className="p-4 space-y-4">
      {currentMessage ? (
        <>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Your message:</h3>
            <p className="text-sm text-gray-700">{currentMessage}</p>
          </div>

          {errors && errors.length > 0 ? (
            <div className="space-y-3">
              {errors.map((error, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-4 border border-gray-200"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getErrorTypeColor(error.type)}`}>
                      {error.type.charAt(0).toUpperCase() + error.type.slice(1)}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Text: </span>
                      <span className="text-red-600">{error.text}</span>
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Suggestion: </span>
                      <span className="text-green-600">{error.suggestion}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      {error.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-green-50 text-green-700 p-4 rounded-lg">
              <p className="text-sm">Great job! No errors found in your message.</p>
            </div>
          )}
        </>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-sm text-gray-500">
            Select a message to see its language analysis.
          </p>
        </div>
      )}
    </div>
  )
}

