
import React from 'react';
import { Calendar, Briefcase, Award, Search, Heart, MessageSquare } from 'lucide-react';

const Dashboard = () => {
  // Dummy data for projects
  const featuredProjects = [
    { 
      id: 1, 
      title: "AI-Powered Study Assistant",
      description: "An intelligent study companion that helps students organize notes and prepare for exams.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      likes: 28,
      category: "AI & Machine Learning"
    },
    { 
      id: 2, 
      title: "EcoTrack: Sustainability Tracker",
      description: "Mobile app to track and reduce your carbon footprint with personalized recommendations.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
      likes: 42,
      category: "Mobile Development"
    },
    { 
      id: 3, 
      title: "Virtual Reality Campus Tour",
      description: "Explore university campuses from anywhere in the world through immersive VR experiences.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80",
      likes: 19,
      category: "Virtual Reality"
    }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John!</h1>
          <p className="text-gray-600">Track your progress and explore new opportunities.</p>
        </div>
        <div className="hidden md:block">
          <button className="btn-primary">Explore Opportunities</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="feature-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Projects</h3>
            <div className="w-10 h-10 bg-student-purple/10 rounded-full flex items-center justify-center">
              <Briefcase size={20} className="text-student-purple" />
            </div>
          </div>
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-gray-500">3 recently updated</p>
        </div>

        <div className="feature-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Opportunities</h3>
            <div className="w-10 h-10 bg-student-coral/10 rounded-full flex items-center justify-center">
              <Heart size={20} className="text-student-coral" />
            </div>
          </div>
          <p className="text-3xl font-bold">8</p>
          <p className="text-sm text-gray-500">5 new matches</p>
        </div>

        <div className="feature-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Mentorship</h3>
            <div className="w-10 h-10 bg-student-teal/10 rounded-full flex items-center justify-center">
              <Award size={20} className="text-student-teal" />
            </div>
          </div>
          <p className="text-3xl font-bold">2</p>
          <p className="text-sm text-gray-500">1 session today</p>
        </div>

        <div className="feature-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Messages</h3>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageSquare size={20} className="text-blue-500" />
            </div>
          </div>
          <p className="text-3xl font-bold">5</p>
          <p className="text-sm text-gray-500">3 unread messages</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <a href="#" className="text-student-purple text-sm">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-student-purple bg-student-purple/10 px-2 py-1 rounded-full">{project.category}</span>
                <h3 className="font-semibold mt-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Heart size={16} className="mr-1" />
                    <span>{project.likes}</span>
                  </div>
                  <button className="text-student-purple text-sm font-medium">View Project</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recommended Opportunities</h2>
          <a href="#" className="text-student-purple text-sm">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                <span className="font-semibold text-gray-500">MS</span>
              </div>
              <div className="ml-3 flex-1">
                <h3 className="font-semibold">Data Science Intern</h3>
                <p className="text-sm text-gray-500">Microsoft</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-sm text-gray-600">Remote opportunity for students interested in data analysis and machine learning.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Python</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Data Analysis</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Machine Learning</span>
              </div>
              <button className="w-full mt-4 py-2 bg-student-purple text-white rounded-md hover:bg-student-purple/90 transition-colors">Apply Now</button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                <span className="font-semibold text-gray-500">GL</span>
              </div>
              <div className="ml-3 flex-1">
                <h3 className="font-semibold">Frontend Developer</h3>
                <p className="text-sm text-gray-500">Google</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-sm text-gray-600">Join our team to develop responsive and intuitive user interfaces.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">React</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">TypeScript</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">UI/UX</span>
              </div>
              <button className="w-full mt-4 py-2 bg-student-purple text-white rounded-md hover:bg-student-purple/90 transition-colors">Apply Now</button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                <span className="font-semibold text-gray-500">FB</span>
              </div>
              <div className="ml-3 flex-1">
                <h3 className="font-semibold">UX Research Intern</h3>
                <p className="text-sm text-gray-500">Facebook</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-sm text-gray-600">Help shape user experiences through research and usability testing.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">User Research</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Prototyping</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Design Thinking</span>
              </div>
              <button className="w-full mt-4 py-2 bg-student-purple text-white rounded-md hover:bg-student-purple/90 transition-colors">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
