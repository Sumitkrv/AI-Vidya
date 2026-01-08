import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import Card from '../components/Card';
import Button from '../components/Button';

export const courses = [
  {
    id: '1',
    title: 'Complete React Development Bootcamp',
    description: 'Master React from scratch. Build real-world applications with hooks, context API, and Redux. Includes 10+ projects.',
    category: 'Web Development',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      role: 'Senior Frontend Developer'
    },
    rating: 4.8,
    students: 12500,
    sessions: 12,
    duration: '8 weeks',
    price: 299,
    originalPrice: 499,
    discount: 40,
    isFeatured: true,
    skills: ['React', 'JavaScript', 'Redux', 'Next.js', 'Tailwind CSS']
  },
  {
    id: '2',
    title: 'Advanced Machine Learning with Python',
    description: 'Dive deep into ML algorithms, neural networks, and real-world AI applications. Complete with Kaggle competitions.',
    category: 'AI & Data Science',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      role: 'AI Research Scientist'
    },
    rating: 4.9,
    students: 8900,
    sessions: 16,
    duration: '12 weeks',
    price: 449,
    originalPrice: 699,
    discount: 35,
    isFeatured: true,
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Science', 'Deep Learning']
  },
  {
    id: '3',
    title: 'UI/UX Design Fundamentals & Prototyping',
    description: 'Learn user-centered design principles, wireframing, prototyping, and design thinking from industry experts.',
    category: 'UI/UX Design',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Michael Park',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      role: 'Lead Product Designer'
    },
    rating: 4.7,
    students: 15600,
    sessions: 10,
    duration: '6 weeks',
    price: 249,
    originalPrice: 399,
    discount: 37,
    isFeatured: false,
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    id: '4',
    title: 'Mobile App Development with Flutter',
    description: 'Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
    category: 'Mobile Development',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Raj Patel',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      role: 'Mobile Architect'
    },
    rating: 4.6,
    students: 9800,
    sessions: 14,
    duration: '10 weeks',
    price: 349,
    originalPrice: 549,
    discount: 36,
    isFeatured: true,
    skills: ['Flutter', 'Dart', 'Firebase', 'API Integration', 'App Store Deployment']
  },
  {
    id: '5',
    title: 'Digital Marketing Masterclass 2024',
    description: 'Learn SEO, social media marketing, content strategy, and analytics to grow any business online.',
    category: 'Digital Marketing',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Lisa Wong',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      role: 'Marketing Director'
    },
    rating: 4.5,
    students: 21000,
    sessions: 8,
    duration: '5 weeks',
    price: 199,
    originalPrice: 349,
    discount: 43,
    isFeatured: false,
    skills: ['SEO', 'Social Media', 'Content Marketing', 'Google Analytics', 'PPC']
  },
  {
    id: '6',
    title: 'Creative Video Editing & Motion Graphics',
    description: 'Master Adobe Premiere Pro, After Effects, and professional video editing techniques for filmmakers.',
    category: 'Creative & Multimedia',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'David Miller',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      role: 'Creative Director'
    },
    rating: 4.8,
    students: 7600,
    sessions: 12,
    duration: '7 weeks',
    price: 279,
    originalPrice: 449,
    discount: 38,
    isFeatured: true,
    skills: ['Premiere Pro', 'After Effects', 'Color Grading', 'Motion Graphics', 'Storytelling']
  },
  {
    id: '7',
    title: 'Cybersecurity Fundamentals & Ethical Hacking',
    description: 'Learn to protect systems, networks, and data from cyber attacks. Hands-on penetration testing labs included.',
    category: 'AI & Data Science',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Chris Evans',
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      role: 'Security Consultant'
    },
    rating: 4.9,
    students: 6400,
    sessions: 15,
    duration: '9 weeks',
    price: 399,
    originalPrice: 599,
    discount: 33,
    isFeatured: true,
    skills: ['Network Security', 'Penetration Testing', 'Cryptography', 'Malware Analysis', 'Incident Response']
  },
  {
    id: '8',
    title: 'Full-Stack Web Development with MERN',
    description: 'Master MongoDB, Express, React, and Node.js to build complete web applications from front to back.',
    category: 'Web Development',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Emma Davis',
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      role: 'Full-Stack Developer'
    },
    rating: 4.7,
    students: 18500,
    sessions: 18,
    duration: '14 weeks',
    price: 449,
    originalPrice: 699,
    discount: 36,
    isFeatured: false,
    skills: ['MongoDB', 'Express', 'React', 'Node.js', 'REST APIs', 'Authentication']
  },
  {
    id: '9',
    title: 'Business Analytics with Power BI & Tableau',
    description: 'Transform raw data into actionable insights. Learn data visualization, dashboard creation, and business intelligence.',
    category: 'AI & Data Science',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Robert Kim',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      role: 'Data Analyst Lead'
    },
    rating: 4.6,
    students: 11200,
    sessions: 9,
    duration: '6 weeks',
    price: 229,
    originalPrice: 379,
    discount: 39,
    isFeatured: true,
    skills: ['Power BI', 'Tableau', 'Data Analysis', 'Dashboard Design', 'SQL']
  }
];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const categories = ['All', 'UI/UX Design', 'Web Development', 'Mobile Development', 'AI & Data Science', 'Digital Marketing', 'Creative & Multimedia'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2A5C8F] via-[#163560] to-[#1A4D7C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Explore Our Courses
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              1,000+ expert-led courses to help you master new skills and advance your career
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#163560] text-white'
                        : 'bg-[#F4F5FA] text-gray-700 hover:bg-[#E5E7EB]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Level Filter */}
            <div className="w-full md:w-48">
              <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#163560]"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredCourses.length}</span> courses
            </p>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No courses found matching your criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col">
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="primary">{course.level}</Badge>
                      </div>
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="absolute -bottom-6 left-4 w-12 h-12 rounded-full border-4 border-white"
                      />
                    </div>

                    <div className="p-6 pt-8 flex-1 flex flex-col">
                      <Badge className="w-fit mb-3">{course.category}</Badge>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {course.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {course.description}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Star size={16} className="fill-yellow-400 text-yellow-400" />
                          <span className="font-medium text-gray-900">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={16} />
                          <span>{(course.students / 1000).toFixed(1)}K</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{course.sessions} sessions</span>
                        </div>
                      </div>

                      <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                          <span className="text-sm text-gray-400 line-through ml-2">${course.originalPrice}</span>
                        </div>
                        <Link to={`/courses/${course.id}`}>
                          <Button size="sm">View Course</Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
