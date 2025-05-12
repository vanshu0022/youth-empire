
export type Podcast = {
  id: number;
  title: string;
  host: string;
  category: 'Student Stars' | 'Mentor Minds' | 'Startup Stories';
  duration: string;
  image: string;
  description: string;
};

export const podcasts: Podcast[] = [
  {
    id: 1,
    title: 'Finding My Path in Tech',
    host: 'Ava Johnson',
    category: 'Student Stars',
    duration: '28:45',
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1',
    description: 'Ava shares her journey from biology major to software engineer and how she overcame challenges along the way.',
  },
  {
    id: 2,
    title: 'Building a Startup with Purpose',
    host: 'Michael Chang',
    category: 'Startup Stories',
    duration: '42:16',
    image: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369',
    description: 'Michael discusses how he founded his sustainable energy startup and secured initial funding.',
  },
  {
    id: 3,
    title: 'Mentoring the Next Generation',
    host: 'Dr. Olivia Peterson',
    category: 'Mentor Minds',
    duration: '35:22',
    image: 'https://images.unsplash.com/photo-1473396941201-e8cc0159ca36',
    description: 'Dr. Peterson explains her approach to mentoring young scientists and fostering innovation in research.',
  },
  {
    id: 4,
    title: 'From College Project to Acquisition',
    host: 'James Wilson',
    category: 'Startup Stories',
    duration: '39:10',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
    description: 'James recounts how his college project evolved into a successful startup that was acquired by a tech giant.',
  },
  {
    id: 5,
    title: 'My Research Breakthrough',
    host: 'Sarah Martinez',
    category: 'Student Stars',
    duration: '24:30',
    image: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937',
    description: 'Sarah shares the story behind her research breakthrough in renewable energy and how it's making an impact.',
  },
  {
    id: 6,
    title: 'Guiding Innovation Through Experience',
    host: 'Prof. Robert Chen',
    category: 'Mentor Minds',
    duration: '45:17',
    image: 'https://images.unsplash.com/photo-1452960962994-acf4fd70b632',
    description: 'Professor Chen discusses his decades of experience guiding students through innovation challenges.',
  }
];

export const podcastCategories = [
  'Student Stars',
  'Mentor Minds',
  'Startup Stories'
] as const;
