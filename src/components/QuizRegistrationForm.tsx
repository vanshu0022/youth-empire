
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

// Define the form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  mobile: z.string().min(10, { message: "Please enter a valid phone number." }),
  gradeClass: z.string().min(1, { message: "Please select your grade/class." }),
  programType: z.string().min(1, { message: "Program type is required." })
});

type QuizRegistrationFormProps = {
  programType: 'juniors' | 'seniors';
};

const QuizRegistrationForm: React.FC<QuizRegistrationFormProps> = ({ programType }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      gradeClass: '',
      programType: programType
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("Registration successful! Our team will contact you soon.", {
      description: "Thank you for registering for the KBC Quiz program!"
    });
    form.reset();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Registration Form</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your mobile number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gradeClass"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Grade/Class</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your grade/class" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {programType === 'juniors' ? (
                      // Options for school students
                      <>
                        <SelectItem value="class6">Class 6</SelectItem>
                        <SelectItem value="class7">Class 7</SelectItem>
                        <SelectItem value="class8">Class 8</SelectItem>
                        <SelectItem value="class9">Class 9</SelectItem>
                        <SelectItem value="class10">Class 10</SelectItem>
                        <SelectItem value="class11">Class 11</SelectItem>
                        <SelectItem value="class12">Class 12</SelectItem>
                      </>
                    ) : (
                      // Options for college/university students
                      <>
                        <SelectItem value="year1">1st Year</SelectItem>
                        <SelectItem value="year2">2nd Year</SelectItem>
                        <SelectItem value="year3">3rd Year</SelectItem>
                        <SelectItem value="year4">4th Year</SelectItem>
                        <SelectItem value="year5">5th Year</SelectItem>
                        <SelectItem value="masters">Masters</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-student-purple hover:bg-student-purple/90">
            Register Now
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default QuizRegistrationForm;
