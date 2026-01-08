import { motion } from 'framer-motion';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    { icon: <BookOpen size={24} />, value: '1,000+', label: 'Expert-Led Courses' },
    { icon: <Users size={24} />, value: '150K+', label: 'Active Learners' },
    { icon: <Award size={24} />, value: '500+', label: 'Top Instructors' },
    { icon: <TrendingUp size={24} />, value: '99.5%', label: 'Success Rate' },
  ];

  return (
    <section className="bg-white py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3 text-royal-purple">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
