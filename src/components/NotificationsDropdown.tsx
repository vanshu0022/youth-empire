
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample notification data
const notifications = [
  {
    id: 1,
    user: {
      name: 'Emma Davis',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=250&h=250&auto=format',
      initials: 'ED'
    },
    action: 'commented on your project',
    time: '2 hours ago',
    read: false
  },
  {
    id: 2,
    user: {
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=250&h=250&auto=format',
      initials: 'AC'
    },
    action: 'mentioned you in a comment',
    time: '5 hours ago',
    read: false
  },
  {
    id: 3,
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=250&h=250&auto=format',
      initials: 'SJ'
    },
    action: 'invited you to collaborate',
    time: '1 day ago',
    read: false
  },
  {
    id: 4,
    user: {
      name: 'Michael Thompson',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=250&h=250&auto=format',
      initials: 'MT'
    },
    action: 'shared a document with you',
    time: '2 days ago',
    read: true
  },
  {
    id: 5,
    user: {
      name: 'Student Hub',
      avatar: '',
      initials: 'SH'
    },
    action: 'Your project submission was approved',
    time: '3 days ago',
    read: true
  }
];

interface NotificationsDropdownProps {
  onClose: () => void;
}

export const NotificationsDropdown = ({ onClose }: NotificationsDropdownProps) => {
  return (
    <div className="rounded-md bg-white overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <h3 className="font-semibold text-lg">Notifications</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <ScrollArea className="h-[400px] md:h-[500px]">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`p-4 flex items-start border-b border-gray-100 hover:bg-gray-50 transition-colors ${!notification.read ? 'bg-blue-50/30' : ''}`}
          >
            <Avatar className="h-10 w-10 mr-3 flex-shrink-0">
              {notification.user.avatar ? (
                <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
              ) : null}
              <AvatarFallback className={notification.user.name === 'Student Hub' ? 'bg-student-purple text-white' : ''}>
                {notification.user.initials}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div className="text-sm">
                  <span className="font-medium">{notification.user.name}</span>{' '}
                  <span className="text-gray-600">{notification.action}</span>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{notification.time}</span>
              </div>
            </div>
            
            {!notification.read && (
              <div className="h-2 w-2 rounded-full bg-student-purple ml-2 mt-1.5 flex-shrink-0"></div>
            )}
          </div>
        ))}
      </ScrollArea>
      
      <div className="p-3 border-t border-gray-100 text-center">
        <Button variant="link" className="text-student-purple text-sm">
          View all notifications
        </Button>
      </div>
    </div>
  );
};
