
import React, { useState } from 'react';
import { Bot, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi there! I'm your Life Lab AI assistant. I'm here to guide you through practical skill challenges. What would you like to work on today?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  
  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message
    setMessages([...messages, { role: 'user', content: inputMessage }]);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "That's a great skill to work on! I recommend starting with the Public Speaking Mastery challenge.",
        "I can help you with that! Try the Financial Literacy Basics challenge to build those skills.",
        "Excellent choice! The Critical Thinking Workshop would be perfect for you.",
        "Let me create a custom learning path for you based on your interests."
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      setMessages(currentMessages => [
        ...currentMessages, 
        { role: 'assistant', content: randomResponse }
      ]);
    }, 1000);
    
    setInputMessage('');
  };
  
  return (
    <Card className="shadow-sm border-student-purple/10">
      <CardContent className="p-4">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-student-purple flex items-center justify-center mr-3">
            <Bot size={18} className="text-white" />
          </div>
          <div>
            <h3 className="font-medium">Life Lab Assistant</h3>
            <p className="text-xs text-gray-500">AI-powered guide for your skill development</p>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-3 mb-4 max-h-48 overflow-y-auto">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`mb-3 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] px-3 py-2 rounded-lg ${
                message.role === 'user' 
                  ? 'bg-student-purple text-white rounded-tr-none' 
                  : 'bg-white border border-gray-100 rounded-tl-none'
              }`}>
                {message.content}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Input 
            placeholder="Ask for guidance or a new challenge..." 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} className="bg-student-purple hover:bg-student-purple/90">
            <Send size={18} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAssistant;
