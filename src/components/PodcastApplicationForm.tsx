
import React from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export type PodcastApplicationFormValues = {
  name: string;
  email: string;
  phone: string;
  category: string;
  bio: string;
};

const PodcastApplicationForm = () => {
  const { toast } = useToast();
  
  // Setup form with react-hook-form
  const form = useForm<PodcastApplicationFormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      category: '',
      bio: '',
    },
  });

  const onSubmit = (data: PodcastApplicationFormValues) => {
    // In a real app, this would submit to a backend
    console.log('Form submitted:', data);
    toast({
      title: 'Application Submitted!',
      description: 'We will contact you after reviewing your application.',
      duration: 5000,
    });
    form.reset();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Share Your Story</h2>
        <p className="text-gray-600 mb-6">
          Have an inspiring story to share? Apply to be featured on our podcast.
          Our team will review your application and reach out to you if selected.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (123) 456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="student">Student Stars</SelectItem>
                        <SelectItem value="mentor">Mentor Minds</SelectItem>
                        <SelectItem value="startup">Startup Stories</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Story</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Share a brief summary of your story and why you'd like to be featured on our podcast..." 
                      className="min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please provide enough details for us to understand your unique story and its value to our community.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit" className="bg-student-purple hover:bg-student-purple/90">
                Submit Application
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PodcastApplicationForm;
