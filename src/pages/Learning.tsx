
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, BookOpen, Briefcase, MessageSquare, Globe, Users, } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import MobileNav from '@/components/MobileNav';

const Learning = () => {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen max-h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto pb-16 md:pb-0 px-4 md:px-8">
          <div className="max-w-6xl mx-auto py-6">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Learning & Opportunities</h1>
              <p className="text-gray-500">Boost your career with courses, internships, and connections</p>
            </div>
            
            <Tabs defaultValue="courses" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="courses" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Courses</span>
                </TabsTrigger>
                <TabsTrigger value="internships" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span className="hidden sm:inline">Internships</span>
                </TabsTrigger>
                <TabsTrigger value="community" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="hidden sm:inline">Community</span>
                </TabsTrigger>
              </TabsList>
              
              {/* Courses Tab */}
              <TabsContent value="courses">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Recommended Courses</h2>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input placeholder="Search courses..." className="pl-10 w-full md:w-[260px]" />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </TabsContent>
              
              {/* Internships Tab */}
              <TabsContent value="internships">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Internship Opportunities</h2>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input placeholder="Search internships..." className="pl-10 w-full md:w-[260px]" />
                    </div>
                    <Button variant="outline" size="icon">
                      <Globe className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {internships.map((internship) => (
                    <InternshipCard key={internship.id} internship={internship} />
                  ))}
                </div>
                
                <div className="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">AI Internship Recommendations</h3>
                      <p className="text-gray-600 mb-4">Based on your project submissions and course performance, we think these opportunities would be a great fit for you.</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {aiRecommendations.map((rec, i) => (
                          <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-md border border-blue-100">
                            <img 
                              src={rec.logo} 
                              alt={rec.company} 
                              className="h-10 w-10 object-cover rounded"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm">{rec.role}</h4>
                              <p className="text-xs text-gray-500 truncate">{rec.company}</p>
                            </div>
                            <Button size="sm" variant="outline">View</Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Community Tab */}
              <TabsContent value="community">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-lg font-semibold">Learning Feed</h2>
                      <Button variant="outline" size="sm">+ Create Post</Button>
                    </div>
                    
                    <div className="space-y-6">
                      {communityPosts.map((post) => (
                        <CommunityPostCard key={post.id} post={post} />
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1 space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Study Groups</CardTitle>
                        <CardDescription>Join others with similar interests</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {studyGroups.map((group) => (
                          <div key={group.id} className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                                {group.icon}
                              </div>
                              <div>
                                <p className="font-medium text-sm">{group.name}</p>
                                <p className="text-xs text-gray-500">{group.members} members</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">Join</Button>
                          </div>
                        ))}
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">View All Groups</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Messages</CardTitle>
                        <CardDescription>Recent conversations</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {messages.map((message) => (
                          <div key={message.id} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                              <span>{message.sender.charAt(0)}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm">{message.sender}</p>
                              <p className="text-xs text-gray-500 truncate">{message.preview}</p>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-xs text-gray-500">{message.time}</span>
                              {message.unread && (
                                <span className="w-2 h-2 bg-student-purple rounded-full"></span>
                              )}
                            </div>
                          </div>
                        ))}
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">Open Messages</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        <MobileNav />
      </div>
    </div>
  );
};

// Card Components
const CourseCard = ({ course }) => (
  <Card className="overflow-hidden h-full flex flex-col">
    <div className="aspect-video w-full overflow-hidden">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-full object-cover"
      />
    </div>
    <CardHeader className="pb-2">
      <div className="flex justify-between">
        <Badge variant={course.free ? "outline" : "default"}>
          {course.free ? 'Free' : `$${course.price}`}
        </Badge>
        <Badge variant="secondary">{course.level}</Badge>
      </div>
      <CardTitle className="text-lg">{course.title}</CardTitle>
      <CardDescription className="line-clamp-2">{course.description}</CardDescription>
    </CardHeader>
    <CardContent className="pb-2 pt-0">
      <div className="flex items-center gap-2 text-sm">
        <span className="font-medium">By:</span>
        <span className="text-gray-600">{course.instructor}</span>
      </div>
      <div className="mt-2 flex items-center text-sm">
        <span>{course.duration} • {course.lessons} lessons</span>
      </div>
    </CardContent>
    <CardFooter className="mt-auto">
      <Button className="w-full">Enroll Now</Button>
    </CardFooter>
  </Card>
);

const InternshipCard = ({ internship }) => (
  <Card className="overflow-hidden">
    <CardHeader className="pb-2">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center overflow-hidden">
            <img 
              src={internship.companyLogo} 
              alt={internship.company} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <CardTitle className="text-lg">{internship.title}</CardTitle>
            <CardDescription>{internship.company}</CardDescription>
          </div>
        </div>
        <Badge>{internship.type}</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        {internship.skills.map((skill, i) => (
          <Badge key={i} variant="outline">{skill}</Badge>
        ))}
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-gray-500" />
          <span>{internship.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-gray-500" />
          <span>{internship.duration}</span>
        </div>
        <p className="text-gray-600 mt-2 line-clamp-2">{internship.description}</p>
      </div>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline">Save</Button>
      <Button>Apply Now</Button>
    </CardFooter>
  </Card>
);

const CommunityPostCard = ({ post }) => (
  <Card>
    <CardHeader className="pb-2">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
          <span>{post.author.charAt(0)}</span>
        </div>
        <div>
          <p className="font-medium text-sm">{post.author}</p>
          <p className="text-xs text-gray-500">{post.time}</p>
        </div>
      </div>
    </CardHeader>
    <CardContent className="pb-2">
      <p className="mb-4">{post.content}</p>
      {post.image && (
        <div className="rounded-md overflow-hidden">
          <img
            src={post.image}
            alt="Post"
            className="w-full object-cover"
          />
        </div>
      )}
      <div className="flex gap-4 mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <button>❤️</button> {post.likes}
        </div>
        <div className="flex items-center gap-1">
          <button>💬</button> {post.comments}
        </div>
        <div className="flex items-center gap-1">
          <button>🔖</button> {post.bookmarks}
        </div>
      </div>
    </CardContent>
  </Card>
);

// Sample data
const courses = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    description: "Learn the fundamentals of machine learning and AI with practical examples and projects.",
    instructor: "Dr. Sarah Chen",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=600&q=80",
    price: 49.99,
    free: false,
    level: "Beginner",
    duration: "8 weeks",
    lessons: 24
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    description: "Comprehensive full-stack development course covering HTML, CSS, JavaScript, React, and Node.js.",
    instructor: "Michael Johnson",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=600&q=80",
    price: 0,
    free: true,
    level: "Intermediate",
    duration: "12 weeks",
    lessons: 36
  },
  {
    id: 3,
    title: "Data Science and Analytics",
    description: "Master data visualization, analysis, and interpretation techniques for real-world applications.",
    instructor: "Prof. Raj Patel",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
    price: 79.99,
    free: false,
    level: "Advanced",
    duration: "10 weeks",
    lessons: 30
  },
  {
    id: 4,
    title: "UX/UI Design Fundamentals",
    description: "Learn design thinking, wireframing, prototyping, and user research for creating compelling digital experiences.",
    instructor: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80",
    price: 59.99,
    free: false,
    level: "Beginner",
    duration: "6 weeks",
    lessons: 18
  },
  {
    id: 5,
    title: "Python for Beginners",
    description: "Start your programming journey with Python, from basics to advanced concepts with practical projects.",
    instructor: "Alex Thompson",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=80",
    price: 0,
    free: true,
    level: "Beginner",
    duration: "4 weeks",
    lessons: 16
  },
  {
    id: 6,
    title: "Digital Marketing Masterclass",
    description: "Comprehensive guide to SEO, social media marketing, content strategy, and paid advertising.",
    instructor: "Sophia Martinez",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f114?auto=format&fit=crop&w=600&q=80",
    price: 69.99,
    free: false,
    level: "Intermediate",
    duration: "8 weeks",
    lessons: 24
  }
];

const internships = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "TechMind Solutions",
    companyLogo: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?auto=format&fit=crop&w=100&h=100&q=80",
    location: "Remote (US)",
    type: "Paid",
    duration: "3 months",
    skills: ["Python", "React", "Node.js"],
    description: "Join our engineering team to build cutting-edge web applications and gain experience with modern development practices."
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "Analytics Pro",
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100&q=80",
    location: "New York, USA",
    type: "Paid",
    duration: "6 months",
    skills: ["Python", "Machine Learning", "SQL"],
    description: "Work on real-world data science projects, applying ML algorithms to solve business problems."
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    company: "Creative Solutions",
    companyLogo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=100&h=100&q=80",
    location: "London, UK",
    type: "Paid",
    duration: "4 months",
    skills: ["Figma", "UI Design", "Prototyping"],
    description: "Help design user-centered interfaces for our digital products and participate in user research sessions."
  },
  {
    id: 4,
    title: "Marketing Assistant",
    company: "Global Brands Inc",
    companyLogo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=100&h=100&q=80",
    location: "Remote (Worldwide)",
    type: "Unpaid",
    duration: "3 months",
    skills: ["Content Creation", "Social Media", "SEO"],
    description: "Gain experience in digital marketing strategies while working with global brands on their campaigns."
  }
];

const aiRecommendations = [
  {
    role: "Frontend Developer Intern",
    company: "WebTech Solutions",
    logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    role: "Machine Learning Intern",
    company: "AI Innovations",
    logo: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=100&h=100&q=80"
  }
];

const communityPosts = [
  {
    id: 1,
    author: "Alex Johnson",
    time: "2 hours ago",
    content: "Just completed my AI project using TensorFlow! Really happy with the results. Anyone else working on ML projects right now? Would love to connect and share insights.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    likes: 42,
    comments: 8,
    bookmarks: 5
  },
  {
    id: 2,
    author: "Emma Wilson",
    time: "Yesterday",
    content: "Sharing my latest design portfolio. Looking for summer internship opportunities in UX/UI design. Open to feedback! #DesignStudent #UXDesign",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80",
    likes: 78,
    comments: 15,
    bookmarks: 12
  },
  {
    id: 3,
    author: "Michael Chen",
    time: "3 days ago",
    content: "Just published my research paper on predictive analytics in healthcare. Check it out and let me know your thoughts!",
    image: null,
    likes: 64,
    comments: 23,
    bookmarks: 18
  }
];

const studyGroups = [
  {
    id: 1,
    name: "Machine Learning Study Group",
    members: 128,
    icon: "🤖"
  },
  {
    id: 2,
    name: "Web Development Club",
    members: 94,
    icon: "💻"
  },
  {
    id: 3,
    name: "Data Science Network",
    members: 156,
    icon: "📊"
  }
];

const messages = [
  {
    id: 1,
    sender: "Sarah Miller",
    preview: "Hey, did you finish the assignment?",
    time: "12:45 PM",
    unread: true
  },
  {
    id: 2,
    sender: "Project Team",
    preview: "Kevin: I've uploaded the final design",
    time: "Yesterday",
    unread: false
  },
  {
    id: 3,
    sender: "Dr. Thompson",
    preview: "Here's the resource I mentioned in class",
    time: "Mon",
    unread: true
  }
];

export default Learning;
