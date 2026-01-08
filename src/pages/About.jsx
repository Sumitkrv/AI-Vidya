import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, Users, Award, Heart, Zap, Shield, 
  Globe, BookOpen, TrendingUp, Star, GraduationCap,
  Rocket, Lightbulb, Users2, Clock, CheckCircle,
  Brain, Sparkles, ArrowRight
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#163560] via-[#163560] to-[#1e4a8a] py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23163560' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" 
          }}></div>
        </div>
        
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#163560]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#163560]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
           
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Redefining Education with
              <span className="block text-[#163560] mt-2">Artificial Intelligence</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              AI Vidya bridges the gap between ambition and achievement through personalized, 
              intelligent learning experiences that adapt to every student's unique journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button 
                  size="lg"
                  variant="secondary"
                  className="gap-2 shadow-xl hover:shadow-2xl"
                >
                  Explore Courses
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 relative -mt-12 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#163560]/10 to-[#1e4a8a]/10 mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#163560] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
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
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="AI Learning Environment"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#163560]/60 to-transparent" />
                
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-[#163560]">98.7%</div>
                      <div className="text-sm text-gray-600">Student Satisfaction</div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <Badge variant="accent" className="mb-4 mx-auto" icon={Sparkles}>
              Our Philosophy
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Core Values That <span className="text-[#163560]">Drive Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that shape every decision, every course, and every interaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`bg-gradient-to-br ${value.color} rounded-3xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-300`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#163560] via-[#163560] to-[#1e4a8a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23163560' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
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