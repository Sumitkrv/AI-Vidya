import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -8 } : {}}
      className={clsx(
        'bg-white rounded-2xl border border-gray-200 overflow-hidden transition-shadow duration-300',
        hover && 'hover:shadow-xl hover:shadow-purple-100',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
