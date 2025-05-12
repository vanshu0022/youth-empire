
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Star, Trophy } from 'lucide-react';

const Highlights = () => {
  const [activeTab, setActiveTab] = useState("solved-problems");

  // Sample data for solved problems
  const solvedProblems = [
    {
      id: 1,
      title: "AI-Based Supply Chain Optimization",
      company: "Amazon",
      student: {
        name: "Emma Wilson",
        avatar: "EW",
        photo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
        university: "MIT"
      },
      description: "Developed an algorithm that reduced delivery time by 23% while optimizing resource allocation.",
      tags: ["Machine Learning", "Operations Research", "Python"],
      likes: 128,
      date: "May 1, 2025"
    },
    {
      id: 2,
      title: "Carbon Footprint Reduction System",
      company: "Tesla",
      student: {
        name: "Michael Chen",
        avatar: "MC",
        photo: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80",
        university: "Stanford"
      },
      description: "Created a real-time monitoring system that helped reduce manufacturing carbon emissions by 17%.",
      tags: ["IoT", "Sustainability", "Data Analytics"],
      likes: 95,
      date: "April 22, 2025"
    },
    {
      id: 3,
      title: "Neural Network for Medical Diagnosis",
      company: "Johnson & Johnson",
      student: {
        name: "Sarah Patel",
        avatar: "SP",
        photo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
        university: "Harvard"
      },
      description: "Built a diagnostic tool that improved early detection rates of three types of cancer by 31%.",
      tags: ["Healthcare", "Deep Learning", "Bioinformatics"],
      likes: 201,
      date: "April 15, 2025"
    },
  ];

  // Sample data for creative projects
  const creativeProjects = [
    {
      id: 1,
      title: "SoundScape: Audio Environment Generator",
      student: {
        name: "James Rodriguez",
        avatar: "JR",
        photo: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80",
        university: "CalTech"
      },
      description: "A breakthrough audio platform that creates immersive 3D soundscapes for VR environments, winning the International Design Excellence Award.",
      achievement: "International Design Excellence Award Winner",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80",
      tags: ["Virtual Reality", "Audio Engineering", "UX Design"],
      likes: 354,
      date: "March 12, 2025"
    },
    {
      id: 2,
      title: "BioDegradable Packaging Alternative",
      student: {
        name: "Aisha Kwame",
        avatar: "AK",
        photo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
        university: "Oxford"
      },
      description: "Developed a cost-effective biodegradable packaging material from agricultural waste that decomposes in just 30 days.",
      achievement: "National Science Foundation Innovation Award",
      image: "https://images.unsplash.com/photo-1610510341380-ff902d8e7c52?auto=format&fit=crop&w=600&q=80",
      tags: ["Sustainability", "Material Science", "Green Technology"],
      likes: 278,
      date: "February 28, 2025"
    },
    {
      id: 3,
      title: "Portable Water Purification System",
      student: {
        name: "David Kim",
        avatar: "DK",
        photo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
        university: "UCLA"
      },
      description: "Created a solar-powered water purification device that can produce 5 gallons of clean water per day for disaster relief situations.",
      achievement: "Featured in National Geographic",
      image: "https://images.unsplash.com/photo-1581244277943-fe4d9aa3faeb?auto=format&fit=crop&w=600&q=80",
      tags: ["Humanitarian Tech", "Engineering", "Renewable Energy"],
      likes: 412,
      date: "February 10, 2025"
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 bg-student-purple/10 rounded-full flex items-center justify-center mr-4">
          <Trophy size={20} className="text-student-purple" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Student Highlights</h1>
          <p className="text-gray-600">Celebrating outstanding achievements and innovative solutions</p>
        </div>
      </div>

      <Tabs defaultValue="solved-problems" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="solved-problems">
            <Star size={16} className="mr-2" />
            Solved Problems
          </TabsTrigger>
          <TabsTrigger value="wall-of-fame">
            <Award size={16} className="mr-2" />
            Wall of Fame
          </TabsTrigger>
        </TabsList>

        <TabsContent value="solved-problems" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solvedProblems.map((problem) => (
              <Card key={problem.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <div className="h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
                    <Avatar className="h-32 w-32">
                      <AvatarImage src={problem.student.photo} alt={problem.student.name} />
                      <AvatarFallback className="bg-student-purple/20 text-2xl">
                        {problem.student.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Badge 
                    variant="outline" 
                    className="absolute top-3 right-3 bg-student-purple/10 text-student-purple border-student-purple/20"
                  >
                    <Star size={12} className="mr-1" /> Solved
                  </Badge>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle>{problem.title}</CardTitle>
                  <CardDescription className="mt-1">Problem by {problem.company}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{problem.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {problem.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="border-t pt-4">
                  <div className="flex items-center">
                    <div className="ml-0">
                      <p className="text-sm font-medium">{problem.student.name}</p>
                      <p className="text-xs text-gray-500">{problem.student.university}</p>
                    </div>
                    <div className="ml-auto text-xs text-gray-500">{problem.date}</div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="wall-of-fame" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {creativeProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <div className="h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <Avatar className="h-24 w-24 border-2 border-white mx-auto">
                      <AvatarImage src={project.student.photo} alt={project.student.name} />
                      <AvatarFallback className="bg-student-coral/20 text-xl">
                        {project.student.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                  <Badge className="bg-student-coral text-white border-student-coral/20 mt-1 inline-flex">
                    <Award size={12} className="mr-1" /> {project.achievement}
                  </Badge>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="border-t pt-4">
                  <div className="flex items-center">
                    <div className="ml-0">
                      <p className="text-sm font-medium">{project.student.name}</p>
                      <p className="text-xs text-gray-500">{project.student.university}</p>
                    </div>
                    <div className="ml-auto text-xs text-gray-500">{project.date}</div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Highlights;
