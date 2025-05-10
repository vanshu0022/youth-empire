
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Lock, File, Upload, Eye, Download } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "AI Chatbot Assistant",
      description: "A machine learning powered chatbot that can answer questions about your school's curriculum.",
      tags: ["Python", "Machine Learning", "NLP"],
      visibility: "private",
      type: "code",
      createdAt: "2 weeks ago"
    },
    {
      id: 2,
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform with payment integration and inventory management.",
      tags: ["React", "Node.js", "MongoDB"],
      visibility: "companies",
      type: "code",
      createdAt: "1 month ago"
    },
    {
      id: 3,
      title: "Mobile App UI Design",
      description: "UI/UX design for a fitness tracking mobile application with dark and light themes.",
      tags: ["UI/UX", "Figma", "Mobile"],
      visibility: "public",
      type: "design",
      createdAt: "3 days ago"
    }
  ]);
  
  const [activeTab, setActiveTab] = useState("my-projects");

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen max-h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto pb-16 md:pb-0 p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-student-purple">Projects</h1>
              <Button className="bg-student-purple hover:bg-student-purple/90">
                <Upload className="mr-2 h-4 w-4" /> Upload Project
              </Button>
            </div>
            
            <Tabs defaultValue="my-projects" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="my-projects">My Projects</TabsTrigger>
                <TabsTrigger value="upload">Upload New Project</TabsTrigger>
                <TabsTrigger value="discover">Discover</TabsTrigger>
              </TabsList>
              
              <TabsContent value="my-projects" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projects.map(project => (
                    <Card key={project.id} className="overflow-hidden">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription className="text-xs text-gray-500 mt-1">
                              Added {project.createdAt}
                            </CardDescription>
                          </div>
                          <div className="flex items-center">
                            {project.visibility === "private" && (
                              <div className="bg-gray-100 rounded-full px-2 py-1 text-xs flex items-center">
                                <Lock className="h-3 w-3 mr-1" /> Private
                              </div>
                            )}
                            {project.visibility === "companies" && (
                              <div className="bg-blue-100 text-blue-800 rounded-full px-2 py-1 text-xs flex items-center">
                                <Eye className="h-3 w-3 mr-1" /> Company View
                              </div>
                            )}
                            {project.visibility === "public" && (
                              <div className="bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs flex items-center">
                                <Eye className="h-3 w-3 mr-1" /> Public
                              </div>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <p className="text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className="bg-student-purple/10 text-student-purple text-xs px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between pt-3 border-t">
                        <Button variant="outline" size="sm" className="text-xs">
                          <Eye className="h-3 w-3 mr-1" /> View
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs" 
                          disabled={project.visibility !== "public"}
                          title={project.visibility !== "public" ? "Only available to companies or owner" : "Download project"}
                        >
                          <Download className="h-3 w-3 mr-1" /> Download
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="upload" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Upload New Project</CardTitle>
                    <CardDescription>
                      Share your work with companies and potential employers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Project Title</Label>
                        <Input id="title" placeholder="Enter project title" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea 
                          id="description" 
                          placeholder="Describe your project in detail..." 
                          className="min-h-32"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tags">Tags (comma separated)</Label>
                        <Input 
                          id="tags" 
                          placeholder="React, TypeScript, UI/UX..." 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Project Visibility</Label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          <div className="flex items-center border rounded-lg p-3 cursor-pointer hover:bg-gray-50">
                            <input 
                              type="radio" 
                              id="visibility-private" 
                              name="visibility" 
                              value="private" 
                              className="mr-2" 
                              defaultChecked 
                            />
                            <Label htmlFor="visibility-private" className="cursor-pointer flex items-center">
                              <Lock className="h-4 w-4 mr-2" /> Private (Only you)
                            </Label>
                          </div>
                          <div className="flex items-center border rounded-lg p-3 cursor-pointer hover:bg-gray-50">
                            <input 
                              type="radio" 
                              id="visibility-companies" 
                              name="visibility" 
                              value="companies" 
                              className="mr-2" 
                            />
                            <Label htmlFor="visibility-companies" className="cursor-pointer flex items-center">
                              <Eye className="h-4 w-4 mr-2" /> Companies Only
                            </Label>
                          </div>
                          <div className="flex items-center border rounded-lg p-3 cursor-pointer hover:bg-gray-50">
                            <input 
                              type="radio" 
                              id="visibility-public" 
                              name="visibility" 
                              value="public" 
                              className="mr-2" 
                            />
                            <Label htmlFor="visibility-public" className="cursor-pointer flex items-center">
                              <Eye className="h-4 w-4 mr-2" /> Public
                            </Label>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Upload Files</Label>
                        <div className="border-2 border-dashed rounded-lg p-8 text-center">
                          <div className="flex flex-col items-center">
                            <Upload className="h-10 w-10 text-gray-400 mb-2" />
                            <p className="text-sm text-gray-500 mb-2">Drag and drop files here, or click to browse</p>
                            <p className="text-xs text-gray-400">Supports code, PDF, video, or image files (max 100MB)</p>
                            <Button variant="outline" className="mt-4">
                              Select Files
                            </Button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-student-purple hover:bg-student-purple/90">Upload Project</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="discover" className="space-y-4">
                <Card className="p-8 text-center">
                  <CardHeader>
                    <CardTitle>Discover Projects</CardTitle>
                    <CardDescription>
                      Find inspiration by browsing publicly shared projects
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 mb-4">
                      This feature will be available soon. Stay tuned!
                    </p>
                    <div className="flex justify-center">
                      <Button variant="outline">Get Notified</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
};

export default Projects;
