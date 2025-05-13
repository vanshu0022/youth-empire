
import React from 'react';
import { Calendar, Globe, Share2, Bookmark, ExternalLink, MapPin } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Opportunity } from '@/data/opportunities';

interface OpportunityCardProps {
  opportunity: Opportunity;
  isNew?: boolean;
}

const OpportunityCard = ({ opportunity, isNew = false }: OpportunityCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        {isNew && (
          <div className="mb-2">
            <Badge variant="default" className="bg-student-coral text-white">New Today</Badge>
          </div>
        )}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold line-clamp-2">{opportunity.title}</h3>
            {opportunity.companyName && (
              <p className="text-sm text-muted-foreground">{opportunity.companyName}</p>
            )}
          </div>
          <Badge 
            variant={opportunity.category === 'Scholarship' ? 'default' : 
                   opportunity.category === 'Internship' ? 'secondary' : 
                   opportunity.category === 'Job' ? 'outline' : 'default'}
            className={opportunity.category === 'Scholarship' ? 'bg-student-purple' : 
                      opportunity.category === 'Internship' ? 'bg-student-teal' : ''}
          >
            {opportunity.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{opportunity.description}</p>
        
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            {opportunity.isRemote ? (
              <>
                <Globe size={16} className="text-gray-500" />
                <span>Remote</span>
              </>
            ) : (
              <>
                <MapPin size={16} className="text-gray-500" />
                <span>{opportunity.location}</span>
              </>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-gray-500" />
            <span>Deadline: {formatDate(opportunity.deadline)}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {opportunity.tags.map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-3 flex justify-between border-t">
        <Button variant="outline" size="sm">
          <Bookmark size={16} />
          <span className="sr-only md:not-sr-only md:ml-2">Save</span>
        </Button>
        
        <Button variant="outline" size="sm">
          <Share2 size={16} />
          <span className="sr-only md:not-sr-only md:ml-2">Share</span>
        </Button>
        
        <Button size="sm">
          <ExternalLink size={16} />
          <span className="ml-2">Apply</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OpportunityCard;
