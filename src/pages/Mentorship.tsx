
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, MessageCircle, Calendar, GraduationCap } from 'lucide-react';

const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    avatar: "https://i.pravatar.cc/150?img=32",
    role: "Professor of Computer Science",
    university: "Stanford University",
    country: "USA",
    expertise: ["AI/ML", "Computer Vision", "Data Science"],
    rating: 4.9,
    reviews: 127,
    fee: "$45/hour",
    mentorshipAreas: ["Post-graduation job prep", "Research guidance"],
    bio: "Dr. Johnson has over 15 years of experience in AI research and has mentored hundreds of students who now work at top tech companies."
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    avatar: "https://i.pravatar.cc/150?img=11",
    role: "Associate Professor of Business",
    university: "Harvard Business School",
    country: "USA",
    expertise: ["Entrepreneurship", "Business Strategy", "Venture Capital"],
    rating: 4.8,
    reviews: 94,
    fee: "$60/hour",
    mentorshipAreas: ["Startup mentorship", "Funding guidance"],
    bio: "Prof. Chen has helped launch over 30 successful startups and has extensive connections in the venture capital world."
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    avatar: "https://i.pravatar.cc/150?img=20",
    role: "Career Counselor",
    university: "Delhi University",
    country: "India",
    expertise: ["Career Planning", "College Admissions", "Skill Development"],
    rating: 4.9,
    reviews: 156,
    fee: "$35/hour",
    mentorshipAreas: ["Career guidance for 12th graders", "College selection"],
    bio: "Dr. Sharma specializes in helping high school students make informed career and college choices based on their strengths and interests."
  },
  {
    id: 4,
    name: "James Wilson",
    avatar: "https://i.pravatar.cc/150?img=59",
    role: "Senior Engineering Manager",
    university: "Google",
    country: "UK",
    expertise: ["Software Engineering", "Tech Leadership", "System Design"],
    rating: 4.7,
    reviews: 88,
    fee: "$55/hour",
    mentorshipAreas: ["Post-graduation job prep", "Tech interview preparation"],
    bio: "With 12+ years at Google, James has interviewed hundreds of candidates and knows exactly what top tech companies look for."
  }
];

const MentorshipTypes = [
  {
    title: "Career Guidance",
    description: "For 12th graders planning their future education and career paths",
    icon: GraduationCap
  },
  {
    title: "Startup Mentorship",
    description: "Guidance on launching and scaling your own business ventures",
    icon: MessageCircle
  },
  {
    title: "Job Preparation",
    description: "Interview prep and career advice for post-graduation job seekers",
    icon: Star
  },
  {
    title: "Funding Guidance",
    description: "Help navigating the process of securing funding for projects",
    icon: Calendar
  }
];

const Mentorship = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [filters, setFilters] = useState({
    country: "all",
    university: "all",
    expertise: "all"
  });
  const [aiMessage, setAiMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { sender: "ai", message: "👋 Hi there! I'm your AI mentor. How can I help you today? I can guide you with career choices, learning paths, or connect you with human mentors." }
  ]);

  const handleSendMessage = () => {
    if (aiMessage.trim()) {
      // Add user message to chat
      setChatMessages([...chatMessages, { sender: "user", message: aiMessage }]);
      
      // Simulate AI response
      setTimeout(() => {
        setChatMessages(prevMessages => [
          ...prevMessages, 
          { sender: "ai", message: "Thanks for your message! I'm a demo AI mentor. In the full implementation, I would provide personalized guidance based on your query. Would you like me to connect you with a human mentor who specializes in this area?" }
        ]);
      }, 1000);
      
      setAiMessage("");
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Apply filters to mentors list
  const filteredMentors = mentors.filter(mentor => {
    return (
      (filters.country === "all" || mentor.country === filters.country) &&
      (filters.university === "all" || mentor.university === filters.university) &&
      (filters.expertise === "all" || mentor.expertise.includes(filters.expertise))
    );
  });

  const handleMentorClick = (mentor) => {
    setSelectedMentor(mentor);
  };

  const handleCloseProfile = () => {
    setSelectedMentor(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex-1 flex flex-col min-h-screen max-h-screen overflow-hidden">
        <main className="flex-1 overflow-y-auto pb-16 md:pb-0 px-4 md:px-6 py-6">
          <h1 className="text-2xl font-bold mb-6 text-student-purple">Mentorship Guidance</h1>

          <Tabs defaultValue="mentors" className="w-full">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="mentors">Human Mentors</TabsTrigger>
              <TabsTrigger value="ai-mentor">AI Mentor Chat</TabsTrigger>
            </TabsList>

            <TabsContent value="mentors" className="space-y-6">
              {!selectedMentor ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Select onValueChange={(value) => handleFilterChange("country", value)} value={filters.country}>
                      <SelectTrigger>
                        <SelectValue placeholder="Filter by Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Countries</SelectItem>
                        <SelectItem value="USA">USA</SelectItem>
                        <SelectItem value="UK">UK</SelectItem>
                        <SelectItem value="India">India</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select onValueChange={(value) => handleFilterChange("university", value)} value={filters.university}>
                      <SelectTrigger>
                        <SelectValue placeholder="Filter by University/Company" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Institutions</SelectItem>
                        <SelectItem value="Stanford University">Stanford University</SelectItem>
                        <SelectItem value="Harvard Business School">Harvard Business School</SelectItem>
                        <SelectItem value="Delhi University">Delhi University</SelectItem>
                        <SelectItem value="Google">Google</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select onValueChange={(value) => handleFilterChange("expertise", value)} value={filters.expertise}>
                      <SelectTrigger>
                        <SelectValue placeholder="Filter by Expertise" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Expertise Areas</SelectItem>
                        <SelectItem value="AI/ML">AI/ML</SelectItem>
                        <SelectItem value="Entrepreneurship">Entrepreneurship</SelectItem>
                        <SelectItem value="Career Planning">Career Planning</SelectItem>
                        <SelectItem value="Software Engineering">Software Engineering</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMentors.map((mentor) => (
                      <Card key={mentor.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleMentorClick(mentor)}>
                        <CardHeader className="space-y-0 pb-2">
                          <div className="flex items-center">
                            <Avatar className="h-16 w-16 mr-4">
                              <AvatarImage src={mentor.avatar} />
                              <AvatarFallback>{mentor.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">{mentor.name}</CardTitle>
                              <CardDescription className="text-sm">{mentor.role}</CardDescription>
                              <div className="flex items-center text-amber-500 mt-1">
                                <Star className="h-4 w-4 fill-current mr-1" />
                                <span className="text-sm font-medium">{mentor.rating} ({mentor.reviews} reviews)</span>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm text-gray-600 mb-3">
                            <span className="font-medium">Institution:</span> {mentor.university}
                          </div>
                          <div className="text-sm text-gray-600 mb-3">
                            <span className="font-medium">Country:</span> {mentor.country}
                          </div>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {mentor.expertise.map((skill, index) => (
                              <Badge key={index} variant="outline" className="text-xs">{skill}</Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t pt-4">
                          <div className="text-sm font-medium">{mentor.fee}</div>
                          <Button size="sm" className="text-xs">View Profile</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </>
              ) : (
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Button variant="ghost" className="mb-4" onClick={handleCloseProfile}>
                    ← Back to Mentors
                  </Button>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="h-32 w-32 mb-4">
                          <AvatarImage src={selectedMentor.avatar} />
                          <AvatarFallback>{selectedMentor.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-bold">{selectedMentor.name}</h3>
                        <p className="text-gray-600">{selectedMentor.role}</p>
                        <p className="text-gray-600 mb-2">{selectedMentor.university}, {selectedMentor.country}</p>
                        <div className="flex items-center text-amber-500 mb-4">
                          <Star className="h-5 w-5 fill-current mr-1" />
                          <span className="text-lg font-medium">{selectedMentor.rating}</span>
                          <span className="text-sm text-gray-600 ml-1">({selectedMentor.reviews} reviews)</span>
                        </div>
                        <p className="text-xl font-bold text-student-purple mb-4">{selectedMentor.fee}</p>
                        <div className="space-y-3 w-full">
                          <Button className="w-full">Schedule a Call</Button>
                          <Button variant="outline" className="w-full">Message</Button>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-lg font-bold mb-2">About</h4>
                      <p className="text-gray-600 mb-6">{selectedMentor.bio}</p>
                      
                      <h4 className="text-lg font-bold mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedMentor.expertise.map((skill, index) => (
                          <Badge key={index} className="text-sm">{skill}</Badge>
                        ))}
                      </div>
                      
                      <h4 className="text-lg font-bold mb-2">Mentorship Areas</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedMentor.mentorshipAreas.map((area, index) => (
                          <Badge key={index} variant="outline" className="text-sm">{area}</Badge>
                        ))}
                      </div>
                      
                      <h4 className="text-lg font-bold mb-2">Reviews</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center mb-2">
                            <div className="text-amber-500 flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-current" />
                              ))}
                            </div>
                            <span className="text-sm font-medium ml-2">Student from MIT</span>
                          </div>
                          <p className="text-sm text-gray-600">
                            "The guidance I received was exceptional. The mentor provided clear direction for my career path and helped me prepare for interviews at top tech companies."
                          </p>
                        </div>
                        <Button variant="link" className="text-student-purple p-0">
                          View all {selectedMentor.reviews} reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="ai-mentor">
              <div className="bg-white rounded-xl shadow-sm h-[600px] flex flex-col">
                <div className="p-4 border-b">
                  <h3 className="font-bold text-lg">AI Mentor Chat</h3>
                  <p className="text-sm text-gray-500">Ask me anything about your education and career journey!</p>
                </div>
                <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-4">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div 
                        className={`max-w-[80%] p-3 rounded-lg ${
                          msg.sender === 'user' 
                            ? 'bg-student-purple text-white rounded-br-none' 
                            : 'bg-gray-100 text-gray-800 rounded-bl-none'
                        }`}
                      >
                        {msg.message}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t flex">
                  <Input 
                    value={aiMessage}
                    onChange={(e) => setAiMessage(e.target.value)}
                    placeholder="Ask your AI mentor..." 
                    className="flex-1"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage} className="ml-2">Send</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-10">
            <h2 className="text-xl font-bold mb-4">Mentorship Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {MentorshipTypes.map((type, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-student-purple/10 flex items-center justify-center mb-2">
                      <type.icon className="h-6 w-6 text-student-purple" />
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{type.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Mentorship;

