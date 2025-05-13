
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Settings, HelpCircle, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

interface ProfileDropdownProps {
  onClose: () => void;
}

export const ProfileDropdown = ({ onClose }: ProfileDropdownProps) => {
  return (
    <div className="bg-white rounded-md overflow-hidden w-56 animate-in fade-in zoom-in-95 duration-100">
      <div className="p-4 flex items-center space-x-3">
        <Avatar className="h-12 w-12">
          <AvatarFallback className="bg-student-purple/20 text-student-purple">
            JS
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-semibold">John Smith</p>
          <p className="text-sm text-gray-500">Student</p>
        </div>
      </div>
      
      <Separator />
      
      <nav className="p-2">
        <ul className="space-y-1">
          <li>
            <Link 
              to="/profile" 
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={onClose}
            >
              <User size={18} className="text-gray-500" />
              <span className="text-sm">Profile</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/settings" 
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={onClose}
            >
              <Settings size={18} className="text-gray-500" />
              <span className="text-sm">Settings</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/help" 
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={onClose}
            >
              <HelpCircle size={18} className="text-gray-500" />
              <span className="text-sm">Help Center</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <Separator />
      
      <div className="p-2">
        <button 
          className="w-full flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 transition-colors text-left"
          onClick={onClose}
        >
          <LogOut size={18} className="text-gray-500" />
          <span className="text-sm">Log out</span>
        </button>
      </div>
    </div>
  );
};
