import { BookOpen, Briefcase, Brain } from 'lucide-react';

export const mainCourseCategories = [
  {
    id: 'academic',
    icon: BookOpen,
    title: "Academic Learning",
    description: "For School & College Students",
    items: [
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "English & Social Science",
      "Exam Preparation & Practice Tests"
    ],
    gradient: "from-[#163560] to-blue-600",
    borderColor: "border-slate-200 hover:border-[#163560]",
    iconColor: "text-[#163560]",
    tagline: "Perfect for students in grades 6-12"
  },
  {
    id: 'career',
    icon: Briefcase,
    title: "Career & Job-Oriented",
    description: "For Working Class & Job Seekers",
    items: [
      "Spoken English for Interviews",
      "Computer Skills (MS Office, Google)",
      "Digital Literacy & Office Tools",
      "Personality Development"
    ],
    gradient: "from-[#4151a3] to-[#23255f]",
    borderColor: "border-[#4151a3] hover:border-[#23255f]",
    iconColor: "text-[#4151a3]",
    tagline: "Boost your employability skills"
  },
  {
    id: 'skill',
    icon: Brain,
    title: "Skill Development",
    description: "For All Age Groups",
    items: [
      "Smartphone & Internet Basics",
      "Financial Literacy (UPI, Banking)",
      "Time Management & Productivity",
      "Small Business Skills"
    ],
    gradient: "from-[#4151a3] to-[#23255f]",
    borderColor: "border-[#4151a3] hover:border-[#23255f]",
    iconColor: "text-[#4151a3]",
    tagline: "Life skills for the digital age"
  }
];
