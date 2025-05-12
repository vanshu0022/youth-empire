
import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { ScrollArea } from '@/components/ui/scroll-area';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { Message, messageHistory, chatUsers, currentUser } from '@/data/messages';

interface ChatWindowProps {
  selectedUserId: string;
}

const ChatWindow = ({ selectedUserId }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [user, setUser] = useState(chatUsers.find(u => u.id === selectedUserId));
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update the selected user
    const selectedUser = chatUsers.find(u => u.id === selectedUserId);
    if (selectedUser) {
      setUser(selectedUser);
    }
    
    // Load message history for the selected user
    const userMessages = messageHistory[selectedUserId] || [];
    setMessages(userMessages);
    
    // Scroll to bottom on load
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  }, [selectedUserId]);

  useEffect(() => {
    // Scroll to bottom when messages change
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: nanoid(),
      senderId: currentUser.id,
      content,
      type: 'text',
      timestamp: new Date(),
      status: 'sent',
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate message being delivered after 1 second
    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === newMessage.id 
            ? { ...msg, status: 'delivered' } 
            : msg
        )
      );
      
      // Simulate user typing after 1.5 seconds
      if (user) {
        setTimeout(() => {
          setUser(prev => prev ? { ...prev, typing: true } : prev);
          
          // Simulate user sending a response after 3 seconds
          setTimeout(() => {
            if (user) {
              setUser(prev => prev ? { ...prev, typing: false } : prev);
              
              const responseMessage: Message = {
                id: nanoid(),
                senderId: user.id,
                content: `Thanks for your message! This is an automated response from ${user.name}.`,
                type: 'text',
                timestamp: new Date(),
                status: 'sent',
              };
              
              setMessages(prev => [...prev, responseMessage]);
              
              // Set the sent message to "seen" after 0.5 seconds
              setTimeout(() => {
                setMessages(prev => 
                  prev.map(msg => 
                    msg.id === newMessage.id 
                      ? { ...msg, status: 'seen' } 
                      : msg
                  )
                );
              }, 500);
            }
          }, 3000);
        }, 1500);
      }
    }, 1000);
  };

  if (!user) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Select a conversation</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <ChatHeader user={user} />
      
      <ScrollArea className="flex-1 p-4 bg-white">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isCurrentUser={message.senderId === currentUser.id}
          />
        ))}
        <div ref={scrollRef} />
      </ScrollArea>
      
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
