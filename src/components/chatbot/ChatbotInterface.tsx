
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatbotInterfaceProps {
  title: string;
  description: string;
  initialMessage: string;
  botColor?: string;
  avatarUrl?: string;
}

const ChatbotInterface = ({
  title,
  description,
  initialMessage,
  botColor = 'bg-student-purple',
  avatarUrl,
}: ChatbotInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: initialMessage,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Sample responses for the chatbot
  const botResponses = [
    "I understand your question. Let me help you with that!",
    "That's an interesting point. Here's what I can tell you...",
    "Great question! Based on your profile, I'd recommend...",
    "I've analyzed similar cases and found that most users prefer...",
    "Let me check my database for the most relevant information...",
    "I can definitely assist you with that. Here's my suggestion:"
  ];

  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const detailedResponse = `${randomResponse} ${inputMessage.length > 20 ? 'Your detailed query helps me provide better assistance.' : 'Could you provide more details for better assistance?'}`;
      
      const botMessage = {
        role: 'assistant',
        content: detailedResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="flex flex-col h-full shadow-sm">
      <CardHeader className={`${botColor} text-white py-3 px-4`}>
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <CardDescription className="text-white/80 text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 p-0">
        <ScrollArea className="flex-1 p-4 h-[300px]" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex gap-2 max-w-[80%]">
                  {message.role === 'assistant' && (
                    <Avatar className={`h-8 w-8 ${botColor}`}>
                      {avatarUrl ? (
                        <AvatarImage src={avatarUrl} />
                      ) : (
                        <Bot className="h-5 w-5 text-white" />
                      )}
                      <AvatarFallback className={botColor}>
                        <Bot className="h-5 w-5 text-white" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-student-purple text-white ml-auto rounded-br-none'
                        : 'bg-gray-100 rounded-tl-none'
                    }`}
                  >
                    {message.content}
                    <div className="text-xs opacity-70 mt-1 text-right">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  {message.role === 'user' && (
                    <Avatar className="h-8 w-8 bg-gray-200">
                      <User className="h-5 w-5 text-gray-500" />
                      <AvatarFallback>
                        <User className="h-5 w-5 text-gray-500" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-2 max-w-[80%]">
                  <Avatar className={`h-8 w-8 ${botColor}`}>
                    {avatarUrl ? (
                      <AvatarImage src={avatarUrl} />
                    ) : (
                      <Bot className="h-5 w-5 text-white" />
                    )}
                    <AvatarFallback className={botColor}>
                      <Bot className="h-5 w-5 text-white" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="p-3 rounded-lg bg-gray-100 rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <div className="p-3 border-t">
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <Textarea
                placeholder="Type a message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="min-h-[60px] max-h-[120px] resize-none"
                rows={2}
              />
            </div>
            <Button
              onClick={handleSendMessage}
              className={`rounded-full ${botColor} hover:${botColor}/90`}
              disabled={!inputMessage.trim() || isTyping}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatbotInterface;
