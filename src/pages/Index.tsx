
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Feed from '@/components/Feed';
import RightPanel from '@/components/RightPanel';
import MobileNav from '@/components/MobileNav';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const Index = () => {
  // For demo purposes - in a real app, this would come from auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if coming from successful sign in or sign up
    const lastPath = sessionStorage.getItem('lastPath');
    if (lastPath === '/signin' || lastPath === '/signup') {
      setIsLoggedIn(true);
      navigate('/dashboard');
    }
    
    // Store current path
    sessionStorage.setItem('lastPath', window.location.pathname);
  }, [navigate]);

  // Guest landing page
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-student-purple mb-6">Welcome to StudentHub</h1>
            <p className="text-lg text-gray-600 mb-8">Connect with students, explore projects, find mentors, and discover learning opportunities all in one place.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signin">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto bg-student-purple hover:bg-student-purple/90">Sign Up</Button>
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-student-purple/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-student-purple">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaborative Projects</h3>
                <p className="text-gray-600">Find team members and collaborate on exciting student projects.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-student-coral/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-student-coral">
                    <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
                <p className="text-gray-600">Connect with experienced mentors who can guide you on your journey.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-student-teal/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-student-teal">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Learning Resources</h3>
                <p className="text-gray-600">Access curated learning materials and join study groups.</p>
              </div>
            </div>
          </div>
        </div>
        <MobileNav />
      </div>
    );
  }

  // Dashboard for logged in users
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen max-h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
          <Feed />
        </main>
      </div>
      <RightPanel />
      <MobileNav />
    </div>
  );
};

export default Index;
