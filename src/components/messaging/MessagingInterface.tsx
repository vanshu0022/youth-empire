
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';

const MessagingInterface = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialChatId = queryParams.get('userId') || 'user-1';
  
  const [selectedChatId, setSelectedChatId] = useState<string | null>(initialChatId);

  // Update selected chat when URL changes
  useEffect(() => {
    const userId = queryParams.get('userId');
    if (userId) {
      setSelectedChatId(userId);
    }
  }, [location.search]);

  return (
    <div className="flex h-[calc(100vh-8rem)] bg-white border rounded-lg overflow-hidden shadow-lg">
      <div className="w-full sm:w-80 lg:w-96">
        <ChatList 
          onSelectChat={setSelectedChatId} 
          selectedChatId={selectedChatId} 
        />
      </div>
      <div className="hidden sm:flex flex-1">
        {selectedChatId ? (
          <ChatWindow selectedUserId={selectedChatId} />
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <p className="text-gray-500">Select a conversation</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagingInterface;
