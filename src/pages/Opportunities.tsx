
import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import OpportunityCard from '@/components/OpportunityCard';
import FilterPanel from '@/components/FilterPanel';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  opportunitiesData, 
  isPostedToday,
  StreamType,
  OpportunityCategory,
  EducationLevel,
  Region,
  Opportunity 
} from '@/data/opportunities';

const Opportunities = () => {
  const { toast } = useToast();
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStreams, setSelectedStreams] = useState<StreamType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<OpportunityCategory[]>([]);
  const [selectedEducationLevels, setSelectedEducationLevels] = useState<EducationLevel[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState('all');
  
  // Setup notifications state
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedStreams([]);
    setSelectedCategories([]);
    setSelectedEducationLevels([]);
    setSelectedRegions([]);
    setSelectedYears([]);
  };
  
  // Toggle notifications
  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    
    toast({
      title: notificationsEnabled 
        ? "Opportunity alerts turned off" 
        : "Opportunity alerts turned on",
      description: notificationsEnabled 
        ? "You will no longer receive alerts for new opportunities." 
        : "You'll receive alerts when new opportunities match your interests.",
      duration: 3000,
    });
  };
  
  // Filter opportunities based on all criteria
  const filterOpportunities = (opportunities: Opportunity[]): Opportunity[] => {
    return opportunities.filter(opportunity => {
      // Search query filter
      if (
        searchQuery &&
        !opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !opportunity.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !opportunity.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      ) {
        return false;
      }
      
      // Stream filter
      if (selectedStreams.length > 0 && 
          !opportunity.stream.some(stream => selectedStreams.includes(stream))) {
        return false;
      }
      
      // Category filter
      if (selectedCategories.length > 0 && 
          !selectedCategories.includes(opportunity.category)) {
        return false;
      }
      
      // Education level filter
      if (selectedEducationLevels.length > 0 && 
          !opportunity.educationLevel.some(level => selectedEducationLevels.includes(level))) {
        return false;
      }
      
      // Region filter
      const opportunityRegion: Region = opportunity.isRemote 
        ? 'Remote'
        : opportunity.location === 'Global' 
          ? 'Global' 
          : opportunity.location.includes('United States') || opportunity.location.includes('Canada') 
            ? 'North America'
            : opportunity.location.includes('Europe') || opportunity.location.includes('UK') || opportunity.location.includes('Germany')
              ? 'Europe'
              : opportunity.location.includes('Asia') || opportunity.location.includes('China') || opportunity.location.includes('Japan')
                ? 'Asia'
                : opportunity.location.includes('Africa')
                  ? 'Africa'
                  : opportunity.location.includes('Australia')
                    ? 'Australia'
                    : opportunity.location.includes('South America')
                      ? 'South America'
                      : 'Global';

      if (selectedRegions.length > 0 && 
          !selectedRegions.includes(opportunityRegion)) {
        return false;
      }
      
      // Graduation year filter
      if (selectedYears.length > 0 && 
          !opportunity.graduationYear.some(year => selectedYears.includes(year))) {
        return false;
      }
      
      return true;
    });
  };
  
  // Get today's opportunities
  const todayOpportunities = filterOpportunities(
    opportunitiesData.filter(opportunity => isPostedToday(opportunity.postedDate))
  );
  
  // Get all filtered opportunities
  const allOpportunities = filterOpportunities(opportunitiesData);

  // Demo effect to show a notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      toast({
        title: "New opportunity alert!",
        description: "A new scholarship was just posted that matches your interests.",
        duration: 5000,
      });
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto pb-16 md:pb-0 px-4 md:px-8">
          <div className="max-w-7xl mx-auto py-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold">Opportunities</h1>
                <p className="text-muted-foreground">
                  Discover scholarships, internships, and more tailored to your interests
                </p>
              </div>
              
              <Button 
                onClick={toggleNotifications}
                variant={notificationsEnabled ? "default" : "outline"} 
                className="self-start md:self-center"
              >
                <Bell className="mr-2 h-4 w-4" />
                {notificationsEnabled ? "Alerts On" : "Get Alerts"}
              </Button>
            </div>
            
            <FilterPanel 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedStreams={selectedStreams}
              setSelectedStreams={setSelectedStreams}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedEducationLevels={selectedEducationLevels}
              setSelectedEducationLevels={setSelectedEducationLevels}
              selectedRegions={selectedRegions}
              setSelectedRegions={setSelectedRegions}
              selectedYears={selectedYears}
              setSelectedYears={setSelectedYears}
              clearAllFilters={clearAllFilters}
            />
            
            <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">All Opportunities</TabsTrigger>
                <TabsTrigger value="today">Posted Today ({todayOpportunities.length})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="pt-6">
                {allOpportunities.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-lg border">
                    <h3 className="text-lg font-medium mb-2">No opportunities found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
                    <Button variant="outline" className="mt-4" onClick={clearAllFilters}>
                      Clear All Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {allOpportunities.map(opportunity => (
                      <OpportunityCard 
                        key={opportunity.id} 
                        opportunity={opportunity}
                        isNew={isPostedToday(opportunity.postedDate)}
                      />
                    ))}
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="today" className="pt-6">
                {todayOpportunities.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-lg border">
                    <h3 className="text-lg font-medium mb-2">No new opportunities today</h3>
                    <p className="text-muted-foreground">
                      Check back later or browse all opportunities.
                    </p>
                    <Button variant="outline" className="mt-4" onClick={() => setActiveTab('all')}>
                      View All Opportunities
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {todayOpportunities.map(opportunity => (
                      <OpportunityCard 
                        key={opportunity.id} 
                        opportunity={opportunity}
                        isNew={true}
                      />
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
};

export default Opportunities;
