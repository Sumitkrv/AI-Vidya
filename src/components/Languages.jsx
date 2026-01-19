import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sectionContent = {
  languages: {
    image: '/final banner.jpg',
    alt: 'Multilingual Learning across India with Odia, Hindi, Marathi, and English',
    showLanguages: true
  },
  skills: {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    alt: 'Modern online learning with coding and skill development',
    title: 'Master In-Demand Skills',
    items: ['Web Development', 'Data Science', 'AI & Machine Learning', 'Mobile App Development', 'Cloud Computing', 'Digital Marketing']
  },
  mentors: {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    alt: 'Professional mentors teaching and guiding students',
    title: 'Learn from Expert Mentors',
    items: ['Industry Professionals', 'Personalized Guidance', 'Live Doubt Solving', 'Career Counseling', 'Project Reviews', '24/7 Support']
  },
  certificates: {
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    alt: 'Achievement certificates and recognition',
    title: 'Earn Recognized Certificates',
    items: ['Government Recognized', 'Industry Accepted', 'Skill India Certified', 'LinkedIn Shareable', 'Portfolio Boost', 'Job Ready']
  }
};

export default function Languages() {
  const [activeSection, setActiveSection] = useState('languages');
  
  const languages = [
    { native: 'ଓଡ଼ିଆ', english: 'Odia', color: '#FF8C42', left: '35%', top: '40%', size: 'text-5xl' },
    { native: 'हिंदी', english: 'Hindi', color: '#FFFFFF', left: '55%', top: '39%', size: 'text-6xl' },
    { native: 'मराठी', english: 'Marathi', color: '#4ECDC4', left: '33%', top: '70%', size: 'text-6xl' },
    { native: 'English', english: 'English', color: '#FF6B9D', left: '55%', top: '71%', size: 'text-5xl' }
  ];

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const buttonStyles = {
    languages: { 
      background: 'linear-gradient(180deg, #343C81 0%, #22215B 100%)',
      boxShadow: '0 4px 12px rgba(34, 33, 91, 0.3), 0 2px 4px rgba(34, 33, 91, 0.2), inset 0 1px 0 rgba(216, 215, 228, 0.15)',
    },
    skills: { 
      background: 'linear-gradient(135deg, #2D3996 0%, #5865F2 100%)' 
    },
    mentors: { 
      background: 'linear-gradient(90deg, #61A5DA 0%, #578AC8 33%, #517BBE 66%, #4869B2 100%)',
      boxShadow: '0 4px 14px rgba(72, 105, 178, 0.25), 0 2px 6px rgba(72, 105, 178, 0.15)',
    },
    certificates: { 
      background: 'linear-gradient(135deg, #ED662B 0%, #FF8C42 100%)' 
    }
  };

  const getActiveStyle = (section) => {
    const isActive = activeSection === section;
    const baseStyle = buttonStyles[section];
    
    if (!isActive) return baseStyle;
    
    switch(section) {
      case 'languages':
        return {
          ...baseStyle,
          boxShadow: '0 0 0 3px rgba(52, 60, 129, 0.3), 0 6px 16px rgba(34, 33, 91, 0.4), 0 3px 6px rgba(34, 33, 91, 0.25), inset 0 1px 0 rgba(216, 215, 228, 0.2)'
        };
      case 'skills':
        return {
          ...baseStyle,
          boxShadow: '0 0 0 3px rgba(88, 101, 242, 0.3), 0 8px 20px rgba(45, 57, 150, 0.4)'
        };
      case 'mentors':
        return {
          ...baseStyle,
          boxShadow: '0 0 0 3px rgba(97, 165, 218, 0.3), 0 8px 20px rgba(72, 105, 178, 0.35), 0 3px 10px rgba(72, 105, 178, 0.2)'
        };
      case 'certificates':
        return {
          ...baseStyle,
          boxShadow: '0 0 0 3px rgba(255, 140, 66, 0.3), 0 8px 20px rgba(237, 102, 43, 0.4)'
        };
      default:
        return baseStyle;
    }
  };

  return (
    <section className="w-full h-screen">
      <div className="w-full h-full flex items-center justify-center bg-white relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            className="w-full h-full absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img
              src={sectionContent[activeSection].image}
              alt={sectionContent[activeSection].alt}
              className={activeSection === 'languages' ? 'w-full h-full object-contain' : 'w-full h-full object-cover'}
            />
            
            {/* Language Labels - Only for Languages Section */}
            {activeSection === 'languages' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {languages.map((lang, index) => (
              <motion.div
                key={lang.native}
                className="absolute"
                style={{ 
                  left: lang.left,
                  top: lang.top,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ 
                  opacity: 0, 
                  scale: 0.8,
                  x: lang.native === 'ଓଡ଼ିଆ' ? -200 : 
                     lang.native === 'मराठी' ? -200 :
                     lang.native === 'हिंदी' ? 200 :
                     lang.native === 'English' ? 200 : 0
                }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  x: 0
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: lang.native === 'ଓଡ଼ିଆ' ? 1.2 : 0.8 + (index * 0.15)
                }}
                viewport={{ once: false }}
              >
                <div 
                  className={`font-bold ${lang.size} text-center leading-tight`}
                  style={{ 
                    color: lang.color,
                    textShadow: lang.color === '#FFFFFF' ? '2px 2px 8px rgba(0,0,0,0.5)' : '2px 2px 6px rgba(0,0,0,0.3)'
                  }}
                >
                  {lang.native}
                </div>
              </motion.div>
            ))}
                </div>
              </div>
            )}
            
            {/* Skills, Mentors, Certificates Content */}
            {activeSection !== 'languages' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center max-w-4xl mx-auto px-8"
                >
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 drop-shadow-2xl">
                    {sectionContent[activeSection].title}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {sectionContent[activeSection].items.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:bg-white/20 transition-all"
                      >
                        <p className="text-white font-semibold text-lg drop-shadow-lg">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Left Side Buttons */}
        <div className="absolute left-[5%] bottom-[15%] flex flex-col gap-3 z-10">
          <motion.button
            className="px-8 py-3 text-white font-semibold rounded-full transition-all text-sm relative overflow-hidden cursor-pointer"
            style={{ 
              ...getActiveStyle('languages'),
              fontFamily: 'system-ui, -apple-system, "SF Pro Display", "Inter", "Poppins", sans-serif',
              fontWeight: 600,
              letterSpacing: '0.3px'
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: false }}
            whileHover={{ 
              scale: 1.08,
              y: -3,
              boxShadow: activeSection === 'languages' 
                ? '0 0 0 3px rgba(52, 60, 129, 0.4), 0 12px 28px rgba(34, 33, 91, 0.5), 0 6px 12px rgba(34, 33, 91, 0.35), inset 0 1px 0 rgba(216, 215, 228, 0.3)'
                : '0 8px 20px rgba(34, 33, 91, 0.5), 0 4px 10px rgba(34, 33, 91, 0.3), inset 0 1px 0 rgba(216, 215, 228, 0.25)'
            }}
            whileTap={{ scale: 0.95, y: 0 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)',
                opacity: 0
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <span className="relative z-10">Languages</span>
          </motion.button>
          
          <motion.button
            className="px-8 py-2.5 text-white font-semibold rounded-full transition-all shadow-lg text-sm relative overflow-hidden cursor-pointer"
            style={{ 
              ...getActiveStyle('skills'),
              fontFamily: 'system-ui, -apple-system, "SF Pro Display", "Inter", "Poppins", sans-serif',
              fontWeight: 600,
              letterSpacing: '0.3px'
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            viewport={{ once: false }}
            whileHover={{ 
              scale: 1.08,
              y: -3,
              boxShadow: activeSection === 'skills'
                ? '0 0 0 3px rgba(88, 101, 242, 0.4), 0 12px 28px rgba(45, 57, 150, 0.6)'
                : '0 10px 24px rgba(45, 57, 150, 0.5)'
            }}
            whileTap={{ scale: 0.95, y: 0 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)',
                opacity: 0
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <span className="relative z-10">Skills</span>
          </motion.button>
          
          <motion.button
            className="px-6 py-2.5 text-white font-semibold rounded-full transition-all shadow-lg text-sm relative overflow-hidden cursor-pointer"
            style={{
              ...getActiveStyle('mentors'),
              fontFamily: 'system-ui, -apple-system, "SF Pro Display", "Inter", "Poppins", sans-serif',
              fontWeight: 600,
              letterSpacing: '0.3px'
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: false }}
            whileHover={{ 
              scale: 1.08,
              y: -3,
              boxShadow: activeSection === 'mentors'
                ? '0 0 0 3px rgba(97, 165, 218, 0.4), 0 12px 28px rgba(72, 105, 178, 0.5), 0 6px 14px rgba(72, 105, 178, 0.3)'
                : '0 10px 24px rgba(72, 105, 178, 0.4), 0 4px 12px rgba(72, 105, 178, 0.25)'
            }}
            whileTap={{ scale: 0.95, y: 0 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)',
                opacity: 0
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <span className="relative z-10 tracking-wide">Mentors</span>
          </motion.button>
          
          <motion.button
            className="px-4 py-2.5 text-[#FFFFFE] font-semibold rounded-full transition-all shadow-lg text-sm relative overflow-hidden cursor-pointer"
            style={{ 
              ...getActiveStyle('certificates'),
              fontFamily: 'system-ui, -apple-system, "SF Pro Display", "Inter", "Poppins", sans-serif',
              fontWeight: 600,
              letterSpacing: '0.3px'
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            viewport={{ once: false }}
            whileHover={{ 
              scale: 1.08,
              y: -3,
              boxShadow: activeSection === 'certificates'
                ? '0 0 0 3px rgba(255, 140, 66, 0.4), 0 12px 28px rgba(237, 102, 43, 0.6)'
                : '0 10px 24px rgba(237, 102, 43, 0.5)'
            }}
            whileTap={{ scale: 0.95, y: 0 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)',
                opacity: 0
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <span className="relative z-10">Certificates & more</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}