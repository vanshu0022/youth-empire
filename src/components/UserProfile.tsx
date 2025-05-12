
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Zap } from 'lucide-react';

const UserProfile = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Your Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-student-purple/20 flex items-center justify-center">
            <span className="text-xl font-semibold text-student-purple">JS</span>
          </div>
          <div>
            <h3 className="font-medium">John Smith</h3>
            <div className="flex items-center text-sm text-gray-600">
              <span className="bg-student-purple/10 text-student-purple px-2 py-0.5 rounded text-xs font-medium">
                Explorer Level
              </span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Current Level</span>
              <span className="text-sm text-gray-500">Level 3</span>
            </div>
            <Progress value={68} className="h-2" />
            <div className="flex justify-between text-xs mt-1">
              <span>470 / 700 XP</span>
              <span>Level 4</span>
            </div>
          </div>
          
          <div className="pt-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center text-amber-500">
                <Trophy size={18} className="mr-2" />
                <span className="font-medium">Total Points</span>
              </div>
              <span className="font-bold">580</span>
            </div>
          </div>
          
          <div className="pt-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center text-student-teal">
                <Zap size={18} className="mr-2" />
                <span className="font-medium">Current Streak</span>
              </div>
              <span className="font-bold">5 days</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-student-purple/10 to-student-teal/10 p-3 rounded-lg">
          <h4 className="font-medium text-sm mb-1">Recommended Skills</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Public Speaking</li>
            <li>• Time Management</li>
            <li>• Financial Planning</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
