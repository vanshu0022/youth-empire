
import React from 'react';
import { ArrowRight, Award, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

interface ChallengeCardProps {
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  description: string;
  progress: number;
  pointsReward: number;
}

const ChallengeCard = ({
  title,
  difficulty,
  category,
  description,
  progress,
  pointsReward
}: ChallengeCardProps) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg">{title}</h3>
          <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor()}`}>
            {difficulty}
          </span>
        </div>
        
        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mb-3">
          {category}
        </span>
        
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">Progress</span>
          <span className="text-xs font-medium">{progress}%</span>
        </div>
        
        <Progress value={progress} className="h-2 mb-4" />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-student-purple text-sm">
            <Award size={16} className="mr-1" />
            <span>{pointsReward} points</span>
          </div>
          
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            Continue <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
