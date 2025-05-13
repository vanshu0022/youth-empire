
export interface Opportunity {
  id: string;
  title: string;
  description: string;
  location: string;
  isRemote: boolean;
  deadline: string;
  category: OpportunityCategory;
  stream: StreamType[];
  educationLevel: EducationLevel[];
  graduationYear: number[];
  tags: string[];
  postedDate: string;
  companyName?: string;
  companyLogo?: string;
  link?: string;
}

export type OpportunityCategory = 
  | 'Scholarship'
  | 'Internship'
  | 'Competition'
  | 'Fellowship'
  | 'Conference'
  | 'Research'
  | 'Job'
  | 'Grant';

export type StreamType = 
  | 'Engineering'
  | 'Arts'
  | 'Medicine'
  | 'Business'
  | 'Technology'
  | 'Law'
  | 'Science'
  | 'Education'
  | 'Design';

export type EducationLevel = 
  | 'High School'
  | 'Undergraduate'
  | 'Postgraduate'
  | 'PhD/Postdoc'
  | 'Working Professional';

export type Region = 
  | 'Global'
  | 'North America'
  | 'Europe'
  | 'Asia'
  | 'Africa'
  | 'South America'
  | 'Australia'
  | 'Remote';

// Helper function to check if an opportunity was posted today
export const isPostedToday = (postedDate: string): boolean => {
  const today = new Date();
  const posted = new Date(postedDate);
  
  return (
    posted.getDate() === today.getDate() &&
    posted.getMonth() === today.getMonth() &&
    posted.getFullYear() === today.getFullYear()
  );
};

// Sample data for opportunities
export const opportunitiesData: Opportunity[] = [
  {
    id: '1',
    title: 'Google Summer Internship 2025',
    description: 'Join Google for a 12-week summer internship to develop cutting-edge technologies and work on real-world problems.',
    location: 'United States',
    isRemote: false,
    deadline: '2025-01-15',
    category: 'Internship',
    stream: ['Engineering', 'Technology'],
    educationLevel: ['Undergraduate', 'Postgraduate'],
    graduationYear: [2025, 2026],
    tags: ['Tech', 'Software', 'Engineering'],
    postedDate: new Date().toISOString(), // Today
    companyName: 'Google',
    companyLogo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    link: 'https://example.com/apply'
  },
  {
    id: '2',
    title: 'Fulbright Scholarship 2025',
    description: 'A prestigious scholarship opportunity for outstanding students to study abroad and exchange ideas.',
    location: 'Global',
    isRemote: false,
    deadline: '2024-12-31',
    category: 'Scholarship',
    stream: ['Arts', 'Science', 'Engineering', 'Business', 'Law'],
    educationLevel: ['Undergraduate', 'Postgraduate', 'PhD/Postdoc'],
    graduationYear: [2025, 2026, 2027],
    tags: ['Scholarship', 'International', 'Academic'],
    postedDate: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString(), // 5 days ago
    link: 'https://example.com/apply'
  },
  {
    id: '3',
    title: 'WHO Research Fellowship',
    description: 'Research opportunity at the World Health Organization focusing on global health challenges.',
    location: 'Switzerland',
    isRemote: false,
    deadline: '2025-03-30',
    category: 'Research',
    stream: ['Medicine', 'Science'],
    educationLevel: ['Postgraduate', 'PhD/Postdoc'],
    graduationYear: [2024, 2025],
    tags: ['Research', 'Health', 'Global'],
    postedDate: new Date().toISOString(), // Today
    companyName: 'World Health Organization',
    link: 'https://example.com/apply'
  },
  {
    id: '4',
    title: 'Microsoft Remote Software Engineer',
    description: 'Entry-level software engineering role at Microsoft with fully remote work options.',
    location: 'Global',
    isRemote: true,
    deadline: '2025-02-28',
    category: 'Job',
    stream: ['Technology', 'Engineering'],
    educationLevel: ['Undergraduate', 'Postgraduate'],
    graduationYear: [2024, 2025],
    tags: ['Remote', 'Tech', 'Software'],
    postedDate: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(), // Yesterday
    companyName: 'Microsoft',
    link: 'https://example.com/apply'
  },
  {
    id: '5',
    title: 'International Design Competition',
    description: 'Showcase your design talent and compete for prizes and recognition in this global competition.',
    location: 'Global',
    isRemote: true,
    deadline: '2025-04-15',
    category: 'Competition',
    stream: ['Arts', 'Design'],
    educationLevel: ['High School', 'Undergraduate', 'Postgraduate', 'Working Professional'],
    graduationYear: [2024, 2025, 2026, 2027],
    tags: ['Design', 'Creative', 'Competition'],
    postedDate: new Date().toISOString(), // Today
    link: 'https://example.com/apply'
  },
  {
    id: '6',
    title: 'European Youth Conference 2025',
    description: 'Annual conference bringing together young leaders from across Europe to discuss pressing issues.',
    location: 'Germany',
    isRemote: false,
    deadline: '2025-05-01',
    category: 'Conference',
    stream: ['Business', 'Law', 'Education'],
    educationLevel: ['Undergraduate', 'Postgraduate', 'Working Professional'],
    graduationYear: [2024, 2025, 2026],
    tags: ['Conference', 'Europe', 'Leadership'],
    postedDate: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(), // 2 days ago
    link: 'https://example.com/apply'
  },
  {
    id: '7',
    title: 'Gates Cambridge Scholarship',
    description: 'Prestigious fully-funded scholarship for exceptional students to pursue a full-time postgraduate degree at the University of Cambridge.',
    location: 'United Kingdom',
    isRemote: false,
    deadline: '2024-12-03',
    category: 'Scholarship',
    stream: ['Engineering', 'Arts', 'Medicine', 'Business', 'Technology', 'Law', 'Science'],
    educationLevel: ['Postgraduate', 'PhD/Postdoc'],
    graduationYear: [2025, 2026],
    tags: ['Scholarship', 'Academic', 'International'],
    postedDate: new Date().toISOString(), // Today
    companyName: 'University of Cambridge',
    link: 'https://example.com/apply'
  },
  {
    id: '8',
    title: 'UNICEF Innovation Internship',
    description: 'Work with UNICEF to create innovative solutions for children's challenges around the world.',
    location: 'Multiple Locations',
    isRemote: true,
    deadline: '2025-01-20',
    category: 'Internship',
    stream: ['Technology', 'Engineering', 'Design', 'Education'],
    educationLevel: ['Undergraduate', 'Postgraduate'],
    graduationYear: [2025, 2026],
    tags: ['Innovation', 'Social Impact', 'Technology'],
    postedDate: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString(), // 3 days ago
    companyName: 'UNICEF',
    link: 'https://example.com/apply'
  }
];

export const allStreams: StreamType[] = [
  'Engineering', 'Arts', 'Medicine', 'Business', 
  'Technology', 'Law', 'Science', 'Education', 'Design'
];

export const allCategories: OpportunityCategory[] = [
  'Scholarship', 'Internship', 'Competition', 'Fellowship',
  'Conference', 'Research', 'Job', 'Grant'
];

export const allEducationLevels: EducationLevel[] = [
  'High School', 'Undergraduate', 'Postgraduate', 'PhD/Postdoc', 'Working Professional'
];

export const allRegions: Region[] = [
  'Global', 'North America', 'Europe', 'Asia', 'Africa', 'South America', 'Australia', 'Remote'
];

export const graduationYears: number[] = [2024, 2025, 2026, 2027, 2028];
