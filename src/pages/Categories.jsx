
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Code, Smartphone, TrendingUp, Brain, Video, Camera, Database, Shield, Megaphone, Pencil, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Categories() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = [
    {
      id: 1,
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Master interface design, user research, and prototyping with industry-standard tools.',
      courses: 124,
      students: 45600,
      gradient: 'from-royal-purple to-electric-violet'
    },
    {
      id: 2,
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Build modern websites and applications with the latest frameworks and technologies.',
      courses: 287,
      students: 78900,
      gradient: 'from-soft-blue to-neon-green'
    },
    {
      id: 3,
      icon: <Smartphone size={40} />,
      title: 'Mobile Development',
      description: 'Create stunning iOS and Android apps using native and cross-platform tools.',
      courses: 156,
      students: 34200,
      gradient: 'from-warm-pink to-royal-purple'
    },
    {
      id: 4,
      icon: <TrendingUp size={40} />,
      title: 'Digital Marketing',
      description: 'Learn SEO, social media strategy, content marketing, and paid advertising.',
      courses: 198,
      students: 56700,
      gradient: 'from-neon-green to-soft-blue'
    },
    {
      id: 5,
      icon: <Brain size={40} />,
      title: 'AI & Data Science',
      description: 'Explore machine learning, neural networks, and data visualization techniques.',
      courses: 142,
      students: 29800,
      gradient: 'from-electric-violet to-soft-blue'
    },
    {
      id: 6,
      icon: <Video size={40} />,
      title: 'Video Editing',
      description: 'Master video editing, color grading, and motion graphics with professional tools.',
      courses: 89,
      students: 23400,
      gradient: 'from-warm-pink to-electric-violet'
    },
    {
      id: 7,
      icon: <Camera size={40} />,
      title: 'Photography',
      description: 'Learn professional photography techniques, composition, and photo editing.',
      courses: 76,
      students: 18900,
      gradient: 'from-royal-purple to-warm-pink'
    },
    {
      id: 8,
      icon: <Database size={40} />,
      title: 'Database & Backend',
      description: 'Master database design, SQL, and backend development technologies.',
      courses: 134,
      students: 31200,
      gradient: 'from-soft-blue to-royal-purple'
    },
    {
      id: 9,
      icon: <Shield size={40} />,
      title: 'Cybersecurity',
      description: 'Learn ethical hacking, network security, and security best practices.',
      courses: 98,
      students: 22100,
      gradient: 'from-neon-green to-electric-violet'
    },
    {
      id: 10,
      icon: <Megaphone size={40} />,
      title: 'Content Creation',
      description: 'Build your personal brand through blogging, podcasting, and social media.',
      courses: 112,
      students: 41300,
      gradient: 'from-warm-pink to-neon-green'
    },
    {
      id: 11,
      icon: <Pencil size={40} />,
      title: 'Graphic Design',
      description: 'Create stunning visual designs for print and digital media.',
      courses: 145,
      students: 38700,
      gradient: 'from-electric-violet to-warm-pink'
    },
    {
      id: 12,
      icon: <Music size={40} />,
      title: 'Music Production',
      description: 'Learn music theory, composition, and production with industry tools.',
      courses: 67,
      students: 15600,
      gradient: 'from-royal-purple to-soft-blue'
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
              Explore Course Categories
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover curated learning paths across 12+ categories designed by industry leaders
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
                12+
              </div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-royal-purple to-electric-violet bg-clip-text text-transparent mb-2">
                1,828
              </div>
              <div className="text-gray-600">Total Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-royal-purple to-electric-violet bg-clip-text text-transparent mb-2">
                436K+
              </div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-royal-purple to-electric-violet bg-clip-text text-transparent mb-2">
                4.8
              </div>
              <div className="text-gray-600">Avg. Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section ref={ref} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to="/courses">
                  <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                      {category.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{category.courses} courses</span>
                      <span>{(category.students / 1000).toFixed(1)}K students</span>
                    </div>

                    <Button variant="outline" className="w-full group-hover:bg-royal-purple group-hover:text-white group-hover:border-royal-purple">
                      Explore Courses
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Most Popular This Month
            </h2>
            <p className="text-xl text-gray-600">
              Trending categories based on student enrollment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[categories[1], categories[0], categories[3]].map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl h-64"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90`} />
                <div className="relative h-full p-8 flex flex-col justify-between text-white">
                  <div>
                    <div className="mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-white/90 text-sm">{category.courses} courses available</p>
                  </div>
                  <Link to="/courses">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full">
                      Browse Courses
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-royal-purple to-electric-violet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're always adding new categories and courses. Let us know what you'd like to learn!
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-royal-purple hover:bg-gray-100">
              Request a Category
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
