
import { ChatUser } from '@/data/messages';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface ChatHeaderProps {
  user: ChatUser;
}

const ChatHeader = ({ user }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-white">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <h3 className="font-medium text-sm">{user.name}</h3>
          <p className="text-xs text-gray-500">
            {user.isOnline ? (
              <span className="text-green-500">Online</span>
            ) : (
              'Offline'
            )}
          </p>
        </div>
      </div>
      <Button variant="ghost" size="icon" className="rounded-full">
        <MessageCircle className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ChatHeader;
