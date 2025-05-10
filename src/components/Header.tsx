
import React from 'react';
import { Bell, Search, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-6 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="md:hidden">
          <h1 className="text-xl font-bold text-student-purple">StudentHub</h1>
        </div>
        
        <div className="hidden md:flex items-center">
          <h1 className="text-xl font-bold text-student-purple">StudentHub</h1>
        </div>
        
        <div className="flex items-center md:mx-auto bg-gray-100 rounded-full px-4 py-2 w-full max-w-xs">
          <Search size={18} className="text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent border-none outline-none w-full text-sm"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer">
            <MessageCircle size={24} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-student-purple rounded-full flex items-center justify-center text-white text-xs">2</span>
          </div>
          <div className="relative cursor-pointer">
            <Bell size={24} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-student-coral rounded-full flex items-center justify-center text-white text-xs">3</span>
          </div>
          <div className="hidden md:block h-8 w-8 rounded-full bg-student-purple/20 flex items-center justify-center cursor-pointer">
            <span className="font-medium text-sm text-student-purple">JS</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
