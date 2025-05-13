
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  allStreams,
  allCategories,
  allEducationLevels,
  allRegions,
  graduationYears,
  StreamType,
  OpportunityCategory,
  EducationLevel,
  Region
} from '@/data/opportunities';

interface FilterPanelProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedStreams: StreamType[];
  setSelectedStreams: (streams: StreamType[]) => void;
  selectedCategories: OpportunityCategory[];
  setSelectedCategories: (categories: OpportunityCategory[]) => void;
  selectedEducationLevels: EducationLevel[];
  setSelectedEducationLevels: (levels: EducationLevel[]) => void;
  selectedRegions: Region[];
  setSelectedRegions: (regions: Region[]) => void;
  selectedYears: number[];
  setSelectedYears: (years: number[]) => void;
  clearAllFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  searchQuery,
  setSearchQuery,
  selectedStreams,
  setSelectedStreams,
  selectedCategories,
  setSelectedCategories,
  selectedEducationLevels,
  setSelectedEducationLevels,
  selectedRegions,
  setSelectedRegions,
  selectedYears,
  setSelectedYears,
  clearAllFilters
}) => {
  // Toggle selection for multi-select filters
  const toggleStream = (stream: StreamType) => {
    if (selectedStreams.includes(stream)) {
      setSelectedStreams(selectedStreams.filter(s => s !== stream));
    } else {
      setSelectedStreams([...selectedStreams, stream]);
    }
  };

  const toggleCategory = (category: OpportunityCategory) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleEducationLevel = (level: EducationLevel) => {
    if (selectedEducationLevels.includes(level)) {
      setSelectedEducationLevels(selectedEducationLevels.filter(l => l !== level));
    } else {
      setSelectedEducationLevels([...selectedEducationLevels, level]);
    }
  };

  const toggleRegion = (region: Region) => {
    if (selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.filter(r => r !== region));
    } else {
      setSelectedRegions([...selectedRegions, region]);
    }
  };

  const toggleYear = (year: number) => {
    if (selectedYears.includes(year)) {
      setSelectedYears(selectedYears.filter(y => y !== year));
    } else {
      setSelectedYears([...selectedYears, year]);
    }
  };

  // Count total active filters
  const totalFiltersApplied = 
    selectedStreams.length + 
    selectedCategories.length + 
    selectedEducationLevels.length + 
    selectedRegions.length + 
    selectedYears.length;
  
  return (
    <div className="w-full mb-6 space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            placeholder="Search opportunities..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={18} />
                <span className="hidden sm:inline">Filters</span>
                {totalFiltersApplied > 0 && (
                  <span className="bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {totalFiltersApplied}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Apply Filters</DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              {/* Stream/Field of Interest */}
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs">Field of Interest</DropdownMenuLabel>
                {allStreams.map(stream => (
                  <DropdownMenuCheckboxItem
                    key={stream}
                    checked={selectedStreams.includes(stream)}
                    onCheckedChange={() => toggleStream(stream)}
                  >
                    {stream}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuGroup>
              
              <DropdownMenuSeparator />
              
              {/* Category */}
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs">Category</DropdownMenuLabel>
                {allCategories.map(category => (
                  <DropdownMenuCheckboxItem
                    key={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  >
                    {category}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuGroup>
              
              <DropdownMenuSeparator />
              
              {/* Education Level */}
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs">Education Level</DropdownMenuLabel>
                {allEducationLevels.map(level => (
                  <DropdownMenuCheckboxItem
                    key={level}
                    checked={selectedEducationLevels.includes(level)}
                    onCheckedChange={() => toggleEducationLevel(level)}
                  >
                    {level}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuGroup>
              
              <DropdownMenuSeparator />
              
              {/* Location */}
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs">Location</DropdownMenuLabel>
                {allRegions.map(region => (
                  <DropdownMenuCheckboxItem
                    key={region}
                    checked={selectedRegions.includes(region)}
                    onCheckedChange={() => toggleRegion(region)}
                  >
                    {region}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuGroup>
              
              <DropdownMenuSeparator />
              
              {/* Graduation Year */}
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs">Graduation Year</DropdownMenuLabel>
                {graduationYears.map(year => (
                  <DropdownMenuCheckboxItem
                    key={year}
                    checked={selectedYears.includes(year)}
                    onCheckedChange={() => toggleYear(year)}
                  >
                    {year}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuGroup>
              
              <DropdownMenuSeparator />
              
              <div className="p-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={clearAllFilters}
                >
                  Clear All Filters
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Active filters display */}
      {totalFiltersApplied > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedStreams.map(stream => (
            <Badge key={stream} variant="secondary" className="cursor-pointer" onClick={() => toggleStream(stream)}>
              {stream} ×
            </Badge>
          ))}
          
          {selectedCategories.map(category => (
            <Badge key={category} variant="secondary" className="cursor-pointer" onClick={() => toggleCategory(category)}>
              {category} ×
            </Badge>
          ))}
          
          {selectedEducationLevels.map(level => (
            <Badge key={level} variant="secondary" className="cursor-pointer" onClick={() => toggleEducationLevel(level)}>
              {level} ×
            </Badge>
          ))}
          
          {selectedRegions.map(region => (
            <Badge key={region} variant="secondary" className="cursor-pointer" onClick={() => toggleRegion(region)}>
              {region} ×
            </Badge>
          ))}
          
          {selectedYears.map(year => (
            <Badge key={year} variant="secondary" className="cursor-pointer" onClick={() => toggleYear(year)}>
              {year} ×
            </Badge>
          ))}
          
          {totalFiltersApplied > 1 && (
            <Badge variant="outline" className="cursor-pointer" onClick={clearAllFilters}>
              Clear All
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterPanel;
