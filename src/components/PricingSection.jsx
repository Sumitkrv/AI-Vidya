import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  X,
  Sparkles, 
  Zap, 
  Building, 
  Star,
  ChevronRight,
  Award,
  TrendingUp,
  Shield,
  Filter,
  XCircle,
  Plus,
  Minus,
  Download as DownloadIcon,
  Users,
  Clock
} from 'lucide-react';
import { useState, useRef } from 'react';
import { courses } from '../data/courses';

export default function EnhancedPricingSection() {
  const [activePlan, setActivePlan] = useState('pro');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [priceMode, setPriceMode] = useState('monthly');
  const [showComparison, setShowComparison] = useState(false);
  const [expandedPlans, setExpandedPlans] = useState({
    starter: false,
    pro: false,
    enterprise: false
  });
  const [expandedFeatures, setExpandedFeatures] = useState({
    starter: false,
    pro: false,
    enterprise: false
  });
  const [showCourses, setShowCourses] = useState({
    starter: false,
    pro: false,
    enterprise: false
  });
  const comparisonRef = useRef(null);

  // Color definitions
  const COLORS = {
    primary: '#4151a3',
    darkBlue: '#23255f',
    lightBlue: '#eef0fa',
    white: '#ffffff',
    black: '#000000',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    }
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      tagline: 'Begin Your Journey',
      description: 'Perfect for beginners',
      monthlyPrice: '₹2,999',
      yearlyPrice: '₹35,888',
      period: 'INR/month',
      billedYearly: 'billed yearly ₹35,888',
      highlights: ['Try free', 'No card needed'],
      features: [
        'Standard Courses',
        '1 Premium course',
        'Multilingual Subtitles',
        'AI Mentor Chat',
        'Group Sessions',
        'Learning Materials',
        'Email Support',
        'Community Access',
      ],
      accentColor: 'primary',
      icon: Star,
      bestFor: 'Students starting AI/ML'
    },
    {
      id: 'pro',
      name: 'Prime',
      tagline: 'Accelerate Growth',
      description: 'Serious career-building',
      monthlyPrice: '₹4,999',
      yearlyPrice: '₹59,888',
      period: 'INR/month',
      billedYearly: 'billed yearly ₹59,888',
      highlights: ['Most popular', 'Best value'],
      features: [
        'All Starter features',
        'All Premium courses',
        'IT Masterclass',
        '1:1 Mentor Support',
        'Resume Reviews',
        'Hackathons Access',
        'Certificates',
        'Downloadable Resources',
      ],
      accentColor: 'primary',
      icon: Zap,
      popular: true,
      bestFor: 'Serious career building'
    },
    {
      id: 'enterprise',
      name: 'Annual',
      tagline: 'Master AI/ML',
      description: 'Complete long-term access',
      monthlyPrice: '₹3,750',
      yearlyPrice: '₹44,999',
      period: 'INR/month',
      billedYearly: 'billed yearly ₹44,999',
      highlights: ['Best value', 'Complete access'],
      features: [
        'All Prime features',
        'Multilingual Learning',
        '24/7 AI Mentor',
        'Weekly Sessions',
        'Dedicated Mentorship',
        'Priority Hackathons',
        'Live Sessions',
        'Career Coach',
      ],
      accentColor: 'darkBlue',
      icon: Building,
      bestFor: 'Master AI/ML completely long-term'
    }
  ];

  const allFeatures = [
    'Standard Courses',
    '1 Premium course',
    'Multilingual Subtitles',
    'AI Mentor Chat',
    'Group Sessions',
    'Learning Materials',
    'Email Support',
    'Community Access',
    'All Premium courses',
    'IT Masterclass',
    '1:1 Mentor Support',
    'Resume Reviews',
    'Hackathons Access',
    'Certificates',
    'Downloadable Resources',
    'Multilingual Learning',
    '24/7 AI Mentor',
    'Weekly Sessions',
    'Dedicated Mentorship',
    'Priority Hackathons',
    'Live Sessions',
    'Career Coach'
  ];

  const toggleFeatures = (planId) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };

  const toggleCourses = (planId) => {
    setShowCourses(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };

  const togglePlanDetails = (planId) => {
    setExpandedPlans(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };

  // Map courses to plans - showing 1 by default, more when expanded
  const planCourses = {
    starter: courses.slice(2, 5),  // 3 courses for starter
    pro: courses.slice(0, 4),      // 4 courses for pro
    enterprise: courses.slice(0, 6) // 6 courses for enterprise
  };

  const ComparisonTable = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      ref={comparisonRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === comparisonRef.current) {
          setShowComparison(false);
        }
      }}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-white via-blue-50 to-white border-b p-6" style={{ backgroundColor: COLORS.lightBlue }}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Plan Comparison</h2>
              <p className="text-gray-600">Detailed feature comparison across all plans</p>
            </div>
            <button
              onClick={() => setShowComparison(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <XCircle className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-auto max-h-[calc(90vh-120px)]">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="sticky left-0 z-20 bg-gray-50 p-4 text-left min-w-[250px]">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    <span className="font-semibold text-gray-900">Features</span>
                  </div>
                </th>
                {plans.map((plan) => (
                  <th key={plan.id} className="p-4 text-center min-w-[200px]">
                    <div className={`inline-flex flex-col items-center p-3 rounded-xl border-2`} 
                         style={{ 
                           backgroundColor: plan.accentColor === 'darkBlue' ? COLORS.darkBlue + '10' : COLORS.primary + '10',
                           borderColor: plan.accentColor === 'darkBlue' ? COLORS.darkBlue : COLORS.primary
                         }}>
                      <h3 className="font-bold text-gray-900 text-sm mb-2">{plan.name}</h3>
                      <div className="mb-2">
                        <span className="text-lg font-bold" 
                              style={{ color: plan.accentColor === 'darkBlue' ? COLORS.darkBlue : COLORS.primary }}>
                          {priceMode === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                        </span>
                        <span className="text-xs text-gray-600 ml-1">{plan.period}</span>
                      </div>
                      {plan.popular && (
                        <span className="px-2 py-1 text-xs font-semibold rounded-full"
                              style={{ backgroundColor: COLORS.primary + '20', color: COLORS.primary }}>
                          Most Popular
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="sticky left-0 z-10 bg-white p-3">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-gray-100 rounded-lg">
                        <Check className="w-3 h-3 text-gray-600" />
                      </div>
                      <span className="font-medium text-gray-700 text-sm">{feature}</span>
                    </div>
                  </td>
                  {plans.map((plan) => {
                    const isIncluded = plan.features.includes(feature) || 
                                      (feature.includes('Starter') && plan.id === 'pro') ||
                                      (feature.includes('Prime') && plan.id === 'enterprise');
                    
                    return (
                      <td key={plan.id} className="p-3 text-center">
                        {isIncluded ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-full"
                            style={{ backgroundColor: COLORS.primary + '20' }}
                          >
                            <Check className="w-4 h-4" style={{ color: COLORS.primary }} />
                          </motion.div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                            <X className="w-4 h-4 text-gray-400" />
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 border-t p-4" style={{ backgroundColor: COLORS.lightBlue }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-sm text-gray-600">
              <p>Need help deciding? <a href="#" className="font-semibold hover:underline" style={{ color: COLORS.primary }}>Talk to our experts</a></p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowComparison(false)}
                className="px-4 py-2 border-2 text-gray-700 rounded-lg font-semibold text-sm hover:border-gray-400 transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-shadow"
                      style={{ backgroundColor: COLORS.primary }}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const PriceSwitch = () => (
    <div className="flex items-center justify-center mb-6">
      <div className="inline-flex items-center bg-white p-1 rounded-xl border border-gray-200 shadow-sm">
        <motion.button
          animate={{ scale: priceMode === 'monthly' ? 1.05 : 1 }}
          onClick={() => setPriceMode('monthly')}
          className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            priceMode === 'monthly'
              ? 'text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          style={priceMode === 'monthly' ? { backgroundColor: COLORS.lightBlue } : {}}
        >
          Monthly
        </motion.button>
        <motion.button
          animate={{ scale: priceMode === 'yearly' ? 1.05 : 1 }}
          onClick={() => setPriceMode('yearly')}
          className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
            priceMode === 'yearly'
              ? 'text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          style={priceMode === 'yearly' ? { backgroundColor: COLORS.lightBlue } : {}}
        >
          Yearly
          <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded-full"
                style={{ backgroundColor: COLORS.primary + '20', color: COLORS.primary }}>
            Save 20%
          </span>
        </motion.button>
      </div>
    </div>
  );

  const visibleFeaturesCount = 4;

  return (
    <>
      <section className="relative py-12 md:py-16 overflow-hidden bg-white">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - Compact */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border mb-3"
              style={{ backgroundColor: COLORS.lightBlue, borderColor: COLORS.primary + '30' }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: COLORS.primary }} />
              <span className="text-xs font-semibold" style={{ color: COLORS.primary }}>
                Professional Plans
              </span>
            </motion.div>

            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: COLORS.darkBlue }}>
              Subscription Plan
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg mb-6">
              Upgrade anytime to unlock advanced courses and exclusive features.
            </p>
          </motion.div>

          {/* Price toggle */}
          <PriceSwitch />

          {/* Cards grid - All equal height */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
            {plans.map((plan, index) => {
              const isActive = activePlan === plan.id;
              const isHovered = hoveredCard === plan.id;
              const isPlanExpanded = expandedPlans[plan.id];
              const isExpanded = expandedFeatures[plan.id];
              const visibleFeatures = isExpanded 
                ? plan.features 
                : plan.features.slice(0, visibleFeaturesCount);
              
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative flex flex-col"
                  onMouseEnter={() => setHoveredCard(plan.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setActivePlan(plan.id)}
                >
                  {/* Card - All equal height */}
                  <div className={`
                    relative rounded-xl border bg-white
                    transition-all duration-200 overflow-hidden flex flex-col flex-1
                    ${isHovered ? 'transform -translate-y-1 shadow-lg' : 'shadow-md'}
                  `}
                  style={{ 
                    borderColor: (isActive || plan.popular) 
                      ? (plan.accentColor === 'darkBlue' ? COLORS.darkBlue : COLORS.primary) + '40'
                      : COLORS.gray[200]
                  }}>
                    <div className="p-4 md:p-5 flex flex-col flex-1">
                      {/* Plan header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: plan.accentColor === 'darkBlue' ? COLORS.darkBlue : COLORS.primary }}>
                              {plan.name} Plan
                            </h3>
                            <p className="text-lg text-gray-500">{plan.tagline}</p>
                          </div>
                          {plan.popular && (
                            <div className="px-3 py-1 rounded text-xs font-bold text-white" style={{ backgroundColor: COLORS.primary }}>
                              POPULAR
                            </div>
                          )}
                        </div>
                        {/* Best for */}
                        <div className="mb-4 p-3 rounded-lg text-base" style={{ backgroundColor: COLORS.lightBlue }}>
                          <p className="text-base font-semibold" style={{ color: COLORS.darkBlue }}>
                            <span className="font-bold">Best for:</span> {plan.bestFor}
                          </p>
                        </div>
                      </div>

                      {/* Price display */}
                      <div className="mb-4 p-3 rounded-lg border"
                        style={{ 
                          backgroundColor: COLORS.lightBlue,
                          borderColor: COLORS.primary + '20'
                        }}
                      >
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-3xl md:text-4xl font-bold" style={{ color: plan.accentColor === 'darkBlue' ? COLORS.darkBlue : COLORS.primary }}>
                            {priceMode === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                          </span>
                          <span className="text-lg font-semibold" style={{ color: COLORS.primary }}>
                            {plan.period}
                          </span>
                        </div>
                        <p className="text-base text-gray-500 mb-3">
                          {plan.billedYearly}
                        </p>
                        
                        {/* Highlights */}
                        <div className="flex flex-wrap gap-1.5">
                          {plan.highlights.map((highlight, i) => (
                            <motion.span
                              key={i}
                              initial={{ scale: 0.9, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="px-2.5 py-1 text-base font-semibold rounded-full"
                              style={{ backgroundColor: COLORS.primary + '15', color: COLORS.primary }}
                            >
                              {highlight}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {isPlanExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            {/* Features */}
                            <div className="mb-4">
                              <h4 className="text-xl font-bold text-gray-900 mb-3">Standout features</h4>
                              <div className="space-y-2">
                                {visibleFeatures.map((feature, i) => (
                                  <div
                                    key={i}
                                    className="flex items-start gap-2"
                                  >
                                    <div className="min-w-4 mt-1">
                                      <Check className="w-5 h-5" style={{ color: COLORS.primary }} />
                                    </div>
                                    <span className="text-base text-gray-700 flex-1">
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                                
                                {/* Show more/less button */}
                                {plan.features.length > visibleFeaturesCount && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleFeatures(plan.id);
                                    }}
                                    className="flex items-center gap-2 text-sm font-semibold mt-3"
                                    style={{ color: COLORS.primary }}
                                  >
                                    {isExpanded ? (
                                      <>
                                        <Minus className="w-4 h-4" />
                                        Show less
                                      </>
                                    ) : (
                                      <>
                                        <Plus className="w-4 h-4" />
                                        Show more
                                      </>
                                    )}
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* Included Courses Section */}
                            <div className="mb-4">
                              <h4 className="text-lg font-bold text-gray-900 mb-3">Included Courses</h4>
                              <div className="space-y-3">
                                {/* Show first course by default */}
                                {planCourses[plan.id] && planCourses[plan.id].slice(0, 1).map((course) => (
                                  <div key={course.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                                    <div className="flex gap-3">
                                      <img 
                                        src={course.image} 
                                        alt={course.title}
                                        className="w-16 h-16 rounded-lg object-cover"
                                      />
                                      <div className="flex-1 min-w-0">
                                        <h5 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1">{course.title}</h5>
                                        <p className="text-xs text-gray-600 mb-2 line-clamp-1">{course.category}</p>
                                        <div className="flex items-center gap-3 text-xs text-gray-500">
                                          <div className="flex items-center gap-1">
                                            <Star size={12} className="fill-yellow-400 text-yellow-400" />
                                            <span>{course.rating}</span>
                                          </div>
                                          <div className="flex items-center gap-1">
                                            <Clock size={12} />
                                            <span>{course.duration}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                                
                                {/* Show additional courses when expanded */}
                                {showCourses[plan.id] && planCourses[plan.id] && planCourses[plan.id].slice(1).map((course) => (
                                  <motion.div 
                                    key={course.id}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                                  >
                                    <div className="flex gap-3">
                                      <img 
                                        src={course.image} 
                                        alt={course.title}
                                        className="w-16 h-16 rounded-lg object-cover"
                                      />
                                      <div className="flex-1 min-w-0">
                                        <h5 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1">{course.title}</h5>
                                        <p className="text-xs text-gray-600 mb-2 line-clamp-1">{course.category}</p>
                                        <div className="flex items-center gap-3 text-xs text-gray-500">
                                          <div className="flex items-center gap-1">
                                            <Star size={12} className="fill-yellow-400 text-yellow-400" />
                                            <span>{course.rating}</span>
                                          </div>
                                          <div className="flex items-center gap-1">
                                            <Clock size={12} />
                                            <span>{course.duration}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                                
                                {/* View more/less button for courses */}
                                {planCourses[plan.id] && planCourses[plan.id].length > 1 && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleCourses(plan.id);
                                    }}
                                    className="flex items-center gap-2 text-sm font-semibold"
                                    style={{ color: COLORS.primary }}
                                  >
                                    {showCourses[plan.id] ? (
                                      <>
                                        <Minus className="w-4 h-4" />
                                        View less courses
                                      </>
                                    ) : (
                                      <>
                                        <Plus className="w-4 h-4" />
                                        View {planCourses[plan.id].length - 1} more courses
                                      </>
                                    )}
                                  </button>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* View More / View Less Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlanDetails(plan.id);
                        }}
                        className="w-full py-3 mb-3 rounded-lg border-2 font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                        style={{ 
                          borderColor: COLORS.primary,
                          color: COLORS.primary,
                          backgroundColor: isPlanExpanded ? COLORS.primary + '10' : 'white'
                        }}
                      >
                        {isPlanExpanded ? (
                          <>
                            <Minus className="w-4 h-4" />
                            View Less
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            View More
                          </>
                        )}
                      </button>

                      {/* CTA Button - Always at bottom */}
                      <div className="mt-auto">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`
                            relative w-full overflow-hidden rounded-lg
                            px-5 py-3 font-bold text-lg tracking-wide
                            transition-all duration-200
                            text-white
                            shadow-md hover:shadow-lg
                          `}
                          style={{ backgroundColor: plan.accentColor === 'darkBlue' ? COLORS.darkBlue : COLORS.primary }}
                        >
                          <span className="relative flex items-center justify-center gap-2">
                            {plan.id === 'starter' ? 'Try for free' : 
                             plan.id === 'pro' ? 'Try for free' : 
                             'Get started'}
                            <ChevronRight className="w-5 h-5 text-white/80" />
                          </span>
                        </motion.button>
                        <p className="text-center text-xs text-gray-500 mt-2">No card needed</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Comparison bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 p-3 rounded-lg border shadow-sm"
            style={{ 
              backgroundColor: COLORS.lightBlue,
              borderColor: COLORS.primary + '20'
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg" 
                     style={{ backgroundColor: COLORS.primary + '20' }}>
                  <Shield className="w-4 h-4" style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">All plans include</h4>
                  <p className="text-sm text-gray-600">Security • Uptime • Compliance</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowComparison(true)}
                  className="px-4 py-2 text-white rounded-lg font-semibold text-sm hover:shadow transition-shadow flex items-center gap-1.5"
                  style={{ backgroundColor: COLORS.darkBlue }}
                >
                  <Filter className="w-4 h-4" />
                  Compare plans
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {showComparison && <ComparisonTable />}
      </AnimatePresence>
    </>
  );
}