import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const CourseCard = ({ course, index = 0 }) => {
  const { icon: Icon, title, description, items, gradient, borderColor, iconColor, tagline } = course;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group h-full"
    >
      <div className={`absolute -inset-1 bg-gradient-to-br ${gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
      <div className={`relative bg-white rounded-2xl card-padding border-2 ${borderColor} hover:border-[#4151a3] hover:border-opacity-100 transition-all duration-300 shadow-lg hover:shadow-2xl h-full flex flex-col`}>
        <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-base text-slate-600 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3 mb-6 flex-grow">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
              <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <div className="pt-4 mt-auto border-t border-slate-200">
          <p className="text-sm text-slate-500 leading-relaxed">{tagline}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
