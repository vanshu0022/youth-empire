
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { chatUsers } from '@/data/messages';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ChatListProps {
  onSelectChat: (userId: string) => void;
  selectedChatId: string | null;
}

const ChatList = ({ onSelectChat, selectedChatId }: ChatListProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = chatUsers.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full border-r border-gray-200">
      <div className="p-3 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search conversations" 
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="flex flex-col">
          {filteredUsers.map((user) => (
            <button
              key={user.id}
              className={`flex items-center p-3 hover:bg-gray-100 transition-colors ${
                selectedChatId === user.id ? 'bg-gray-100' : ''
              }`}
              onClick={() => onSelectChat(user.id)}
            >
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {user.isOnline && (
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-white" />
                )}
              </div>
              <div className="ml-3 text-left flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm truncate">{user.name}</p>
                  <span className="text-xs text-gray-500">
                    {user.lastSeen 
                      ? new Intl.DateTimeFormat('en', { hour: '2-digit', minute: '2-digit' }).format(user.lastSeen) 
                      : ''}
                  </span>
                </div>
                <div className="flex items-center">
                  {user.typing ? (
                    <p className="text-xs text-student-purple truncate">Typing...</p>
                  ) : (
                    <p className="text-xs text-gray-500 truncate">
                      {/* Placeholder for last message */}
                      {user.id === 'user-3' ? 'Can you also send me the assignment details?' : ''}
                    </p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatList;
