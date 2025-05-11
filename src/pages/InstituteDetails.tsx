import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, Mail, Globe, MapPin, Star, Info, BarChart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { institutes } from '../data/institutes';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';

const InstituteDetails = () => {
  const { id } = useParams<{ id: string }>();
  const institute = institutes.find(inst => inst.id === id);
  
  if (!institute) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="p-6 flex-1 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Institute Not Found</h2>
              <p className="mb-6">The institute you're looking for does not exist or has been removed.</p>
              <Link to="/institutes">
                <Button>Back to Institutes</Button>
              </Link>
            </div>
          </div>
        </div>
        <MobileNav />
      </div>
    );
  }
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <div className="p-6 flex-1">
          <div className="mb-6 flex flex-col md:flex-row items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap gap-2 items-center mb-2">
                <h1 className="text-2xl font-bold">{institute.name}</h1>
                <div className="px-2 py-1 bg-student-purple/10 text-student-purple rounded text-xs font-medium">
                  Rank #{institute.ranking}
                </div>
                <div className="flex items-center text-amber-500">
                  <Star size={16} className="fill-amber-500" />
                  <span className="ml-1 text-sm">{institute.rating.toFixed(1)}/5.0</span>
                </div>
              </div>
              
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin size={14} className="mr-1" />
                <span>
                  {institute.location.district}, {institute.location.state}, {institute.location.country}
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" asChild>
                <a href={`https://${institute.details.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <Globe size={16} /> Visit Website
                </a>
              </Button>
              <Button>Apply Now</Button>
            </div>
          </div>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-5 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
              <TabsTrigger value="mentors">Mentors</TabsTrigger>
              <TabsTrigger value="stats">Admission Stats</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About {institute.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{institute.details.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-500 text-sm">Established</p>
                      <p className="font-medium">{institute.details.established}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-500 text-sm">Type</p>
                      <p className="font-medium">{institute.details.type}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-500 text-sm">Total Students</p>
                      <p className="font-medium">{institute.details.totalStudents.toLocaleString()}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-500 text-sm">Acceptance Rate</p>
                      <p className="font-medium">{institute.details.acceptanceRate}</p>
                    </div>
                  </div>
                  
                  <h3 className="font-medium text-lg mt-6 mb-3">Programs Offered</h3>
                  <div className="flex flex-wrap gap-2">
                    {institute.details.courses.map((course, index) => (
                      <div key={index} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {course}
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="font-medium text-lg mt-6 mb-3">Fee Structure</h3>
                  <p className="text-gray-600">{institute.details.feeRange}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Comparison with Top Institutes</CardTitle>
                  <CardDescription>
                    See how {institute.name} compares with other top institutes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Institute</TableHead>
                        <TableHead>Ranking</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Acceptance Rate</TableHead>
                        <TableHead>Fee Range</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {institutes.slice(0, 4).map((inst) => (
                        <TableRow key={inst.id} className={inst.id === institute.id ? "bg-blue-50" : ""}>
                          <TableCell className="font-medium">{inst.name}</TableCell>
                          <TableCell>#{inst.ranking}</TableCell>
                          <TableCell>{inst.rating}</TableCell>
                          <TableCell>{inst.details.acceptanceRate}</TableCell>
                          <TableCell>{inst.details.feeRange}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="faqs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Common questions about {institute.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {institute.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="mentors" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Connected Mentors</CardTitle>
                  <CardDescription>
                    Meet professors and mentors from {institute.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {institute.mentors.map((mentor) => (
                      <div key={mentor.id} className="flex items-center p-4 border rounded-lg">
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                          <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium">{mentor.name}</h4>
                          <p className="text-sm text-gray-500">{mentor.position}</p>
                          <Button variant="link" className="p-0 h-auto text-student-purple">
                            Connect
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="stats" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Admission Statistics</CardTitle>
                  <CardDescription>
                    Latest admission statistics for {institute.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-gray-500 text-sm">Total Applicants</p>
                      <p className="font-medium text-2xl">{institute.admissionStats.applicants.toLocaleString()}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-gray-500 text-sm">Accepted</p>
                      <p className="font-medium text-2xl">{institute.admissionStats.accepted.toLocaleString()}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-gray-500 text-sm">Enrolled</p>
                      <p className="font-medium text-2xl">{institute.admissionStats.enrolled.toLocaleString()}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-gray-500 text-sm">Average GPA</p>
                      <p className="font-medium text-2xl">{institute.admissionStats.averageGPA}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <BarChart className="h-24 w-24 mx-auto text-student-purple mb-4" />
                      <p className="text-sm text-gray-500">
                        Acceptance Rate: <span className="font-medium">{institute.details.acceptanceRate}</span>
                      </p>
                      <p className="mt-4 text-gray-600">
                        {institute.name} is highly selective with an acceptance rate of {institute.details.acceptanceRate}.
                        This means out of {institute.admissionStats.applicants.toLocaleString()} applicants,
                        only {institute.admissionStats.accepted.toLocaleString()} were accepted.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="contact" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Get in touch with {institute.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 text-student-purple" />
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p>{institute.contact.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 text-student-purple" />
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p>{institute.contact.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 text-student-purple" />
                        <div>
                          <p className="text-sm text-gray-500">Address</p>
                          <p>{institute.contact.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 mr-3 text-student-purple" />
                        <div>
                          <p className="text-sm text-gray-500">Website</p>
                          <a 
                            href={`https://${institute.details.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-student-purple hover:underline"
                          >
                            {institute.details.website}
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-100 rounded-lg p-6">
                      <h3 className="font-medium mb-4">Direct Contact</h3>
                      <form className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm mb-1">Your Name</label>
                          <input
                            type="text"
                            id="name"
                            className="w-full p-2 border rounded-md"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm mb-1">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            className="w-full p-2 border rounded-md"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm mb-1">Message</label>
                          <textarea
                            id="message"
                            rows={4}
                            className="w-full p-2 border rounded-md"
                            placeholder="Your inquiry or message"
                          ></textarea>
                        </div>
                        <Button type="submit" className="w-full">Send Message</Button>
                      </form>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <MobileNav />
    </div>
  );
};

export default InstituteDetails;
