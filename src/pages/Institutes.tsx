
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { institutes, getLocationFilters, Institute } from '../data/institutes';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';

const Institutes = () => {
  const [filteredInstitutes, setFilteredInstitutes] = useState<Institute[]>(institutes);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  
  const { countries, states, districts } = getLocationFilters();
  
  // Filter institutes based on search term and location filters
  useEffect(() => {
    let results = institutes;
    
    // Apply location filters
    if (selectedCountry) {
      results = results.filter(institute => institute.location.country === selectedCountry);
    }
    
    if (selectedState) {
      results = results.filter(institute => institute.location.state === selectedState);
    }
    
    if (selectedDistrict) {
      results = results.filter(institute => institute.location.district === selectedDistrict);
    }
    
    // Apply search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(institute => 
        institute.name.toLowerCase().includes(term)
      );
    }
    
    setFilteredInstitutes(results);
  }, [searchTerm, selectedCountry, selectedState, selectedDistrict]);
  
  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCountry('');
    setSelectedState('');
    setSelectedDistrict('');
  };
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <div className="p-6 flex-1">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Find Institutes</h2>
            
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search institutes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              
              <div className="flex flex-col md:flex-row gap-2">
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Countries</SelectItem>
                    {countries.map(country => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    {states.map(state => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="District" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Districts</SelectItem>
                    {districts.map(district => (
                      <SelectItem key={district} value={district}>{district}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Button variant="outline" onClick={resetFilters} className="flex md:w-auto items-center gap-2">
                  <Filter size={16} /> Reset
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredInstitutes.length > 0 ? (
                filteredInstitutes.map((institute) => (
                  <Link 
                    to={`/institutes/${institute.id}`} 
                    key={institute.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{institute.name}</h3>
                      <div className="px-2 py-1 bg-student-purple/10 text-student-purple rounded text-xs font-medium">
                        Rank #{institute.ranking}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-amber-500 mb-2">
                      <Star size={16} className="fill-amber-500" />
                      <span className="ml-1 text-sm">{institute.rating.toFixed(1)}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin size={14} className="mr-1" />
                      <span>
                        {institute.location.district}, {institute.location.state}, {institute.location.country}
                      </span>
                    </div>
                    
                    <div className="mt-4 text-xs text-gray-500">
                      <span className="inline-block bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">
                        {institute.details.type}
                      </span>
                      <span className="inline-block bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">
                        Est. {institute.details.established}
                      </span>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full py-8 text-center text-gray-500">
                  No institutes found matching your criteria. Try adjusting your filters.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <MobileNav />
    </div>
  );
};

export default Institutes;
