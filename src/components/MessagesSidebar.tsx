
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, X, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

// Sample messages data
const messages = [
  {
    id: 1,
    user: {
      name: 'Emma Davis',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=250&h=250&auto=format',
      initials: 'ED'
    },
    lastMessage: 'Hey! I had a question about the project deadline',
    time: '2h',
    unread: 2,
    online: true
  },
  {
    id: 2,
    user: {
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=250&h=250&auto=format',
      initials: 'AC'
    },
    lastMessage: 'Are you joining the study group today?',
    time: '5h',
    unread: 0,
    online: false
  },
  {
    id: 3,
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=250&h=250&auto=format',
      initials: 'SJ'
    },
    lastMessage: 'Can you also send me the assignment details?',
    time: '1d',
    unread: 0,
    online: true,
    typing: true
  },
  {
    id: 4,
    user: {
      name: 'Michael Thompson',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=250&h=250&auto=format',
      initials: 'MT'
    },
    lastMessage: 'Thanks for the help with the research paper!',
    time: '2d',
    unread: 0,
    online: false
  }
];

interface MessagesSidebarProps {
  onClose: () => void;
}

export const MessagesSidebar = ({ onClose }: MessagesSidebarProps) => {
  return (
    <div className="bg-white rounded-md overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <h3 className="font-semibold text-lg">Messages</h3>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="p-3 border-b border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search messages"
            className="pl-9 bg-gray-100 border-none focus-visible:ring-1 focus-visible:ring-gray-300"
          />
        </div>
      </div>
      
      <ScrollArea className="h-[350px] md:h-[450px]">
        {messages.map((message) => (
          <Link
            key={message.id}
            to="/messages"
            onClick={onClose}
            className="flex items-center p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
          >
            <div className="relative">
              <Avatar className="h-12 w-12 mr-3">
                <AvatarImage src={message.user.avatar} alt={message.user.name} />
                <AvatarFallback>{message.user.initials}</AvatarFallback>
              </Avatar>
              {message.online && (
                <span className="absolute bottom-0 right-2 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <span className="font-medium truncate">{message.user.name}</span>
                <span className="text-xs text-gray-500">{message.time}</span>
              </div>
              <div className="flex items-center justify-between">
                {message.typing ? (
                  <p className="text-sm text-student-purple truncate">Typing...</p>
                ) : (
                  <p className="text-sm text-gray-600 truncate">{message.lastMessage}</p>
                )}
                {message.unread > 0 && (
                  <Badge variant="default" className="ml-2 bg-student-purple text-white rounded-full h-5 min-w-5 flex items-center justify-center px-1.5">
                    {message.unread}
                  </Badge>
                )}
              </div>
            </div>
          </Link>
        ))}
      </ScrollArea>
      
      <div className="p-3 border-t border-gray-100 text-center">
        <Link 
          to="/messages"
          onClick={onClose}
          className="text-student-purple text-sm font-medium hover:underline"
        >
          See all messages
        </Link>
      </div>
    </div>
  );
};
