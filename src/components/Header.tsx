
import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="md:hidden">
          <h1 className="text-xl font-bold text-student-purple">StudentHub</h1>
        </div>
        
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
          <Search size={18} className="text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search for projects, mentors, courses..." 
            className="bg-transparent border-none outline-none w-full text-sm"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Upload Project
          </Button>
          <div className="relative">
            <Bell size={22} className="text-gray-600 cursor-pointer" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-student-coral rounded-full flex items-center justify-center text-white text-xs">3</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
