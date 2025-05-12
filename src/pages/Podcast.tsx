
import React, { useState } from 'react';
import { Mic, Headphones } from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';
import { Button } from '@/components/ui/button';
import { podcasts } from '../data/podcasts';
import PodcastCard from '../components/PodcastCard';
import PodcastApplicationForm from '../components/PodcastApplicationForm';

const Podcast = () => {
  const [playing, setPlaying] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter podcasts by category
  const filteredPodcasts = activeCategory 
    ? podcasts.filter(podcast => podcast.category === activeCategory) 
    : podcasts;

  // Toggle podcast playback
  const togglePlayback = (id: number) => {
    setPlaying(playing === id ? null : id);
  };

  // Scroll to application form
  const scrollToApplicationForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <div className="p-6 flex-1">
          {/* Hero section */}
          <div className="bg-student-purple text-white mb-8 rounded-xl overflow-hidden">
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-6 md:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Inspiration Zone</h1>
                <p className="text-lg mb-6 max-w-2xl">
                  Listen to inspiring stories from students, mentors, and startup founders who have walked the path before you. Learn from their experiences and get inspired.
                </p>
                <div className="flex gap-4">
                  <Button variant="secondary" className="bg-white text-student-purple hover:bg-gray-100">
                    <Headphones className="mr-2 h-4 w-4" />
                    Latest Episodes
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/20"
                    onClick={scrollToApplicationForm}
                  >
                    <Mic className="mr-2 h-4 w-4" />
                    Apply to Share
                  </Button>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="bg-white/20 p-4 rounded-full h-40 w-40 flex items-center justify-center">
                  <Mic className="h-20 w-20" />
                </div>
              </div>
            </div>
          </div>

          {/* Category filter */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Browse by Category</h2>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={activeCategory === null ? "default" : "outline"}
                onClick={() => setActiveCategory(null)}
              >
                All
              </Button>
              <Button 
                variant={activeCategory === "Student Stars" ? "default" : "outline"}
                onClick={() => setActiveCategory("Student Stars")}
              >
                Student Stars
              </Button>
              <Button 
                variant={activeCategory === "Mentor Minds" ? "default" : "outline"}
                onClick={() => setActiveCategory("Mentor Minds")}
              >
                Mentor Minds
              </Button>
              <Button 
                variant={activeCategory === "Startup Stories" ? "default" : "outline"}
                onClick={() => setActiveCategory("Startup Stories")}
              >
                Startup Stories
              </Button>
            </div>
          </div>

          {/* Podcast grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPodcasts.map(podcast => (
              <PodcastCard
                key={podcast.id}
                {...podcast}
                isPlaying={playing === podcast.id}
                onPlayToggle={togglePlayback}
              />
            ))}
          </div>

          {/* Application form */}
          <div id="application-form">
            <PodcastApplicationForm />
          </div>
        </div>
      </div>
      
      <MobileNav />
    </div>
  );
};

export default Podcast;
