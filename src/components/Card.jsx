import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={clsx(
        'bg-white rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300',
        hover && 'hover:shadow-xl hover:border-gray-300',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
