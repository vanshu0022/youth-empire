
import { useState, KeyboardEvent } from 'react';
import { Smile, Paperclip, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-gray-200 p-3 bg-white">
      <div className="flex items-end gap-2">
        <div className="flex-1">
          <Textarea
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="min-h-[3rem] max-h-[8rem] resize-none"
            rows={1}
          />
        </div>
        <div className="flex shrink-0 gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            type="button"
          >
            <Smile className="h-5 w-5 text-gray-500" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            type="button"
          >
            <Paperclip className="h-5 w-5 text-gray-500" />
          </Button>
          <Button
            variant="default"
            size="icon"
            className="rounded-full bg-student-purple hover:bg-student-purple/90"
            onClick={handleSend}
            disabled={!message.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
