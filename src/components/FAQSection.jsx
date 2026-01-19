import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare, Sparkles, Users, Zap, Shield, Globe } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'Creating an account is simple! Click the "Sign Up" button in the top right corner, enter your email and create a password. You can also sign up using your Google or Facebook account for faster access.',
      icon: Users,
      color: 'from-[#163560] to-[#2D3996]'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 14-day free trial for all our paid plans. You can explore all features without entering credit card information. Cancel anytime during the trial period without any charges.',
      icon: Zap,
      color: 'from-[#2D3996] to-[#4A5FC1]'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), UPI, net banking, and digital wallets. All payments are processed securely through our payment partners.',
      icon: Shield,
      color: 'from-[#163560] to-[#2D3996]'
    },
    {
      question: 'Can I get a refund?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase for any reason, contact our support team within 30 days of purchase for a full refund.',
      icon: Sparkles,
      color: 'from-[#2D3996] to-[#4A5FC1]'
    },
    {
      question: 'How long do I have access to a course?',
      answer: 'Once you enroll in a course, you have lifetime access to all its content, including future updates. Learn at your own pace without any time restrictions.',
      icon: Globe,
      color: 'from-[#163560] to-[#2D3996]'
    },
    {
      question: 'Do I get a certificate after completing a course?',
      answer: 'Yes! Pro and Enterprise plan subscribers receive a certificate of completion for every course they finish. Certificates are shareable on LinkedIn and can be downloaded as PDF.',
      icon: HelpCircle,
      color: 'from-[#2D3996] to-[#4A5FC1]'
    },
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      title: "Interactive Learning",
      description: "Engage with our interactive course materials"
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w-600&q=80",
      title: "Community Support",
      description: "Join thousands of learners in our community"
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
      title: "Expert Instructors",
      description: "Learn from industry professionals"
    }
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section className="relative py-28 overflow-hidden min-h-screen">
      {/* Background Enhancements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#163560] via-[#2D3996] to-[#163560]">
        {/* Animated Gradient Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-[#4A5FC1]/5 via-transparent to-[#163560]/5 animate-[spin_30s_linear_infinite]" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2D3996]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#163560]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Image Display */}
            <motion.div
              key={activeImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2D3996]/20 to-[#163560]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={images[activeImageIndex].src}
                    alt={images[activeImageIndex].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {images[activeImageIndex].title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-white/80"
                  >
                    {images[activeImageIndex].description}
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Image Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveImageIndex(index)}
                  onHoverStart={() => setActiveImageIndex(index)}
                  className={`relative group aspect-video rounded-xl overflow-hidden transition-all duration-300 ${
                    activeImageIndex === index 
                      ? 'ring-2 ring-[#2D3996] ring-offset-2 ring-offset-[#163560] scale-105' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    index === 0 ? 'from-[#2D3996]/20' : 
                    index === 1 ? 'from-[#163560]/20' : 
                    'from-[#4A5FC1]/20'
                  } opacity-0 group-hover:opacity-100 transition-opacity`} />
                </motion.button>
              ))}
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">500K+</div>
                  <div className="text-white/60 text-sm">Happy Learners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#163560] to-[#2D3996] bg-clip-text text-transparent">98%</div>
                  <div className="text-white/60 text-sm">Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">24/7</div>
                  <div className="text-white/60 text-sm">Support</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="text-left mb-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2D3996] to-[#163560] rounded-full blur-lg opacity-30 animate-pulse" />
                  <div className="relative p-3 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                    <HelpCircle className="text-white" size={32} />
                  </div>
                </div>
                <span className="text-sm font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Got Questions? <br />
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  We Have Answers.
                </span>
              </h2>
              <p className="text-white/60 text-lg max-w-xl">
                Everything you need to know about our platform. Can't find what you're looking for? 
                Our support team is always here to help.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const Icon = faq.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="relative group"
                  >
                    <motion.div
                      className={`relative bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-xl 
                        border border-white/10 rounded-2xl overflow-hidden
                        ${openIndex === index ? 'shadow-2xl shadow-black/30' : 'shadow-lg shadow-black/10'}
                        hover:shadow-xl hover:shadow-black/20 transition-all duration-300`}
                      animate={{
                        borderColor: openIndex === index ? 'rgba(255,140,66,0.3)' : 'rgba(255,255,255,0.1)',
                      }}
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full px-6 py-5 flex items-start gap-4 text-left 
                          hover:bg-white/[0.02] transition-colors duration-200 
                          focus:outline-none focus:ring-2 focus:ring-[#2D3996]/30 rounded-2xl"
                      >
                        {/* Icon */}
                        <div className={`relative flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${faq.color} 
                          ${openIndex === index ? 'shadow-lg shadow-[#2D3996]/20' : ''}`}>
                          <Icon className="text-white" size={20} />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <motion.span 
                              className="text-lg font-semibold text-white pr-8"
                              animate={{ 
                                color: openIndex === index ? '#FFFFFF' : hoveredIndex === index ? '#F3F4F6' : '#FFFFFF'
                              }}
                            >
                              {faq.question}
                            </motion.span>
                            
                            <motion.div
                              className="relative flex-shrink-0"
                              animate={{ 
                                rotate: openIndex === index ? 180 : 0,
                              }}
                              transition={{ 
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                              }}
                            >
                              <ChevronDown 
                                className={`transition-colors duration-200 ${
                                  openIndex === index ? 'text-orange-400' : 'text-white/70'
                                }`} 
                                size={20} 
                              />
                            </motion.div>
                          </div>
                          
                          <AnimatePresence initial={false}>
                            {openIndex === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ 
                                  height: 'auto', 
                                  opacity: 1,
                                }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <motion.div
                                  initial={{ y: -10 }}
                                  animate={{ y: 0 }}
                                  className="pt-4 mt-2 border-t border-white/10"
                                >
                                  <p className="text-white/70 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </motion.div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </button>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/10"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
                  <p className="text-white/60">Our team is here to help you 24/7</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 
                    text-white font-semibold rounded-xl 
                    shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30
                    transition-all duration-300 overflow-hidden flex items-center gap-2"
                >
                  <MessageSquare size={18} />
                  Contact Support
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}