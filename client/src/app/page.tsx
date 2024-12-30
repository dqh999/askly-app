'use client'

import { Footer } from '@/component/Footer';
import { Header } from '@/component/Header';
import { MessageBubble } from '@/component/MessageBubble';
import { useCompletion } from 'ai/react'
import { useEffect, useRef, useState } from 'react'
import { Message } from '@/type/messageType';
import { GrammarError } from '@/type/grammarType';
import { GrammarPanel } from '@/component/GrammarPanel';

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectMessage, setSelectMessage] = useState<Message | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [lastMessage, setLastMessage] = useState<string>("");
  const [showGrammarPanel, setShowGrammarPanel] = useState<boolean>(false);

  const { completion, input, setInput, handleInputChange, handleSubmit, isLoading: isRequestInProgress, error } = useCompletion({
    api: "/api/conversation",
    body: {
      context: lastMessage,
    },
  });
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (!isRequestInProgress && isLoading) {
      if (error) {
        return;
      }
      console.log(completion);
      const cleanData = completion.replace(/```json\s*|\s*```/g, '');
      const parsedData = JSON.parse(cleanData);
      console.log(cleanData);

      const newMessage: Message = {
        role: 'assistant',
        content: parsedData.conversation.next_question,
        timestamp: new Date().toLocaleTimeString(),
        error: null,
      }
      setMessages((prevMessages) => {
        const updateMessage = prevMessages[prevMessages.length - 1];
        const errors: GrammarError[] = parsedData.errors;
        if (updateMessage) {
          updateMessage.error = errors.length > 0 ? errors : null;
        }
        setSelectMessage(updateMessage);
        return [...prevMessages, newMessage];
      });
      setLoading(false);
    }
  }, [isRequestInProgress, completion, error]);

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setLastMessage(input);
    const newMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString(),
      error: null,
    }
    setLastMessage(input);
    setInput("");
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    handleSubmit(e);
    setLoading(true);
  }

  const handleMessageSelect = (message: Message) => {
    if (message.role === 'user') {
      setSelectMessage(message);
      setShowGrammarPanel(true);
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1 overflow-hidden pt-16">
        <div
          className={`w-full md:w-96 bg-white border-l border-gray-200 overflow-y-auto
            ${showGrammarPanel ? 'fixed inset-0 z-20 md:relative md:inset-auto' : 'hidden md:block'}`}
        >
          <div className="sticky top-0 flex items-center justify-between p-4 bg-white border-b border-gray-200">
            <h2 className="text-lg font-semibold">Language Analysis</h2>
            <button
              onClick={() => setShowGrammarPanel(false)}
              className="md:hidden text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </button>
          </div>
          <GrammarPanel
            errors={selectMessage?.error}
            currentMessage={selectMessage?.content}
          />
        </div>
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="space-y-4 max-w-3xl mx-auto">
              {messages.map((message, index) => (
                <div key={index} onClick={() => handleMessageSelect(message)} className="cursor-pointer">
                  <MessageBubble
                    message={message}
                  />
                </div>
              ))}
              {isRequestInProgress && (
                <MessageBubble
                  message={{
                    role: "assistant",
                    content: "is thinking",
                    timestamp: "",
                    error: null
                  }}
                />
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input area */}
          <div className="bg-white border-t border-gray-200 py-4 px-4">
            <form onSubmit={handleMessageSubmit} className="max-w-3xl mx-auto flex items-center gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                disabled={isLoading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
                  <path d="M6 12h16" />
                </svg>
              </button>
            </form>
          </div>
        </main>


      </div>

      <Footer />
    </div>
  )
}

