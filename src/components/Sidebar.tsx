
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Calendar, FileText, Heart, MessageSquare, School, Search, Award, Podcast } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col w-64 h-screen bg-white border-r border-gray-200 px-4 py-6 overflow-y-auto">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-2xl font-bold text-student-purple">StudentHub</h1>
      </div>
      
      <div className="flex flex-col gap-1">
        <h3 className="text-xs uppercase text-gray-500 font-semibold px-2 mb-1">Main</h3>
        <Link to="/" className="nav-link active">
          <FileText size={20} />
          <span>Dashboard</span>
        </Link>
        <Link to="/projects" className="nav-link">
          <Briefcase size={20} />
          <span>Projects</span>
        </Link>
        <Link to="/learning" className="nav-link">
          <School size={20} />
          <span>Learning</span>
        </Link>
        <Link to="/mentorship" className="nav-link">
          <Award size={20} />
          <span>Mentorship</span>
        </Link>
        
        <h3 className="text-xs uppercase text-gray-500 font-semibold px-2 mt-6 mb-1">Connect</h3>
        <Link to="/messages" className="nav-link">
          <MessageSquare size={20} />
          <span>Messages</span>
        </Link>
        <Link to="/events" className="nav-link">
          <Calendar size={20} />
          <span>Events</span>
        </Link>
        <Link to="/podcasts" className="nav-link">
          <Podcast size={20} />
          <span>Podcasts</span>
        </Link>
        
        <h3 className="text-xs uppercase text-gray-500 font-semibold px-2 mt-6 mb-1">Discover</h3>
        <Link to="/explore" className="nav-link">
          <Search size={20} />
          <span>Explore</span>
        </Link>
        <Link to="/opportunities" className="nav-link">
          <Heart size={20} />
          <span>Opportunities</span>
        </Link>
      </div>
      
      <div className="mt-auto">
        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-student-purple/20 flex items-center justify-center">
            <span className="text-student-purple font-medium">JS</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">John Smith</p>
            <p className="text-xs text-gray-500">Student</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
