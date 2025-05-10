
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Heart, MessageCircle, Bookmark, Share2 } from 'lucide-react';

const Feed = () => {
  // Dummy data for posts
  const posts = [
    {
      id: 1,
      user: {
        name: 'John Smith',
        avatar: 'JS',
        role: 'Computer Science Student'
      },
      content: {
        text: "Just completed my AI project using TensorFlow! 🧠 Really happy with the results.",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
      },
      likes: 42,
      comments: 8,
      time: '2 hours ago'
    },
    {
      id: 2,
      user: {
        name: 'Emma Wilson',
        avatar: 'EW',
        role: 'UX Design Student'
      },
      content: {
        text: "Sharing my latest design portfolio. Looking for summer internship opportunities in UX/UI design. Open to feedback! #DesignStudent #UXDesign",
        image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80"
      },
      likes: 78,
      comments: 15,
      time: '5 hours ago'
    },
    {
      id: 3,
      user: {
        name: 'Michael Chen',
        avatar: 'MC',
        role: 'Data Science Major'
      },
      content: {
        text: "Just published my research paper on predictive analytics in healthcare. Check it out and let me know your thoughts!",
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
      },
      likes: 64,
      comments: 23,
      time: '1 day ago'
    }
  ];

  return (
    <div className="max-w-xl mx-auto py-6 px-4">
      {/* Stories/Highlights Row */}
      <div className="flex space-x-4 overflow-x-auto pb-4 mb-6">
        {Array.from({length: 6}).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-student-purple to-student-coral p-[2px]">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-sm font-semibold">{String.fromCharCode(65 + i)}</span>
              </div>
            </div>
            <span className="text-xs mt-1">Story {i+1}</span>
          </div>
        ))}
      </div>
      
      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map(post => (
          <Card key={post.id} className="border shadow-sm overflow-hidden">
            <CardHeader className="p-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-student-purple/20 flex items-center justify-center">
                  <span className="font-medium text-student-purple">{post.user.avatar}</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-sm">{post.user.name}</p>
                  <p className="text-xs text-gray-500">{post.user.role}</p>
                </div>
                <div className="ml-auto">
                  <button className="text-gray-500">•••</button>
                </div>
              </div>
            </CardHeader>
            
            <div className="aspect-video w-full overflow-hidden">
              <img src={post.content.image} alt="Post content" className="w-full h-full object-cover" />
            </div>
            
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-1">
                    <Heart className="h-6 w-6" />
                  </button>
                  <button className="flex items-center space-x-1">
                    <MessageCircle className="h-6 w-6" />
                  </button>
                  <button className="flex items-center space-x-1">
                    <Share2 className="h-6 w-6" />
                  </button>
                </div>
                <button>
                  <Bookmark className="h-6 w-6" />
                </button>
              </div>
              
              <p className="font-medium text-sm">{post.likes} likes</p>
              <div className="mt-2">
                <span className="font-medium text-sm">{post.user.name}</span>{' '}
                <span className="text-sm">{post.content.text}</span>
              </div>
              
              <button className="text-gray-500 text-sm mt-1">View all {post.comments} comments</button>
              <p className="text-gray-400 text-xs mt-1">{post.time}</p>
            </CardContent>
            
            <CardFooter className="p-4 pt-0 border-t">
              <input 
                type="text" 
                placeholder="Add a comment..." 
                className="w-full text-sm bg-transparent border-none outline-none"
              />
              <button className="text-student-purple font-medium text-sm ml-2">Post</button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Create Post Button (Fixed) */}
      <div className="fixed bottom-20 right-6 md:bottom-6">
        <button className="w-14 h-14 rounded-full bg-student-purple shadow-lg flex items-center justify-center text-white">
          <span className="text-2xl">+</span>
        </button>
      </div>
    </div>
  );
};

export default Feed;
