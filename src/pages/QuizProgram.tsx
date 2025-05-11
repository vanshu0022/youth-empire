
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import RightPanel from '@/components/RightPanel';
import MobileNav from '@/components/MobileNav';
import ProgramDetails from '@/components/ProgramDetails';
import QuizRegistrationForm from '@/components/QuizRegistrationForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Users } from 'lucide-react';

const QuizProgram = () => {
  const [selectedProgram, setSelectedProgram] = useState<'juniors' | 'seniors'>('juniors');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen max-h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto pb-16 md:pb-0 px-4 md:px-8 py-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">KBC Quiz Program</h1>
            <p className="text-gray-600 mb-6">
              Join our prestigious quiz competition to showcase your knowledge, win exciting prizes, and gain nationwide recognition!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div 
                className={`p-6 rounded-lg shadow-md cursor-pointer transition-all ${
                  selectedProgram === 'juniors' ? 'bg-student-purple text-white border-2 border-student-purple' : 'bg-white border-2 border-transparent hover:border-student-purple/50'
                }`}
                onClick={() => setSelectedProgram('juniors')}
              >
                <div className="flex items-center mb-3">
                  <BookOpen size={24} className={selectedProgram === 'juniors' ? 'text-white' : 'text-student-purple'} />
                  <h2 className="text-xl font-bold ml-2">KBC Juniors</h2>
                </div>
                <p className={selectedProgram === 'juniors' ? 'text-white/90' : 'text-gray-600'}>
                  For school students (Class 6 to 12) who want to challenge their knowledge and win exciting prizes.
                </p>
              </div>

              <div 
                className={`p-6 rounded-lg shadow-md cursor-pointer transition-all ${
                  selectedProgram === 'seniors' ? 'bg-student-purple text-white border-2 border-student-purple' : 'bg-white border-2 border-transparent hover:border-student-purple/50'
                }`}
                onClick={() => setSelectedProgram('seniors')}
              >
                <div className="flex items-center mb-3">
                  <Users size={24} className={selectedProgram === 'seniors' ? 'text-white' : 'text-student-purple'} />
                  <h2 className="text-xl font-bold ml-2">KBC Seniors</h2>
                </div>
                <p className={selectedProgram === 'seniors' ? 'text-white/90' : 'text-gray-600'}>
                  For college and university students ready to compete at a higher level with greater stakes and rewards.
                </p>
              </div>
            </div>

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="details">Program Details</TabsTrigger>
                <TabsTrigger value="register">Register Now</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details">
                <ProgramDetails programType={selectedProgram} />
              </TabsContent>
              
              <TabsContent value="register">
                <QuizRegistrationForm programType={selectedProgram} />
              </TabsContent>
            </Tabs>

          </div>
        </main>
      </div>
      <RightPanel />
      <MobileNav />
    </div>
  );
};

export default QuizProgram;
