
import React from 'react';
import { Button } from '@/components/ui/button';

const RightPanel = () => {
  return (
    <div className="hidden lg:block w-72 h-screen bg-white border-l border-gray-200 p-4 overflow-y-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="font-semibold mb-3">Upcoming Events</h3>
          <div className="space-y-3">
            <div className="p-3 border border-gray-100 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-student-purple/10 rounded text-xs p-1.5">
                  <span className="text-student-purple font-medium">MAY 12</span>
                </div>
                <span className="text-xs text-gray-500">10:00 AM</span>
              </div>
              <p className="text-sm font-medium">Web Development Workshop</p>
              <p className="text-xs text-gray-500">By Tech Academy</p>
            </div>

            <div className="p-3 border border-gray-100 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-student-purple/10 rounded text-xs p-1.5">
                  <span className="text-student-purple font-medium">MAY 15</span>
                </div>
                <span className="text-xs text-gray-500">2:00 PM</span>
              </div>
              <p className="text-sm font-medium">Resume Building Session</p>
              <p className="text-xs text-gray-500">By Career Center</p>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Suggested Mentors</h3>
            <a href="#" className="text-xs text-student-purple">View All</a>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div>
                <p className="text-sm font-medium">Dr. Emily Chen</p>
                <p className="text-xs text-gray-500">Computer Science, MIT</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div>
                <p className="text-sm font-medium">Prof. James Wilson</p>
                <p className="text-xs text-gray-500">Business, Harvard</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div>
                <p className="text-sm font-medium">Sarah Johnson</p>
                <p className="text-xs text-gray-500">UX Design, Google</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-student-purple to-student-purple/80 text-white p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Ready for your first internship?</h4>
          <p className="text-sm mb-3 text-white/90">Complete your profile to get matched with the perfect opportunity.</p>
          <Button variant="secondary" className="w-full bg-white text-student-purple hover:bg-white/90">Complete Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
