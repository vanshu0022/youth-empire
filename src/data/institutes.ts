
export type Institute = {
  id: string;
  name: string;
  ranking: number;
  rating: number;
  location: {
    country: string;
    state: string;
    district: string;
  };
  details: {
    description: string;
    established: string;
    type: string;
    website: string;
    totalStudents: number;
    acceptanceRate: string;
    feeRange: string;
    courses: string[];
  };
  mentors: Array<{
    id: string;
    name: string;
    position: string;
    image: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  admissionStats: {
    applicants: number;
    accepted: number;
    enrolled: number;
    averageGPA: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
  };
};

export const institutes: Institute[] = [
  {
    id: "1",
    name: "Harvard University",
    ranking: 1,
    rating: 4.9,
    location: {
      country: "United States",
      state: "Massachusetts",
      district: "Cambridge"
    },
    details: {
      description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636, it is the oldest institution of higher learning in the United States.",
      established: "1636",
      type: "Private Research University",
      website: "harvard.edu",
      totalStudents: 23000,
      acceptanceRate: "4.6%",
      feeRange: "$50,000 - $55,000 per year",
      courses: ["Liberal Arts", "Engineering", "Business", "Law", "Medicine"]
    },
    mentors: [
      {
        id: "m1",
        name: "Dr. Sarah Johnson",
        position: "Professor of Economics",
        image: "placeholder.svg"
      },
      {
        id: "m2",
        name: "Dr. Michael Chen",
        position: "Professor of Computer Science",
        image: "placeholder.svg"
      }
    ],
    faqs: [
      {
        question: "What is the application deadline?",
        answer: "Early Action applications are due by November 1 and Regular Decision applications are due by January 1."
      },
      {
        question: "What is the average SAT score for admitted students?",
        answer: "The average SAT score range for admitted students is 1460-1580."
      },
      {
        question: "Does Harvard offer financial aid?",
        answer: "Yes, Harvard meets 100% of demonstrated financial need for all admitted students."
      }
    ],
    admissionStats: {
      applicants: 57000,
      accepted: 2023,
      enrolled: 1650,
      averageGPA: "4.18"
    },
    contact: {
      phone: "+1-617-495-1000",
      email: "admissions@harvard.edu",
      address: "Cambridge, MA 02138, United States"
    }
  },
  {
    id: "2",
    name: "Stanford University",
    ranking: 2,
    rating: 4.8,
    location: {
      country: "United States",
      state: "California",
      district: "Stanford"
    },
    details: {
      description: "Stanford University is a private research university in Stanford, California. Known for its academic strength, proximity to Silicon Valley, and ranking as one of the world's top universities.",
      established: "1885",
      type: "Private Research University",
      website: "stanford.edu",
      totalStudents: 17000,
      acceptanceRate: "4.3%",
      feeRange: "$56,000 - $60,000 per year",
      courses: ["Computer Science", "Engineering", "Business", "Sciences", "Humanities"]
    },
    mentors: [
      {
        id: "m3",
        name: "Dr. David Wilson",
        position: "Professor of Engineering",
        image: "placeholder.svg"
      },
      {
        id: "m4",
        name: "Dr. Emily Rodriguez",
        position: "Professor of Computer Science",
        image: "placeholder.svg"
      }
    ],
    faqs: [
      {
        question: "What is the application deadline?",
        answer: "Regular Decision applications are due by January 5."
      },
      {
        question: "What is the average SAT score for admitted students?",
        answer: "The average SAT score range for admitted students is 1440-1550."
      },
      {
        question: "Does Stanford offer financial aid?",
        answer: "Yes, Stanford has one of the most generous financial aid programs in the country."
      }
    ],
    admissionStats: {
      applicants: 55000,
      accepted: 2190,
      enrolled: 1700,
      averageGPA: "4.17"
    },
    contact: {
      phone: "+1-650-723-2091",
      email: "admissions@stanford.edu",
      address: "450 Serra Mall, Stanford, CA 94305, United States"
    }
  },
  {
    id: "3",
    name: "Indian Institute of Technology, Delhi",
    ranking: 3,
    rating: 4.7,
    location: {
      country: "India",
      state: "Delhi",
      district: "Hauz Khas"
    },
    details: {
      description: "IIT Delhi is one of India's most prestigious engineering and technology institutes, known for its rigorous academic programs and cutting-edge research.",
      established: "1961",
      type: "Public Technical University",
      website: "iitd.ac.in",
      totalStudents: 8500,
      acceptanceRate: "1%",
      feeRange: "₹2,00,000 - ₹3,00,000 per year",
      courses: ["Engineering", "Technology", "Design", "Sciences", "Management"]
    },
    mentors: [
      {
        id: "m5",
        name: "Dr. Rajesh Kumar",
        position: "Professor of Electrical Engineering",
        image: "placeholder.svg"
      },
      {
        id: "m6",
        name: "Dr. Priya Sharma",
        position: "Professor of Computer Science",
        image: "placeholder.svg"
      }
    ],
    faqs: [
      {
        question: "How to get admission in IIT Delhi?",
        answer: "Admission to undergraduate programs is through the Joint Entrance Examination (JEE) Advanced. For postgraduate programs, it's through GATE score."
      },
      {
        question: "What is the cutoff rank for IIT Delhi?",
        answer: "The cutoff rank varies by program but typically ranges from 50 to 2000 in JEE Advanced."
      },
      {
        question: "Does IIT Delhi offer scholarships?",
        answer: "Yes, various merit-based and need-based scholarships are available to students."
      }
    ],
    admissionStats: {
      applicants: 120000,
      accepted: 1200,
      enrolled: 1000,
      averageGPA: "9.5/10"
    },
    contact: {
      phone: "+91-11-2659-7135",
      email: "admissions@iitd.ac.in",
      address: "IIT Campus, Hauz Khas, New Delhi, Delhi 110016, India"
    }
  },
  {
    id: "4",
    name: "University of Oxford",
    ranking: 4,
    rating: 4.8,
    location: {
      country: "United Kingdom",
      state: "England",
      district: "Oxford"
    },
    details: {
      description: "The University of Oxford is the oldest university in the English-speaking world and is regarded as one of the world's most prestigious institutions of higher learning.",
      established: "1096",
      type: "Public Research University",
      website: "ox.ac.uk",
      totalStudents: 24000,
      acceptanceRate: "17.5%",
      feeRange: "£9,250 for UK students, £26,000-£37,000 for international students per year",
      courses: ["Humanities", "Mathematics", "Sciences", "Social Sciences", "Medicine"]
    },
    mentors: [
      {
        id: "m7",
        name: "Dr. James Williams",
        position: "Professor of Mathematics",
        image: "placeholder.svg"
      },
      {
        id: "m8",
        name: "Dr. Olivia Clarke",
        position: "Professor of Literature",
        image: "placeholder.svg"
      }
    ],
    faqs: [
      {
        question: "What is the application process for international students?",
        answer: "International students need to apply through UCAS by October 15 for most courses."
      },
      {
        question: "What are the English language requirements?",
        answer: "IELTS score of 7.0 or higher, with at least 6.5 in each component."
      },
      {
        question: "Does Oxford offer accommodation to all students?",
        answer: "Oxford guarantees accommodation to first-year undergraduate students through its college system."
      }
    ],
    admissionStats: {
      applicants: 23000,
      accepted: 3200,
      enrolled: 3000,
      averageGPA: "A*/A grades in A-levels"
    },
    contact: {
      phone: "+44-1865-270000",
      email: "admissions@ox.ac.uk",
      address: "University Offices, Wellington Square, Oxford OX1 2JD, UK"
    }
  }
];

export const getLocationFilters = () => {
  const countries = new Set<string>();
  const states = new Set<string>();
  const districts = new Set<string>();
  
  institutes.forEach(institute => {
    countries.add(institute.location.country);
    states.add(institute.location.state);
    districts.add(institute.location.district);
  });
  
  return {
    countries: Array.from(countries),
    states: Array.from(states),
    districts: Array.from(districts)
  };
};
