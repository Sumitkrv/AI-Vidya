export const courses = [
  {
    id: 1,
    title: 'UI/UX Masterclass',
    category: 'UI/UX Design',
    instructor: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      role: 'Lead Designer at Figma'
    },
    image: '/uiux.jpeg',
    price: 89,
    originalPrice: 149,
    rating: 4.9,
    students: 12450,
    sessions: 24,
    duration: '12 weeks',
    level: 'Advanced',
    description: 'Master the art of creating beautiful, user-centered interfaces. Learn advanced prototyping, user research, and design systems.',
    highlights: [
      'Advanced Figma techniques',
      'Design system creation',
      'User research methodologies',
      'Interactive prototyping',
      'Portfolio-ready projects'
    ],
    curriculum: [
      { title: 'Introduction to Advanced UX', duration: '2h 30m', lessons: 8 },
      { title: 'Design Systems Fundamentals', duration: '3h 15m', lessons: 10 },
      { title: 'Advanced Prototyping', duration: '4h 00m', lessons: 12 },
      { title: 'User Research & Testing', duration: '3h 45m', lessons: 11 },
      { title: 'Final Project', duration: '6h 00m', lessons: 5 }
    ]
  },
  {
    id: 2,
    title: 'Full-Stack Web Development',
    category: 'Web Development',
    instructor: {
      name: 'Marcus Lee',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      role: 'Senior Engineer at Google'
    },
    image: '/Fullstack.jpeg',
    price: 129,
    originalPrice: 199,
    rating: 4.8,
    students: 18920,
    sessions: 48,
    duration: '16 weeks',
    level: 'Intermediate',
    description: 'Build modern full-stack applications with React, Node.js, and MongoDB. Deploy production-ready apps.',
    highlights: [
      'React & Next.js mastery',
      'Node.js & Express backend',
      'Database design & MongoDB',
      'Authentication & security',
      'Cloud deployment'
    ],
    curriculum: [
      { title: 'Frontend with React', duration: '8h 30m', lessons: 20 },
      { title: 'Backend with Node.js', duration: '7h 45m', lessons: 18 },
      { title: 'Database Design', duration: '5h 20m', lessons: 15 },
      { title: 'Authentication & APIs', duration: '6h 15m', lessons: 16 },
      { title: 'Deployment & DevOps', duration: '4h 30m', lessons: 12 }
    ]
  },
  {
    id: 3,
    title: 'AI & Machine Learning Fundamentals',
    category: 'AI & Data Science',
    instructor: {
      name: 'Dr. Priya Kumar',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      role: 'AI Research Scientist'
    },
    image: '/ML.jpeg',
    price: 99,
    originalPrice: 179,
    rating: 4.9,
    students: 9870,
    sessions: 32,
    duration: '14 weeks',
    level: 'Beginner',
    description: 'Start your AI journey. Learn Python, machine learning algorithms, and build real-world AI applications.',
    highlights: [
      'Python for data science',
      'Machine learning algorithms',
      'Neural networks basics',
      'Real-world projects',
      'Career guidance'
    ],
    curriculum: [
      { title: 'Python Fundamentals', duration: '4h 00m', lessons: 12 },
      { title: 'Data Analysis & Visualization', duration: '5h 30m', lessons: 14 },
      { title: 'Machine Learning Basics', duration: '6h 45m', lessons: 16 },
      { title: 'Neural Networks', duration: '7h 20m', lessons: 18 },
      { title: 'Capstone Project', duration: '8h 00m', lessons: 10 }
    ]
  },
  {
    id: 4,
    title: 'Digital Marketing Strategy',
    category: 'Digital Marketing',
    instructor: {
      name: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      role: 'Marketing Director'
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    price: 79,
    originalPrice: 139,
    rating: 4.7,
    students: 15600,
    sessions: 20,
    duration: '8 weeks',
    level: 'Beginner',
    description: 'Master digital marketing from SEO to paid advertising. Grow your business or launch your marketing career.',
    highlights: [
      'SEO & content marketing',
      'Social media strategy',
      'Google Ads & Facebook Ads',
      'Email marketing',
      'Analytics & reporting'
    ],
    curriculum: [
      { title: 'Digital Marketing Foundations', duration: '3h 15m', lessons: 10 },
      { title: 'SEO & Content Strategy', duration: '4h 30m', lessons: 12 },
      { title: 'Social Media Marketing', duration: '3h 45m', lessons: 11 },
      { title: 'Paid Advertising', duration: '5h 00m', lessons: 14 },
      { title: 'Analytics & Optimization', duration: '3h 30m', lessons: 9 }
    ]
  },
  {
    id: 5,
    title: 'Mobile App Development with React Native',
    category: 'Mobile Development',
    instructor: {
      name: 'Jordan Kim',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      role: 'Mobile Developer'
    },
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    price: 119,
    originalPrice: 189,
    rating: 4.8,
    students: 11230,
    sessions: 36,
    duration: '12 weeks',
    level: 'Intermediate',
    description: 'Build beautiful cross-platform mobile apps for iOS and Android using React Native and Expo.',
    highlights: [
      'React Native fundamentals',
      'Navigation & routing',
      'State management',
      'API integration',
      'App store deployment'
    ],
    curriculum: [
      { title: 'React Native Basics', duration: '5h 30m', lessons: 15 },
      { title: 'Navigation & UI Components', duration: '6h 15m', lessons: 17 },
      { title: 'State Management', duration: '4h 45m', lessons: 13 },
      { title: 'Backend Integration', duration: '5h 30m', lessons: 14 },
      { title: 'Publishing Your App', duration: '3h 00m', lessons: 8 }
    ]
  },
  {
    id: 6,
    title: 'Creative Video Editing & Motion Graphics',
    category: 'Creative & Multimedia',
    instructor: {
      name: 'Emma Stone',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      role: 'Creative Director'
    },
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800',
    price: 89,
    originalPrice: 159,
    rating: 4.9,
    students: 8540,
    sessions: 28,
    duration: '10 weeks',
    level: 'Beginner',
    description: 'Master video editing and motion graphics with Adobe Premiere Pro and After Effects. Create stunning visual content.',
    highlights: [
      'Premiere Pro mastery',
      'After Effects basics',
      'Color grading',
      'Motion graphics',
      'Portfolio projects'
    ],
    curriculum: [
      { title: 'Video Editing Fundamentals', duration: '4h 30m', lessons: 12 },
      { title: 'Advanced Editing Techniques', duration: '5h 15m', lessons: 14 },
      { title: 'Color Grading & Correction', duration: '3h 45m', lessons: 10 },
      { title: 'Motion Graphics with After Effects', duration: '6h 30m', lessons: 16 },
      { title: 'Final Projects', duration: '4h 00m', lessons: 8 }
    ]
  }
];
