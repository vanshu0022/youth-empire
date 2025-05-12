
import React from 'react';
import { Play, Pause } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export type PodcastCardProps = {
  id: number;
  title: string;
  host: string;
  category: string;
  duration: string;
  image: string;
  description: string;
  isPlaying: boolean;
  onPlayToggle: (id: number) => void;
};

const PodcastCard = ({
  id,
  title,
  host,
  category,
  duration,
  image,
  description,
  isPlaying,
  onPlayToggle,
}: PodcastCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img 
          src={`${image}?w=600&fit=crop&auto=format`} 
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <div className="text-white">
            <div className="bg-student-purple text-xs font-medium inline-block px-2 py-1 rounded mb-2">
              {category}
            </div>
            <h3 className="font-bold">{title}</h3>
          </div>
        </div>
      </div>
      <CardContent className="pt-4">
        <div className="flex justify-between items-center mb-3">
          <div className="font-medium text-sm">Host: {host}</div>
          <div className="text-xs text-muted-foreground">{duration}</div>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full flex items-center justify-center"
          onClick={() => onPlayToggle(id)}
        >
          {isPlaying ? (
            <>
              <Pause className="h-4 w-4 mr-2" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-2" />
              <span>Listen</span>
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PodcastCard;
