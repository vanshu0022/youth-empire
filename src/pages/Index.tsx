
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Feed from '@/components/Feed';
import RightPanel from '@/components/RightPanel';
import MobileNav from '@/components/MobileNav';

const Index = () => {
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
