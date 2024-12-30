import { useTextToSpeed } from '../hook/useTextToSpeed';
import { Message } from '../type/messageType';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const { speak: textToSpeed } = useTextToSpeed();
  const isUser = message.role === "user";

  const handleTextToSpeed = () => {
    textToSpeed("en-US", message.content, () => {
      // Callback function if needed
    });
  }

  return (
    <div className={`flex items-end gap-2 mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z"/>
        </svg>
      </div>
      )}
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[70%]`}>
    
        <div className='flex flex-row space-x-2'>
        <div className={`px-4 py-2 rounded-2xl shadow-sm ${isUser
            ? 'bg-gradient-to-br from-blue-500 to-violet-500 text-white'
            : 'bg-white border border-gray-200 text-gray-800'
          }`}>
          <p className="text-sm leading-relaxed break-words">{message.content}</p>
        
        </div>
        {!isUser && (
            <button
              onClick={handleTextToSpeed}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Text to speech"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M2 10v3" /><path d="M6 6v11" /><path d="M10 3v18" /><path d="M14 8v7" /><path d="M18 5v13" /><path d="M22 10v3" /></svg>
            </button>
          )}
        </div>
        {/* <div className="flex items-center mt-1 space-x-2">
          <span className="text-xs text-gray-500">{message.timestamp}</span>
        </div> */}
      </div>
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        </div>
      )}
    </div>
  );
}

