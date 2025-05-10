
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Calendar, FileText, Heart, MessageSquare, Menu, School, Search, Award, Podcast, X } from 'lucide-react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 z-10 md:hidden">
        <Link to="/" className="flex flex-col items-center p-2">
          <FileText size={20} className={isActive('/') ? "text-student-purple" : ""} />
          <span className="text-xs mt-1">Dashboard</span>
        </Link>
        <Link to="/projects" className="flex flex-col items-center p-2">
          <Briefcase size={20} className={isActive('/projects') ? "text-student-purple" : ""} />
          <span className="text-xs mt-1">Projects</span>
        </Link>
        <button onClick={toggleMenu} className="flex flex-col items-center p-2">
          <Menu size={20} />
          <span className="text-xs mt-1">Menu</span>
        </button>
        <Link to="/learning" className="flex flex-col items-center p-2">
          <School size={20} className={isActive('/learning') ? "text-student-purple" : ""} />
          <span className="text-xs mt-1">Learning</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center p-2">
          <div className="w-6 h-6 rounded-full bg-student-purple/20 flex items-center justify-center">
            <span className="text-student-purple text-xs font-medium">JS</span>
          </div>
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 md:hidden">
          <div className="bg-white h-4/5 w-full absolute bottom-0 rounded-t-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={toggleMenu} className="p-2">
                <X size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Link to="/" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg" onClick={toggleMenu}>
                <FileText size={24} className="mb-2 text-student-purple" />
                <span className="text-sm text-center">Dashboard</span>
              </Link>
              <Link to="/projects" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg" onClick={toggleMenu}>
                <Briefcase size={24} className="mb-2 text-student-purple" />
                <span className="text-sm text-center">Projects</span>
              </Link>
              <Link to="/learning" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg" onClick={toggleMenu}>
                <School size={24} className="mb-2 text-student-purple" />
                <span className="text-sm text-center">Learning</span>
              </Link>
              <Link to="/mentorship" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg" onClick={toggleMenu}>
                <Award size={24} className="mb-2 text-student-purple" />
                <span className="text-sm text-center">Mentorship</span>
              </Link>
              <Link to="/messages" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg" onClick={toggleMenu}>
                <MessageSquare size={24} className="mb-2 text-student-purple" />
                <span className="text-sm text-center">Messages</span>
              </Link>
              <Link to="/events" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg" onClick={toggleMenu}>
                <Calendar size={24} className="mb-2 text-student-purple" />
                <span className="text-sm text-center">Events</span>
              </Link>
              <Link to="/podcasts" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg" onClick={toggleMenu}>
                <Podcast size={24} className="mb-2 text-student-purple" />
                <span className="text-sm text-center">Podcasts</span>
              </Link>
              <Link to="/explore" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg" onClick={toggleMenu}>
                <Search size={24} className="mb-2 text-student-purple" />
                <span className="text-sm text-center">Explore</span>
              </Link>
              <Link to="/opportunities" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg" onClick={toggleMenu}>
                <Heart size={24} className="mb-2 text-student-purple" />
                <span className="text-sm text-center">Opportunities</span>
              </Link>
            </div>
            
            <button onClick={toggleMenu} className="mt-auto w-full py-3 bg-student-purple text-white rounded-lg">
              Close Menu
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
