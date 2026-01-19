import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Building2, Users } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Software Engineer',
      company: 'TCS',
      companySize: 'Fortune 500',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      rating: 5,
      text: 'AI Vidya completely transformed my career. The courses in Hindi made complex AI concepts so easy to understand. Within 6 months, I got promoted and now work on AI projects at TCS!',
      course: 'AI & Machine Learning'
    },
    {
      id: 2,
      name: 'Rajesh Patel',
      role: 'Data Analyst',
      company: 'Infosys',
      companySize: 'Enterprise',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 5,
      text: 'Learning in Marathi was a game-changer for me. The instructors explain everything so clearly. I went from zero coding knowledge to building real data analysis projects. Highly recommend!',
      course: 'Data Science Fundamentals'
    },
    {
      id: 3,
      name: 'Ananya Das',
      role: 'Student',
      company: 'Bhubaneswar University',
      companySize: 'Education',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      rating: 5,
      text: 'As a student from Odisha, having courses in Odia made all the difference. The quality of education is world-class, and the support from mentors is incredible. Thank you AI Vidya!',
      course: 'Web Development'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Entrepreneur',
      company: 'TechStart Inc',
      companySize: 'Startup',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      rating: 5,
      text: 'AI Vidya helped me understand how to implement AI in my business. The practical approach and Hindi language support made learning seamless. My startup now uses AI for customer service.',
      course: 'AI for Business'
    },
    {
      id: 5,
      name: 'Sneha Kulkarni',
      role: 'Lead Designer',
      company: 'Flipkart',
      companySize: 'Fortune 500',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      rating: 5,
      text: 'The UI/UX courses taught in multiple languages are fantastic. I learned advanced design principles and AI-powered design tools. Now I lead design projects at Flipkart!',
      course: 'UI/UX Design with AI'
    },
    {
      id: 6,
      name: 'Arjun Reddy',
      role: 'DevOps Engineer',
      company: 'Wipro',
      companySize: 'Enterprise',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      rating: 5,
      text: 'Best investment in my career! The DevOps and AI courses are incredibly comprehensive. The certificate helped me land my dream job. The multilingual support is excellent.',
      course: 'DevOps & AI Integration'
    },
  ];

  const stats = [
    { value: '1L+', label: 'Happy Students', icon: Users },
    { value: '4.9/5', label: 'Average Rating', icon: Star },
    { value: '95%', label: 'Completion Rate' },
    { value: '4', label: 'Languages' }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section className="relative section-padding-lg overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,57,150,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(22,53,96,0.02),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#163560]/5 border border-[#163560]/10 mb-8">
            <Star className="w-4 h-4 text-[#163560]" />
            <span className="text-sm font-semibold text-gray-700">Trusted by 1L+ Professionals</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#163560] mb-6 tracking-tight leading-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join professionals from top companies who transformed their careers with AI Vidya
          </p>
        </motion.div>

        {/* Stats Bar - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 grid-gap-md mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="bg-gradient-to-br from-[#163560]/5 to-[#2D3996]/5 backdrop-blur-sm border-2 border-[#163560]/10 rounded-2xl card-padding text-center hover:border-[#163560]/20 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  {Icon && <Icon className="w-5 h-5 text-[#163560]" />}
                  <div className="text-3xl md:text-4xl font-bold text-[#163560]">
                    {stat.value}
                  </div>
                </div>
                <div className="text-gray-600 font-semibold text-sm">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Testimonials Carousel */}
        <div 
          className="relative mb-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 z-10 -translate-y-1/2 px-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white backdrop-blur-sm border border-gray-300 hover:bg-gray-50 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[#163560]/50 focus:ring-offset-2 focus:ring-offset-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-[#163560]" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white backdrop-blur-sm border border-gray-300 hover:bg-gray-50 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[#163560]/50 focus:ring-offset-2 focus:ring-offset-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-[#163560]" />
            </motion.button>
          </div>

          {/* Carousel Content */}
          <div className="relative h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className="absolute inset-0"
              >
                <div className="grid lg:grid-cols-3 grid-gap-md">
                  {[activeIndex, (activeIndex + 1) % testimonials.length, (activeIndex + 2) % testimonials.length].map((index, i) => {
                    const testimonial = testimonials[index];
                    return (
                      <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className={`bg-white backdrop-blur-sm border-2 border-gray-200 rounded-2xl card-padding hover:border-[#163560]/30 hover:shadow-xl transition-all duration-300 shadow-lg ${
                          i === 1 ? 'lg:scale-105 lg:z-10' : ''
                        }`}
                      >
                        {/* Quote Icon */}
                        <div className="absolute top-6 right-6 text-[#163560]/10">
                          <Quote size={32} />
                        </div>

                        {/* Author Info */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="relative">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-14 h-14 rounded-full object-cover border-2 border-[#163560]/20"
                            />
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#2D3996] border-2 border-white flex items-center justify-center">
                              <Building2 className="w-3 h-3 text-white" />
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-[#163560] text-lg">
                                {testimonial.name}
                              </h4>
                              <span className="px-2 py-0.5 bg-[#163560]/10 text-[#163560] text-xs rounded-full">
                                {testimonial.companySize}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">
                              {testimonial.role} at{' '}
                              <span className="font-medium text-gray-700">{testimonial.company}</span>
                            </p>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-6">
                          <div className="flex gap-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star 
                                key={i} 
                                className="text-[#163560] fill-[#163560]" 
                                size={16} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">Verified Graduate</span>
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="relative">
                          <p className="text-base text-gray-700 leading-relaxed mb-6">
                            "{testimonial.text}"
                          </p>
                        </blockquote>

                        {/* Course Badge */}
                        <div className="pt-6 border-t border-gray-200">
                          <span className="text-sm font-medium text-[#163560]">
                            Completed: {testimonial.course}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'w-8 bg-[#163560]' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Live region for screen readers */}
      <div 
        className="sr-only" 
        aria-live="polite" 
        aria-atomic="true"
      >
        Showing testimonial {activeIndex + 1} of {testimonials.length}
      </div>
    </section>
  );
}