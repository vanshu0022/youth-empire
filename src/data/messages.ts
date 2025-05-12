
import { Avatar } from "@/components/ui/avatar";

export type MessageStatus = 'sent' | 'delivered' | 'seen';

export type MessageType = 'text' | 'image' | 'video' | 'file';

export interface Message {
  id: string;
  senderId: string;
  content: string;
  type: MessageType;
  timestamp: Date;
  status: MessageStatus;
}

export interface ChatUser {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  lastSeen?: Date;
  typing?: boolean;
}

export const currentUser: ChatUser = {
  id: 'current-user',
  name: 'John Smith',
  avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=250&h=250&auto=format',
  isOnline: true,
};

export const chatUsers: ChatUser[] = [
  {
    id: 'user-1',
    name: 'Emma Davis',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=250&h=250&auto=format',
    isOnline: true,
  },
  {
    id: 'user-2',
    name: 'Alex Chen',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=250&h=250&auto=format',
    isOnline: false,
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
  },
  {
    id: 'user-3',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=250&h=250&auto=format',
    isOnline: true,
    typing: true,
  },
  {
    id: 'user-4',
    name: 'Michael Thompson',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=250&h=250&auto=format',
    isOnline: true,
  },
];

export const messageHistory: Record<string, Message[]> = {
  'user-1': [
    {
      id: '1',
      senderId: 'current-user',
      content: 'Hi Emma, I had a question about the project deadline',
      type: 'text',
      timestamp: new Date(Date.now() - 86400000),
      status: 'seen',
    },
    {
      id: '2',
      senderId: 'user-1',
      content: 'Hey John! Sure, what do you need to know?',
      type: 'text',
      timestamp: new Date(Date.now() - 85400000),
      status: 'seen',
    },
    {
      id: '3',
      senderId: 'current-user',
      content: 'When is our presentation due?',
      type: 'text',
      timestamp: new Date(Date.now() - 84400000),
      status: 'seen',
    },
    {
      id: '4',
      senderId: 'user-1',
      content: 'Next Friday at 3pm. I can send you the details',
      type: 'text',
      timestamp: new Date(Date.now() - 83400000),
      status: 'seen',
    },
  ],
  'user-2': [
    {
      id: '1',
      senderId: 'user-2',
      content: 'Are you joining the study group today?',
      type: 'text',
      timestamp: new Date(Date.now() - 43200000),
      status: 'seen',
    },
    {
      id: '2',
      senderId: 'current-user',
      content: 'Yes, I\'ll be there at 5pm',
      type: 'text',
      timestamp: new Date(Date.now() - 42200000),
      status: 'delivered',
    },
  ],
  'user-3': [
    {
      id: '1',
      senderId: 'current-user',
      content: 'Did you get my notes from yesterday\'s lecture?',
      type: 'text',
      timestamp: new Date(Date.now() - 10800000),
      status: 'seen',
    },
    {
      id: '2',
      senderId: 'user-3',
      content: 'Yes, thank you! They were really helpful',
      type: 'text',
      timestamp: new Date(Date.now() - 7200000),
      status: 'seen',
    },
    {
      id: '3',
      senderId: 'user-3',
      content: 'Can you also send me the assignment details?',
      type: 'text',
      timestamp: new Date(Date.now() - 1800000),
      status: 'seen',
    },
  ],
  'user-4': [],
};
