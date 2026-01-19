import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoHeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    const handleTimeUpdate = () => {
      // Show content at 7 seconds
      if (video.currentTime >= 7 && video.currentTime < video.duration - 0.5 && !showContent) {
        setShowContent(true);
      }
      // Hide content when video is about to loop (near the end or at the beginning)
      if ((video.currentTime < 7 || video.currentTime >= video.duration - 0.5) && showContent) {
        setShowContent(false);
      }
    };

    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (video) {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [showContent]);

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Full Background Video (Looping) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bot.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content that slides in from left at 7 seconds */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-0 top-24 md:top-32 max-w-3xl mx-auto container-padding z-10"
          >
            <div className="card-padding">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.6, ease: 'easeOut' }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="text-black whitespace-nowrap">Thrive with Real-Time</span>
                <br />
                <span className="text-[#5B6DB8] italic whitespace-nowrap">Access to 500+ Mentors</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
                className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
              >
                Expert-designed courses, mentorship in your field, and guidance in your language- so nothing holds you back from the Top
              </motion.p>
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6, ease: 'easeOut' }}
                className="px-10 py-4 bg-[#5B6DB8] text-white text-base font-semibold rounded-lg hover:bg-[#4A5BA0] transition-all duration-300"
              >
                Connect with us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoHeroSection;
