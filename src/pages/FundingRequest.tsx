
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import FundingRequestForm from '@/components/FundingRequestForm';
import RightPanel from '@/components/RightPanel';
import MobileNav from '@/components/MobileNav';

const FundingRequest = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen max-h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto pb-16 md:pb-0 px-4 md:px-8 py-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Funding Request Portal</h1>
            <p className="text-gray-600 mb-8">
              Submit your startup details to request funding and mentorship opportunities.
            </p>
            <FundingRequestForm />
          </div>
        </main>
      </div>
      <RightPanel />
      <MobileNav />
    </div>
  );
};

export default FundingRequest;
