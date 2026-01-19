import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, Users, Award, Heart, Zap, Shield, 
  Globe, BookOpen, TrendingUp, Star, GraduationCap,
  Rocket, Lightbulb, Users2, Clock, CheckCircle,
  Brain, Sparkles, ArrowRight, ChevronRight, MapPin, Smartphone,
  AlertCircle, HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import Button from '../components/Button';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { 
      label: 'Active Learners', 
      value: '250K+',
      icon: <Users2 size={24} className="text-[#163560]" />,
      description: 'Global community'
    },
    { 
      label: 'Expert Mentors', 
      value: '800+',
      icon: <GraduationCap size={24} className="text-[#163560]" />,
      description: 'Industry leaders'
    },
    { 
      label: 'Courses Available', 
      value: '1,500+',
      icon: <BookOpen size={24} className="text-[#163560]" />,
      description: 'Cutting-edge content'
    },
    { 
      label: 'Success Rate', 
      value: '98.7%',
      icon: <TrendingUp size={24} className="text-[#163560]" />,
      description: 'Career advancement'
    },
    { 
      label: 'Countries', 
      value: '180+',
      icon: <Globe size={24} className="text-[#163560]" />,
      description: 'Global reach'
    },
    { 
      label: 'Avg Rating', 
      value: '4.9/5',
      icon: <Star size={24} className="text-[#163560]" />,
      description: 'Student satisfaction'
    },
  ];

  const values = [
    {
      icon: <Brain size={32} className="text-[#163560]" />,
      title: 'AI-First Learning',
      description: 'Harnessing artificial intelligence to personalize education and accelerate learning outcomes.',
      color: 'from-[#163560]/10 to-[#1e4a8a]/10'
    },
    {
      icon: <Target size={32} className="text-[#163560]" />,
      title: 'Mission-Driven Excellence',
      description: 'Committed to making world-class education accessible and affordable for every learner.',
      color: 'from-[#163560]/10 to-[#1e4a8a]/10'
    },
    {
      icon: <Users size={32} className="text-[#163560]" />,
      title: 'Global Community',
      description: 'Building the world\'s largest network of learners who support and inspire each other.',
      color: 'from-[#163560]/10 to-[#1e4a8a]/10'
    },
    {
      icon: <Sparkles size={32} className="text-[#163560]" />,
      title: 'Innovation at Core',
      description: 'Pioneering the future of education with cutting-edge technology and teaching methodologies.',
      color: 'from-[#163560]/10 to-[#1e4a8a]/10'
    },
    {
      icon: <Award size={32} className="text-[#163560]" />,
      title: 'Quality First',
      description: 'Only industry-vetted courses from top experts make it to our rigorous curriculum.',
      color: 'from-[#163560]/10 to-[#1e4a8a]/10'
    },
    {
      icon: <Shield size={32} className="text-[#163560]" />,
      title: 'Trust & Integrity',
      description: 'Your success is our success. We\'re committed to your complete learning journey.',
      color: 'from-[#163560]/10 to-[#1e4a8a]/10'
    },
  ];

  const milestones = [
    { year: '2020', title: 'Founded', description: 'AI Vidya launched with 10 pioneering courses' },
    { year: '2021', title: 'Global Expansion', description: 'Reached learners in 50+ countries' },
    { year: '2022', title: 'AI Integration', description: 'Introduced personalized AI learning paths' },
    { year: '2023', title: 'Unicorn Status', description: '100K+ learners, $100M valuation' },
    { year: '2024', title: 'Industry Leader', description: 'Top-rated platform with 250K+ learners' },
  ];

  const team = [
    {
      name: 'Dr. Arjun Sharma',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face',
      expertise: ['AI Research', 'EdTech Innovation', 'Neuroscience'],
      badge: 'Featured'
    },
    {
      name: 'Priya Patel',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face',
      expertise: ['Machine Learning', 'Scalable Systems', 'Data Engineering'],
      badge: 'AI Expert'
    },
    {
      name: 'Rohan Verma',
      role: 'Head of Learning',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face',
      expertise: ['Curriculum Design', 'Pedagogy', 'Assessment'],
      badge: 'Education'
    },
    {
      name: 'Ananya Kapoor',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face',
      expertise: ['UX Research', 'Product Strategy', 'Growth'],
      badge: 'Innovation'
    },
  ];

  const features = [
    {
      title: 'Personalized Learning Paths',
      description: 'AI-driven recommendations tailored to your goals and pace',
      icon: <Brain size={24} />
    },
    {
      title: 'Live Interactive Sessions',
      description: 'Real-time mentorship from industry experts',
      icon: <Users size={24} />
    },
    {
      title: 'Project-Based Learning',
      description: 'Build real portfolio projects that matter',
      icon: <Lightbulb size={24} />
    },
    {
      title: 'Career Support',
      description: 'Job placement assistance and career coaching',
      icon: <Rocket size={24} />
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/about video.mov" type="video/mp4" />
          </video>
        </div>
        
        <div className="max-w-7xl mx-auto container-padding relative z-10 py-20 min-h-screen flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full pt-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white" style={{ textShadow: '2px 4px 8px rgba(0, 0, 0, 0.8)' }}>
              Redefining Education with
              <span className="block text-white mt-2">Artificial Intelligence</span>
            </h1>
          </motion.div>
            
          <div className="flex flex-col sm:flex-row gap-4 justify-center pb-12">
            <Link to="/courses">
              <Button 
                size="md"
                variant="secondary"
                className="gap-2 shadow-xl hover:shadow-2xl bg-white !text-black hover:bg-white/90"
              >
                Explore Courses
                <ArrowRight size={18} className="text-black" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                size="md"
                variant="outline"
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="relative z-20 py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#163560] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-900 mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto container-padding relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4" icon={Rocket}>
                Our Journey
              </Badge>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                From Vision to <span className="text-[#163560]">Revolution</span>
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Founded in 2020 by AI researchers and educators, AI Vidya began with a radical vision: 
                  to democratize quality education through artificial intelligence.
                </p>
                
                <p>
                  What started as a research project at Stanford University has transformed into a 
                  global platform serving over 250,000 learners across 180 countries. Our AI-powered 
                  learning engine personalizes education like never before.
                </p>
                
                <p>
                  Today, we're not just an edtech company; we're a movement. A movement to make 
                  world-class education accessible, affordable, and effective for everyone, 
                  everywhere. We're building the future of learning, one intelligent lesson at a time.
                </p>
              </div>

              {/* Milestones */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Milestones</h3>
                <div className="flex overflow-x-auto pb-4 gap-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex-shrink-0 w-48">
                      <div className="text-2xl font-bold text-[#163560]">{milestone.year}</div>
                      <div className="font-medium text-gray-900">{milestone.title}</div>
                      <div className="text-sm text-gray-600">{milestone.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative lg:pl-8"
            >
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-200">
                <img
                  src="/image.jpg"
                  alt="AI Learning Environment"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative bg-gradient-to-b from-white to-slate-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-blue-50 rounded-full mb-6 border border-blue-100">
              <Heart className="w-4 h-4 text-[#163560]" />
              <span className="text-xs font-bold text-[#163560] tracking-wider uppercase">Our Purpose</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Driving India Towards <span className="bg-gradient-to-r from-[#163560] to-blue-600 bg-clip-text text-transparent">Digital Equality</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#163560] to-blue-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 lg:p-10 border-2 border-slate-200 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#163560] to-blue-600 rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  To create India's largest rural digital learning backbone where every student, youth, and adult — regardless of location, financial background, or access — can receive modern, affordable, AI-powered education from home.
                </p>
                <div className="space-y-3">
                  {[
                    "Education reaches villages, tribal belts, border areas",
                    "AI supports learners 24×7",
                    "Rural students get same quality as metro cities",
                    "Digital literacy reaches every household"
                  ].map((point, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-[#163560] flex-shrink-0" />
                      <p className="text-slate-600">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 lg:p-10 border-2 border-slate-200 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  To redefine education in rural India by democratizing access to world-class, AI-driven learning—making quality instruction available to every learner, regardless of location or circumstance.
                </p>
                <div className="space-y-3">
                  {[
                    "Geography is no longer destiny",
                    "140M+ rural Indians have equal opportunity",
                    "Every learner can learn, grow, and succeed",
                    "Building an inclusive, AI-enabled India"
                  ].map((point, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <p className="text-slate-600">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* What Drives Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#163560]/10 via-blue-100 to-[#163560]/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 lg:p-10 border-2 border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">What Drives Us</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Target, title: "Passion for Social Impact", color: "from-[#EB5E26] to-orange-500" },
                  { icon: GraduationCap, title: "Expertise in Digital Education", color: "from-blue-500 to-blue-600" },
                  { icon: TrendingUp, title: "Commitment to Bridge Urban-Rural Gap", color: "from-[#163560] to-blue-700" }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-lg font-semibold text-slate-700 mt-8 italic">
                AI Vidya is more than a learning platform—it is a movement towards an inclusive, AI-enabled India.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Audience & Regions */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white section-padding-lg">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-blue-50 rounded-full mb-6 border border-blue-100">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">Who We Serve</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Reaching <span className="bg-gradient-to-r from-[#163560] to-blue-600 bg-clip-text text-transparent">Bharat's Heartland</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Target Audience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-100 to-blue-200/50 rounded-2xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 lg:p-10 border-2 border-blue-100 shadow-xl h-full flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Target Audience</h3>
                <ul className="space-y-4 mb-6 flex-grow">
                  {[
                    "Students, youth and job-seekers from Tier-3 towns, villages, tribal and rural districts",
                    "Schools with limited teachers seeking digital solutions",
                    "Parents seeking affordable quality education",
                    "Youth preparing for competitive exams or wanting digital skills",
                    "Working individuals & homemakers seeking upskilling"
                  ].map((audience, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-slate-700">{audience}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <p className="text-center font-bold text-blue-900">
                    <span className="text-3xl">85%</span> of learners from rural & tier-3 areas report improved career prospects
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Focus Regions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-100 to-blue-200/50 rounded-2xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 lg:p-10 border-2 border-blue-100 shadow-xl h-full flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Priority Regions</h3>
                <div className="space-y-4 mb-6 flex-grow">
                  {[
                    "Odisha - Remote & tribal districts",
                    "Bihar - Rural belts with educational gaps",
                    "Northeast States - Hill regions & border areas",
                    "Jharkhand - Tribal & backward regions",
                    "Rajasthan - Desert & remote villages",
                    "Himachal Pradesh - Hill & tribal areas"
                  ].map((region, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-slate-700">{region}</span>
                    </div>
                  ))}
                </div>
                <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <p className="text-center font-bold text-blue-900">
                    <span className="text-3xl">140M+</span> students in rural areas are potential beneficiaries
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Government Alignment Section */}
      <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-orange-50 to-green-50 rounded-full mb-6 border border-orange-100">
              <Globe className="w-4 h-4 text-[#163560]" />
              <span className="text-xs font-bold text-[#163560] tracking-wider uppercase">National Alignment</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Aligned with India's <span className="text-[#163560]">National Goals</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              AI Vidya supports government initiatives to build a digitally empowered and skilled India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              { title: "Digital India", image: "/digital-india.jpeg" },
              { title: "Skill India", image: "/skill-india.png" },
              { title: "NEP 2020", image: "/nep-2020.jpeg" },
              { title: "AI For All", image: "/ai-for-all.jpeg" },
              { title: "Viksit Bharat @2047", image: "/viksit-bharat.jpeg" }
            ].map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-300 transition-all shadow-lg hover:shadow-xl">
                  <div className="w-full h-32 flex items-center justify-center mb-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-4">
                    <img 
                      src={initiative.image} 
                      alt={initiative.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm text-center">{initiative.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-200 via-white to-green-200 rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-orange-50 via-white to-green-50 rounded-2xl p-8 lg:p-10 border-2 border-orange-100">
              <p className="text-center text-xl md:text-2xl font-bold text-slate-900">
                AI Vidya is not just a platform — it is a{' '}
                <span className="bg-gradient-to-r from-[#163560] to-blue-600 bg-clip-text text-transparent">
                  national capacity-building initiative
                </span>{' '}
                dedicated to creating an inclusive, knowledge-rich, and tech-empowered Bharat.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real Impact & Why Choose AI Vidya */}
      <section className="relative bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose <span className="text-[#163560]">AI Vidya</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Empowering every learner with accessible, intelligent, and impactful education
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* For Students & Youth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full border-2 border-slate-200 hover:border-[#163560] hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#163560] flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">For Students & Youth</h3>
                </div>
                <ul className="space-y-3.5">
                  {[
                    "Learn anytime, anywhere - even in low-internet areas",
                    "Affordable subscription plans for every family",
                    "Visual, multilingual explanations",
                    "AI-based personalized learning paths",
                    "Doubt-clearing without fear",
                    "Career & competitive exam guidance",
                    "Digital, employability & life skills included"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-base text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#163560] mt-2 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* For Parents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full border-2 border-slate-200 hover:border-[#163560] hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#163560] flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">For Parents</h3>
                </div>
                <ul className="space-y-3.5">
                  {[
                    "Transparent learning reports & progress tracking",
                    "Safe & structured learning platform",
                    "Affordable alternative to coaching centres",
                    "Quality education at fraction of tuition cost",
                    "Monitor your child's learning journey",
                    "Peace of mind with verified content"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-base text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#163560] mt-2 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* For Schools / Government */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full border-2 border-slate-200 hover:border-[#163560] hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#163560] flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">For Schools / Government</h3>
                </div>
                <ul className="space-y-3.5">
                  {[
                    "Scalable model for rural upliftment",
                    "Support government schools with digital learning",
                    "Addresses NEP, Skill India & Digital India goals",
                    "High social impact with measurable outputs",
                    "Bridge teacher shortage gaps",
                    "Data-driven insights for policy making"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-base text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#163560] mt-2 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4" icon={Zap}>
                What Makes Us Different
              </Badge>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                The <span className="text-[#163560]">AI Vidya</span> Advantage
              </h2>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#163560]/10 to-[#1e4a8a]/10 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-[#163560] to-[#1e4a8a] text-white rounded-2xl p-8 shadow-xl"
                >
                  <div className="text-4xl font-bold mb-2">40x</div>
                  <div className="text-lg font-medium">Faster Learning</div>
                  <div className="text-sm opacity-90 mt-2">With AI personalization</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-[#163560] to-[#1e4a8a] text-white rounded-2xl p-8 shadow-xl"
                >
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-lg font-medium">Career Impact</div>
                  <div className="text-sm opacity-90 mt-2">Job placement success</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="col-span-2 bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-[#163560]">24/7</div>
                      <div className="text-lg font-medium text-gray-900">AI Tutor Support</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#163560]/10 to-[#1e4a8a]/10 flex items-center justify-center">
                      <Brain size={24} className="text-[#163560]" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4 mx-auto" icon={Users}>
              Meet the Visionaries
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Leadership That <span className="text-[#163560]">Inspires</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class experts dedicated to transforming education through technology
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="accent" size="sm">
                      {member.badge}
                    </Badge>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#163560] font-medium mb-3">{member.role}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#4151a3] via-[#23255f] to-[#23255f] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Badge 
              variant="accent" 
              className="mb-6 mx-auto bg-white/10 backdrop-blur-sm border-white/20"
              icon={Rocket}
            >
              Join the Revolution
            </Badge>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="block text-[#EB5E26]">Learning Journey?</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join 250,000+ learners who have accelerated their careers with AI-powered education. 
              Start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button
                  size="xl"
                  variant="secondary"
                  className="bg-gradient-to-r from-[#163560] to-[#1e4a8a] text-white shadow-2xl px-8 py-4 text-lg"
                >
                  <Rocket size={24} className="mr-2" />
                  Start Learning Free
                </Button>
              </Link>
              
              <Link to="/courses">
                <Button
                  size="xl"
                  variant="ghost"
                  className="text-white border-2 border-white/30 hover:bg-white/10 px-8 py-4 text-lg"
                >
                  Explore All Courses
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <Clock size={32} className="mx-auto mb-2 opacity-80" />
                  14-Day
                </div>
                <div className="text-white/80">Free Trial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <CheckCircle size={32} className="mx-auto mb-2 opacity-80" />
                  30-Day
                </div>
                <div className="text-white/80">Money Back Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  <Shield size={32} className="mx-auto mb-2 opacity-80" />
                  24/7
                </div>
                <div className="text-white/80">AI Tutor Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}