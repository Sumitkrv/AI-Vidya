import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function CTASection({ 
  title = "Ready to Transform Your Future?",
  description = "Join 150,000+ professionals who accelerated their careers with expert-led courses",
  primaryText = "Start Free Trial",
  primaryLink = "/pricing",
  secondaryText = "Browse Courses",
  secondaryLink = "/courses",
  variant = "purple" // purple, blue, gradient
}) {
  const variants = {
    purple: 'from-royal-purple to-electric-violet',
    blue: 'from-soft-blue to-electric-violet',
    gradient: 'from-royal-purple via-electric-violet to-soft-blue'
  };

  return (
    <section className={`py-20 bg-gradient-to-br ${variants[variant]}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={primaryLink}>
              <Button size="lg" variant="secondary" className="bg-white text-royal-purple hover:bg-gray-100 hover:shadow-2xl">
                {primaryText}
              </Button>
            </Link>
            {secondaryText && secondaryLink && (
              <Link to={secondaryLink}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  {secondaryText}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
