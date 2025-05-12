
import { forwardRef } from 'react';
import { format } from 'date-fns';
import { Message } from '@/data/messages';
import { Check } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
  isCurrentUser: boolean;
}

const ChatMessage = forwardRef<HTMLDivElement, ChatMessageProps>(
  ({ message, isCurrentUser }, ref) => {
    const messageStatusIcon = () => {
      if (isCurrentUser) {
        switch (message.status) {
          case 'sent':
            return <Check className="h-3 w-3 text-gray-400" />;
          case 'delivered':
            return (
              <div className="flex">
                <Check className="h-3 w-3 text-gray-400" />
                <Check className="h-3 w-3 -ml-1 text-gray-400" />
              </div>
            );
          case 'seen':
            return (
              <div className="flex">
                <Check className="h-3 w-3 text-blue-500" />
                <Check className="h-3 w-3 -ml-1 text-blue-500" />
              </div>
            );
        }
      }
      return null;
    };

    return (
      <div
        ref={ref}
        className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-2`}
      >
        <div
          className={`rounded-lg px-4 py-2 max-w-[80%] break-words ${
            isCurrentUser
              ? 'bg-student-purple text-white rounded-br-none'
              : 'bg-gray-100 text-gray-800 rounded-bl-none'
          }`}
        >
          {message.content}
          <div className={`flex items-center justify-end mt-1 text-xs ${
            isCurrentUser ? 'text-white/70' : 'text-gray-500'
          }`}>
            <span>{format(message.timestamp, 'h:mm a')}</span>
            <div className="ml-1">{messageStatusIcon()}</div>
          </div>
        </div>
      </div>
    );
  }
);

ChatMessage.displayName = 'ChatMessage';

export default ChatMessage;
