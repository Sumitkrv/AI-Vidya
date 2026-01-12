import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Languages() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  
  return (
    <section ref={ref} className="w-full h-screen">
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <motion.img 
          src="/language new.png" 
          alt="Why is AI Vidya - Multilingual Learning across India with Odia, Hindi, Marathi, and English"
          className="w-full h-full object-contain"
          style={{ scale, opacity }}
        />
      </div>
    </section>
  );
}