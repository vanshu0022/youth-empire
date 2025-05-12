
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import RightPanel from '@/components/RightPanel';
import MobileNav from '@/components/MobileNav';
import MessagingInterface from '@/components/messaging/MessagingInterface';

const Messaging = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen max-h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto pb-16 md:pb-0 p-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Messages</h1>
            <MessagingInterface />
          </div>
        </main>
      </div>
      <RightPanel />
      <MobileNav />
    </div>
  );
};

export default Messaging;
