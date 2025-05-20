
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import RightPanel from '@/components/RightPanel';
import MobileNav from '@/components/MobileNav';
import ChatbotInterface from '@/components/chatbot/ChatbotInterface';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen max-h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto pb-16 md:pb-0 p-4 md:p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <ChatbotInterface 
              title="Academic Assistant" 
              description="Your study companion and research guide"
              initialMessage="Hello! I'm your academic assistant. I can help you with research, study plans, and academic guidance. What would you like help with today?"
              botColor="bg-blue-600"
            />
            
            <ChatbotInterface 
              title="Career Coach" 
              description="Guiding your professional development"
              initialMessage="Welcome! I'm your career coach, here to help with job searches, resume building, and interview preparation. How can I assist with your career goals today?"
              botColor="bg-emerald-600"
            />
            
            <ChatbotInterface 
              title="Project Mentor" 
              description="Ideas and guidance for your projects"
              initialMessage="Hi there! I'm your project mentor. Whether you need help brainstorming ideas, structuring your work, or troubleshooting issues, I'm here to help. What project are you working on?"
              botColor="bg-student-purple"
            />
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Welcome to your dashboard</h2>
            <p className="text-gray-600">
              Access all your platform features from here. Get started by exploring the options in the 
              sidebar or chat with our specialized AI assistants above for personalized guidance.
            </p>
          </div>
        </main>
      </div>
      <RightPanel />
      <MobileNav />
    </div>
  );
};

export default Dashboard;
