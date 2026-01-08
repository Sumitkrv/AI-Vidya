
import { motion } from 'framer-motion';
import { Star, Users, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Instructors() {
  const instructors = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Lead Designer at Figma',
      specialty: 'UI/UX Design',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      rating: 4.9,
      students: 12450,
      courses: 8,
      bio: 'Award-winning designer with 10+ years of experience in creating beautiful, user-centered interfaces.'
    },
    {
      id: 2,
      name: 'Marcus Lee',
      role: 'Senior Engineer at Google',
      specialty: 'Web Development',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 4.8,
      students: 18920,
      courses: 12,
      bio: 'Full-stack developer passionate about building scalable web applications and mentoring aspiring developers.'
    },
    {
      id: 3,
      name: 'Dr. Priya Kumar',
      role: 'AI Research Scientist',
      specialty: 'AI & Machine Learning',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      rating: 4.9,
      students: 9870,
      courses: 6,
      bio: 'PhD in Computer Science, specializing in machine learning and neural networks with published research.'
    },
    {
      id: 4,
      name: 'Alex Rivera',
      role: 'Marketing Director',
      specialty: 'Digital Marketing',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      rating: 4.7,
      students: 15600,
      courses: 10,
      bio: 'Digital marketing expert who has helped hundreds of businesses grow their online presence.'
    },
    {
      id: 5,
      name: 'Jordan Kim',
      role: 'Mobile Developer',
      specialty: 'Mobile Development',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      rating: 4.8,
      students: 11230,
      courses: 9,
      bio: 'Mobile development specialist with apps reaching millions of users on iOS and Android platforms.'
    },
    {
      id: 6,
      name: 'Emma Stone',
      role: 'Creative Director',
      specialty: 'Creative & Multimedia',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      rating: 4.9,
      students: 8540,
      courses: 7,
      bio: 'Award-winning video editor and motion graphics artist with work featured in major campaigns.'
    },
    {
      id: 7,
      name: 'Michael Torres',
      role: 'Data Scientist',
      specialty: 'Data Science',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      rating: 4.8,
      students: 13200,
      courses: 11,
      bio: 'Data scientist specializing in predictive analytics and big data processing for Fortune 500 companies.'
    },
    {
      id: 8,
      name: 'Lisa Anderson',
      role: 'UX Researcher',
      specialty: 'User Research',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      rating: 4.7,
      students: 7890,
      courses: 5,
      bio: 'UX research expert passionate about understanding user behavior and improving digital experiences.'
    },
    {
      id: 9,
      name: 'David Park',
      role: 'Product Manager',
      specialty: 'Product Management',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
      rating: 4.9,
      students: 10450,
      courses: 6,
      bio: 'Seasoned product manager with experience launching successful products at leading tech companies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-purple via-electric-violet to-soft-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Learn from Industry Experts
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our instructors are professionals working at top companies, bringing real-world experience to every course
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-royal-purple to-electric-violet bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-600">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-royal-purple to-electric-violet bg-clip-text text-transparent mb-2">
                4.8
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-royal-purple to-electric-violet bg-clip-text text-transparent mb-2">
                150K+
              </div>
              <div className="text-gray-600">Students Taught</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-royal-purple to-electric-violet bg-clip-text text-transparent mb-2">
                1,000+
              </div>
              <div className="text-gray-600">Courses Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {instructor.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{instructor.role}</p>
                    <div className="inline-flex items-center gap-1 bg-purple-50 text-royal-purple px-3 py-1 rounded-full text-xs font-medium">
                      {instructor.specialty}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm">{instructor.bio}</p>

                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-gray-900">{instructor.rating}</span>
                    </div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users size={16} className="text-gray-400" />
                      <span className="font-bold text-gray-900">
                        {(instructor.students / 1000).toFixed(1)}K
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <BookOpen size={16} className="text-gray-400" />
                      <span className="font-bold text-gray-900">{instructor.courses}</span>
                    </div>
                    <div className="text-xs text-gray-500">Courses</div>
                  </div>
                </div>

                <Link to="/courses">
                  <Button variant="outline" className="w-full" size="sm">
                    View Courses
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Instructor CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-royal-purple to-electric-violet rounded-3xl p-12 text-center">
            <Award className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Become an Instructor
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Share your knowledge with thousands of students worldwide and earn while making an impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-royal-purple hover:bg-gray-100">
                  Apply to Teach
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Teach With Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Teach With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join a community of passionate educators making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Reach Global Audience',
                description: 'Connect with students from over 150 countries and make a worldwide impact.'
              },
              {
                title: 'Earn While Teaching',
                description: 'Get compensated fairly for your expertise with competitive revenue sharing.'
              },
              {
                title: 'Full Support',
                description: 'Our team helps you create, market, and optimize your courses for success.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
