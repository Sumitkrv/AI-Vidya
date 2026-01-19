import { motion } from 'framer-motion';
import { Video, FileText, HelpCircle, Award, Play, Sparkles, Users, Target, ChevronRight, Star, BookOpen, Brain, Briefcase, Smartphone, CheckCircle, Globe, Heart, TrendingUp, MapPin, Lightbulb, Clock, ArrowRight, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Languages from '../components/Languages';
import PricingSection from '../components/PricingSection';
import VideoHeroSection from '../components/VideoHeroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { courses } from '../data/courses';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen">
        {/* Full Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'right center' }}
        >
          <source src="/new hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Hero Tagline Overlay */}
        <div className="absolute inset-0 flex items-center py-20">
          <div className="w-full max-w-7xl mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl"
            >
              <div className="mb-6">
                <span className="text-[#163560] font-semibold text-sm tracking-widest uppercase">AI VIDYA | Government of INDIA</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight">
                <span>MAKING <span className="text-[#EB5E26]">INDIA</span></span><br />
                <span>READY FOR THE</span><br />
                <span className="text-[#163560]">FUTURE WITH AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-black mb-8 leading-relaxed max-w-2xl">
                AI ISN'T JUST FOR TECH ANYMORE - IT'S CHANGING<br />
                HEALTHCARE, FASHION, BUSINESS, AND DESIGN. AT <span className="font-bold text-[#163560]">AI<br />
                VIDYA</span>, WE MAKE LEARNING AI SIMPLE, SO YOU CAN GROW IN<br />
                YOUR FIELD AND STAY ON TOP.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <button className="px-10 py-4 bg-[#163560] text-white font-bold text-base rounded-lg hover:bg-[#12274b] transition-all duration-300 flex items-center justify-center gap-2">
                  REGISTER NOW
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="relative bg-white section-padding-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white"></div>
        
        <div className="relative max-w-7xl mx-auto container-padding">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#4151a3] rounded-full mb-8 border border-[#23255f]">
              <div className="w-2 h-2 bg-[#23255f] rounded-full"></div>
              <span className="text-xs font-bold text-white tracking-wider uppercase">The Challenge We're Solving</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Bridging India's <span className="text-black">Education Divide</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Problem Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[#4151a3]/10 to-[#23255f]/10 rounded-3xl blur-2xl opacity-60"></div>
              <div className="relative bg-white rounded-2xl p-8 lg:p-10 border-2 border-[#4151a3] shadow-xl h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4151a3] to-[#23255f] rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#23255f]">The Problem</h3>
                </div>
                
                <div className="space-y-3.5 flex-grow">
                  {[
                    "Lack of quality teachers & updated resources in rural areas",
                    "No digital infrastructure in Odisha, Bihar, NE states, tribal belts",
                    "Urban students advance while rural youth fall behind",
                    "Limited English proficiency blocks national-level content",
                    "Families can't afford high-priced tuitions",
                    "No access to exam prep, skill development & career guidance"
                  ].map((problem, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#4151a3]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 text-[#4151a3]" />
                      </div>
                      <p className="text-[#23255f] text-[15px] leading-relaxed">{problem}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-5 bg-[#4151a3]/10 rounded-xl border-2 border-[#4151a3]">
                  <p className="text-[#23255f] font-semibold text-center">
                    <span className="text-3xl font-bold">140M+</span> rural students lack access to quality education
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Solution Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[#163560]/20 to-blue-100/50 rounded-3xl blur-2xl opacity-60"></div>
              <div className="relative bg-gradient-to-br from-[#163560] to-blue-900 rounded-2xl p-8 lg:p-10 border-2 border-[#163560] shadow-xl h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">Our Solution</h3>
                </div>
                
                <div className="space-y-3.5 flex-grow">
                  {[
                    "AI-powered learning in 12+ regional languages",
                    "Online courses accessible from any home - no travel needed",
                    "Offline-friendly for low-internet regions",
                    "Affordable plans starting from ₹4,999/year",
                    "24/7 AI assistant for instant doubt clearing",
                    "Academic + Skill + Career courses on one platform",
                    "Smart assessments with personalized feedback"
                  ].map((solution, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-white" />
                      </div>
                      <p className="text-white/95 text-[15px] leading-relaxed">{solution}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 bg-white/10 backdrop-blur rounded-xl border-2 border-white/30">
                  <p className="text-white font-semibold text-center leading-relaxed">
                    Education for Bharat, by Bharat, towards <span className="font-bold">Viksit Bharat @2047</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Categories Showcase */}
      <section className="relative bg-white py-8 md:py-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#163560]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-50 rounded-full mb-8 border border-blue-100">
              <BookOpen className="w-4 h-4 text-[#163560]" />
              <span className="text-xs font-bold text-[#163560] tracking-wider uppercase">Comprehensive Learning</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Courses Designed for <span className="text-[#4151a3]">Every Learner</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {courses.slice(0, 3).map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
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
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">₹{course.price}</span>
                        <span className="text-sm text-gray-400 line-through ml-2">₹{course.originalPrice}</span>
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

          {/* AI-Powered Features Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-2xl opacity-20 blur-xl"></div>
            <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-10 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">AI-Powered Learning Tools</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { icon: HelpCircle, text: "24/7 AI Assistant" },
                  { icon: FileText, text: "AI-Generated Notes" },
                  { icon: Target, text: "Personalized Paths" },
                  { icon: Award, text: "Practice Sheets & Tests" },
                  { icon: TrendingUp, text: "Progress Tracking" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-xl p-4 border border-blue-100">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-slate-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* View All Courses Button */}
          <div className="text-center">
            <Link to="/courses">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#4151a3] text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all"
              >
                VIEW ALL COURSES
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <Languages />

      {/* Pricing Section */}
      <PricingSection />

      {/* Impact & Benefits Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 lg:py-32">
        {/* ...existing code... */}
      </section>

      {/* Video Hero Section */}
      <VideoHeroSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
};

export default Home;