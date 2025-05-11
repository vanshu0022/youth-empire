
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { 
  Upload,
  Briefcase,
  Link as LinkIcon
} from "lucide-react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const fundingFormSchema = z.object({
  companyName: z.string().min(2, { message: "Company name is required" }),
  website: z.string().url({ message: "Please enter a valid website URL" }).or(z.string().length(0)),
  founderName: z.string().min(2, { message: "Founder name is required" }),
  founderRole: z.string().min(2, { message: "Founder role is required" }),
  problemStatement: z.string().min(30, { message: "Please provide a detailed problem statement (minimum 30 characters)" }),
  solution: z.string().min(30, { message: "Please provide a detailed solution (minimum 30 characters)" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(6, { message: "Please enter a valid phone number" }),
});

type FundingFormValues = z.infer<typeof fundingFormSchema>;

const defaultValues: Partial<FundingFormValues> = {
  companyName: "",
  website: "",
  founderName: "",
  founderRole: "",
  problemStatement: "",
  solution: "",
  email: "",
  phone: "",
};

const FundingRequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deckFile, setDeckFile] = useState<File | null>(null);
  
  const form = useForm<FundingFormValues>({
    resolver: zodResolver(fundingFormSchema),
    defaultValues,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setDeckFile(files[0]);
    }
  };

  const onSubmit = (values: FundingFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      console.log("Form values:", values);
      console.log("Deck file:", deckFile);
      
      // Show success message
      toast.success("Form submitted successfully. Our team will contact you soon.");
      
      // Reset form
      form.reset();
      setDeckFile(null);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Company Details Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2 text-student-purple">
                <Briefcase size={20} />
                <span>Company Details</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1">
                        <LinkIcon size={14} />
                        <span>Website</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="https://yourcompany.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Founder Details Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-student-purple">Founder Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="founderName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Founder Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="founderRole"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role/Position*</FormLabel>
                      <FormControl>
                        <Input placeholder="CEO, CTO, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Problem & Solution Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-student-purple">Problem & Solution</h2>
              
              <FormField
                control={form.control}
                name="problemStatement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Problem Statement*</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe the problem your company is solving..."
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="solution"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Solution*</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your solution to the problem..."
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Contact Details Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-student-purple">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email*</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
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
                      <FormLabel>Phone*</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 234 567 8900" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Pitch Deck Upload */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2 text-student-purple">
                <Upload size={20} />
                <span>Pitch Deck</span>
              </h2>
              
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                <input
                  type="file"
                  id="deck-upload"
                  accept=".pdf,.ppt,.pptx,.doc,.docx"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label 
                  htmlFor="deck-upload"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  <Upload size={36} className="text-gray-400 mb-2" />
                  <p className="text-md font-medium mb-1">Upload your pitch deck</p>
                  <p className="text-sm text-gray-500 mb-4">
                    PDF, PPT, PPTX, DOC or DOCX (max 10MB)
                  </p>
                  <Button type="button" variant="outline">
                    Browse Files
                  </Button>
                </label>
                {deckFile && (
                  <div className="mt-4 text-sm text-student-purple">
                    Selected file: {deckFile.name}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full md:w-auto bg-student-purple hover:bg-student-purple/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Funding Request"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FundingRequestForm;
