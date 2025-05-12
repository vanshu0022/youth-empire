
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';
import RightPanel from '../components/RightPanel';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import ChallengeCard from '@/components/ChallengeCard';
import AIAssistant from '@/components/AIAssistant';
import UserProfile from '@/components/UserProfile';

const LifeLab = () => {
  const [activeTab, setActiveTab] = useState('challenges');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <div className="p-4 md:p-6 flex-1">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Life Lab</h1>
            <p className="text-gray-600">Learn practical skills with personalized challenges and tasks</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column - User profile and progress */}
            <div className="col-span-1">
              <UserProfile />
            </div>
            
            {/* Center column - Main content */}
            <div className="col-span-1 lg:col-span-2 space-y-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full grid grid-cols-3 mb-6">
                  <TabsTrigger value="challenges">Challenges</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                </TabsList>
                
                <TabsContent value="challenges" className="space-y-4">
                  <AIAssistant />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ChallengeCard 
                      title="Public Speaking Mastery" 
                      difficulty="Beginner"
                      category="Communication"
                      description="Learn to overcome anxiety and deliver compelling speeches"
                      progress={25}
                      pointsReward={100}
                    />
                    <ChallengeCard 
                      title="Financial Literacy Basics" 
                      difficulty="Intermediate"
                      category="Finance"
                      description="Understand budgeting, saving, and investment fundamentals"
                      progress={50}
                      pointsReward={150}
                    />
                    <ChallengeCard 
                      title="Effective Time Management" 
                      difficulty="Beginner"
                      category="Productivity"
                      description="Master techniques to optimize your daily schedule"
                      progress={75}
                      pointsReward={120}
                    />
                    <ChallengeCard 
                      title="Critical Thinking Workshop" 
                      difficulty="Advanced"
                      category="Cognition"
                      description="Develop analytical reasoning for complex problem-solving"
                      progress={10}
                      pointsReward={200}
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="completed" className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium mb-4">Your Completed Challenges</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b pb-3">
                        <div>
                          <h4 className="font-medium">Team Collaboration Project</h4>
                          <p className="text-sm text-gray-500">Completed on May 10, 2025</p>
                        </div>
                        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          180 points earned
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center border-b pb-3">
                        <div>
                          <h4 className="font-medium">Research Skills Workshop</h4>
                          <p className="text-sm text-gray-500">Completed on May 5, 2025</p>
                        </div>
                        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          150 points earned
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="achievements" className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium mb-4">Your Badges</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="flex flex-col items-center bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg">
                        <div className="w-16 h-16 rounded-full bg-student-purple/20 flex items-center justify-center mb-2">
                          <span className="text-student-purple text-xl">🌟</span>
                        </div>
                        <span className="text-sm font-medium">First Steps</span>
                      </div>
                      
                      <div className="flex flex-col items-center bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg">
                        <div className="w-16 h-16 rounded-full bg-student-purple/20 flex items-center justify-center mb-2">
                          <span className="text-student-purple text-xl">🏆</span>
                        </div>
                        <span className="text-sm font-medium">Achiever</span>
                      </div>
                      
                      <div className="flex flex-col items-center bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg">
                        <div className="w-16 h-16 rounded-full bg-student-purple/20 flex items-center justify-center mb-2">
                          <span className="text-student-purple text-xl">💡</span>
                        </div>
                        <span className="text-sm font-medium">Problem Solver</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      
      <RightPanel />
      <MobileNav />
    </div>
  );
};

export default LifeLab;
