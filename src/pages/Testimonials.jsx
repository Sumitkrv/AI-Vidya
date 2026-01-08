
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const testimonials = [
    {
      id: 1,
      name: 'Emily Rodriguez',
      role: 'Product Designer at Figma',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      rating: 5,
      text: 'This platform completely changed my career trajectory. The UI/UX courses were incredibly comprehensive and practical. Within 6 months, I landed my dream job at Figma. The instructors are world-class and the community support is amazing.',
      course: 'Advanced UI/UX Masterclass'
    },
    {
      id: 2,
      name: 'James Park',
      role: 'Senior Developer at Google',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 5,
      text: 'The quality of instruction is unmatched. Worth every penny. I\'ve taken courses on multiple platforms, but the depth and clarity here are exceptional. The Full-Stack course gave me the skills to transition from junior to senior developer.',
      course: 'Full-Stack Web Development'
    },
    {
      id: 3,
      name: 'Lisa Chen',
      role: 'Mobile Developer at Spotify',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      rating: 5,
      text: 'I went from beginner to building real apps in 3 months! The project-based learning approach helped me create a portfolio that impressed employers. Now I\'m building features used by millions of users. Thank you for making this possible!',
      course: 'Mobile App Development'
    },
    {
      id: 4,
      name: 'Michael Torres',
      role: 'Data Scientist at Microsoft',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      rating: 5,
      text: 'The AI and Machine Learning courses are incredibly well-structured. Complex concepts are broken down into digestible lessons. The hands-on projects helped me build a strong portfolio that landed me my current position.',
      course: 'AI & Machine Learning'
    },
    {
      id: 5,
      name: 'Sarah Williams',
      role: 'Marketing Manager at HubSpot',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      rating: 5,
      text: 'Best investment in my career! The digital marketing courses taught me strategies that increased our company\'s online presence by 300%. The ROI on this education has been phenomenal. Highly recommend to anyone in marketing.',
      course: 'Digital Marketing Strategy'
    },
    {
      id: 6,
      name: 'David Kim',
      role: 'Freelance Designer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      rating: 5,
      text: 'As a self-taught designer, these courses filled all the gaps in my knowledge. The structured curriculum and expert feedback helped me refine my skills. I\'ve doubled my freelance rates since completing the design courses.',
      course: 'Graphic Design Pro'
    },
    {
      id: 7,
      name: 'Rachel Green',
      role: 'Content Creator',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      rating: 5,
      text: 'The video editing and content creation courses transformed my YouTube channel. I went from 1,000 to 100,000 subscribers in less than a year. The production techniques I learned here set my content apart from the competition.',
      course: 'Video Editing Masterclass'
    },
    {
      id: 8,
      name: 'Alex Johnson',
      role: 'Software Engineer at Amazon',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
      rating: 5,
      text: 'The depth of knowledge and practical application in these courses is outstanding. I learned more in 3 months here than in my entire computer science degree. The career support team even helped me prepare for FAANG interviews.',
      course: 'Full-Stack Development'
    },
    {
      id: 9,
      name: 'Maria Garcia',
      role: 'UX Researcher at Adobe',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      rating: 5,
      text: 'These courses don\'t just teach theory - they prepare you for real-world challenges. The user research methodologies I learned are exactly what we use at Adobe. The certificate also helped me stand out during the hiring process.',
      course: 'UX Research Fundamentals'
    }
  ];

  const stats = [
    { value: '150K+', label: 'Happy Students' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '95%', label: 'Completion Rate' },
    { value: '98%', label: 'Would Recommend' }
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
              Loved by Learners Worldwide
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of students who transformed their careers through our expert-led courses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-royal-purple to-electric-violet bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section ref={ref} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-4">
                  <Quote className="text-royal-purple" size={40} />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-royal-purple mt-1">{testimonial.course}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from our students about their learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'From Beginner to Developer', duration: '3:45' },
              { title: 'Career Change Success', duration: '4:20' },
              { title: 'Freelance Income Growth', duration: '3:15' }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-64 flex items-center justify-center group cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-royal-purple/20 to-electric-violet/20 group-hover:opacity-100 opacity-0 transition-opacity" />
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-royal-purple ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{video.title}</h3>
                  <p className="text-gray-400 text-sm">{video.duration}</p>
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our community of successful learners and transform your career today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <button className="px-8 py-4 bg-white text-royal-purple font-semibold rounded-xl hover:shadow-xl transition-all">
                Start Free Trial
              </button>
            </Link>
            <Link to="/courses">
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                View All Courses
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
