import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Users, Clock, Award, CheckCircle, PlayCircle, 
  Download, Globe, ChevronRight, BookOpen, BarChart, 
  Heart, Share2, Calendar, MessageSquare, Eye, 
  Lock, Unlock, ChevronDown, ChevronUp, Bookmark,
  Sparkles, Target, TrendingUp, Shield, ShoppingCart,
  Zap, Rocket, Gem, Brain
} from 'lucide-react';
import { courses } from '../data/courses';
import Badge from '../components/Badge';
import Button from '../components/Button';

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Temporary implementations until contexts are created
  const wishlist = [];
  const cart = [];
  const addToWishlist = (course) => console.log('Add to wishlist:', course);
  const removeFromWishlist = (id) => console.log('Remove from wishlist:', id);
  const isInWishlist = (id) => wishlist.includes(id);
  const addToCart = (course) => console.log('Add to cart:', course);
  const isInCart = (id) => cart.includes(id);
  
  const [course, setCourse] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [enrollmentStats, setEnrollmentStats] = useState({
    dailyEnrollments: 45,
    completionRate: '87%',
    satisfactionRate: '4.8/5'
  });

  useEffect(() => {
    // Simulate API call
    const fetchCourse = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const foundCourse = courses.find(c => c.id.toString() === id);
      setCourse(foundCourse);
      
      if (foundCourse) {
        // Find related courses
        const related = courses
          .filter(c => c.id !== foundCourse.id && c.category === foundCourse.category)
          .slice(0, 3);
        setRelatedCourses(related);
      }
      
      setLoading(false);
    };

    fetchCourse();
  }, [id]);

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleEnroll = () => {
    addToCart(course);
    console.log('Added to cart!');
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(course.id)) {
      removeFromWishlist(course.id);
      console.log('Removed from wishlist');
    } else {
      addToWishlist(course);
      console.log('Added to wishlist!');
    }
  };

  const handleShare = () => {
    setShowShareMenu(true);
  };

  const handlePreview = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsPreviewModalOpen(true);
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#163560] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="text-center max-w-md p-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#EB5E26]/20 to-[#FF7B3D]/20 flex items-center justify-center">
            <BookOpen className="w-12 h-12 text-[#EB5E26]" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">
            The course you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/courses">
            <Button 
              variant="primary" 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-[#163560] to-[#1e4a8a]"
            >
              <ChevronRight size={20} />
              Browse All Courses
            </Button>
          </Link>
        </div>
      </motion.div>
    );
  }

  const isWishlisted = isInWishlist(course.id);
  const isInCartItem = isInCart(course.id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced Hero Section with Ai Vidya Colors */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#163560] via-[#163560] to-[#1e4a8a] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EB5E26' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        </div>
        
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#EB5E26]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EB5E26]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="accent" className="shadow-lg">
                  <Brain size={14} className="mr-1" />
                  {course.category}
                </Badge>
                {course.isFeatured && (
                  <Badge variant="secondary" className="shadow-lg">
                    <TrendingUp size={14} className="mr-1" />
                    Featured
                  </Badge>
                )}
                {course.isNew && (
                  <Badge variant="warning" className="shadow-lg bg-gradient-to-r from-[#163560] to-[#1e4a8a]">
                    <Rocket size={14} className="mr-1" />
                    New Launch
                  </Badge>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {course.title}
                <span className="block text-[#163560] text-2xl md:text-3xl mt-2">
                  Master the Future with Ai Vidya
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
                {course.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="fill-yellow-400 text-yellow-400" size={18} />
                    <span className="font-bold text-lg">{course.rating}</span>
                  </div>
                  <p className="text-sm text-gray-400">Rating</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={18} />
                    <span className="font-bold text-lg">
                      {(course.students / 1000).toFixed(1)}K
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">Students</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={18} />
                    <span className="font-bold text-lg">{course.duration}</span>
                  </div>
                  <p className="text-sm text-gray-400">Duration</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={18} />
                    <span className="font-bold text-lg">{course.level}</span>
                  </div>
                  <p className="text-sm text-gray-400">Level</p>
                </div>
              </div>

              {/* Instructor Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-20 h-20 rounded-full border-4 border-[#EB5E26]/30"
                    />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-[#163560] to-[#1e4a8a] rounded-full flex items-center justify-center">
                      <Shield size={14} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Expert Instructor</p>
                        <h3 className="font-bold text-xl mb-1">{course.instructor.name}</h3>
                        <p className="text-gray-300">{course.instructor.role}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={`${
                                i < Math.floor(course.instructor.rating || course.rating || 0)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm">{course.instructor.rating || course.rating || 'N/A'}</span>
                        </div>
                        <p className="text-sm text-gray-400">
                          {(course.instructor.students || course.students || 0).toLocaleString()} students
                        </p>
                      </div>
                    </div>
                    {course.instructor.skills && course.instructor.skills.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {course.instructor.skills.slice(0, 4).map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs bg-gradient-to-r from-[#163560]/30 to-[#1e4a8a]/30 rounded-full border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Enrollment Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200 sticky top-24">
                <div className="relative mb-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 object-cover rounded-2xl shadow-lg"
                  />
                  <button
                    onClick={() => handlePreview(course.previewVideo)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity rounded-2xl group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-[#163560] to-[#1e4a8a] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                      <PlayCircle size={32} className="text-white" />
                    </div>
                  </button>
                </div>
                
                {/* Pricing Section */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold text-[#163560]">${course.price}</span>
                    <span className="text-xl text-gray-400 line-through">${course.originalPrice}</span>
                    <Badge variant="secondary" className="ml-2">
                      Save ${course.originalPrice - course.price}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Clock size={14} />
                    <span>Limited time offer</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 mb-8">
                  {isInCartItem ? (
                    <Button 
                      variant="primary" 
                      className="w-full gap-2 bg-gradient-to-r from-[#163560] to-[#1e4a8a] hover:from-[#1e4a8a] hover:to-[#163560]"
                      onClick={() => navigate('/cart')}
                    >
                      <ShoppingCart size={20} />
                      Go to Cart
                    </Button>
                  ) : (
                    <Button 
                      variant="primary" 
                      className="w-full gap-2 bg-gradient-to-r from-[#163560] to-[#1e4a8a] hover:from-[#1e4a8a] hover:to-[#163560] shadow-lg"
                      size="lg"
                      onClick={handleEnroll}
                    >
                      <ShoppingCart size={20} />
                      Add to Cart
                    </Button>
                  )}
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant={isWishlisted ? "primary" : "outline"}
                      className={`w-full gap-2 ${
                        isWishlisted 
                          ? 'bg-gradient-to-r from-[#163560] to-[#1e4a8a] text-white' 
                          : 'border-[#163560] text-[#163560] hover:bg-[#163560] hover:text-white'
                      }`}
                      onClick={handleWishlistToggle}
                    >
                      <Heart size={18} className={isWishlisted ? "fill-current" : ""} />
                      {isWishlisted ? 'Saved' : 'Wishlist'}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-[#163560] text-[#163560] hover:bg-[#163560] hover:text-white"
                      onClick={handleShare}
                    >
                      <Share2 size={18} />
                      Share
                    </Button>
                  </div>
                </div>

                {/* Course Features - FIXED: Added closing div */}
                <div className="space-y-4 border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-[#163560] flex items-center gap-2">
                    <Gem size={18} className="text-[#163560]" />
                    What's Included
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-8 h-8 rounded-lg bg-[#163560]/10 flex items-center justify-center">
                        <PlayCircle size={16} className="text-[#163560]" />
                      </div>
                      <span>{course.sessions} video sessions</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-8 h-8 rounded-lg bg-[#EB5E26]/10 flex items-center justify-center">
                        <Download size={16} className="text-[#EB5E26]" />
                      </div>
                      <span>Downloadable resources</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-8 h-8 rounded-lg bg-[#163560]/10 flex items-center justify-center">
                        <Globe size={16} className="text-[#163560]" />
                      </div>
                      <span>Lifetime access</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-8 h-8 rounded-lg bg-[#EB5E26]/10 flex items-center justify-center">
                        <Award size={16} className="text-[#EB5E26]" />
                      </div>
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Content Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* What You'll Learn - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#163560] to-[#1e4a8a] flex items-center justify-center">
                    <Target size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">What You'll Achieve</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.highlights?.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#163560]/10 to-[#1e4a8a]/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={18} className="text-[#163560]" />
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">{highlight}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Master this skill through hands-on projects
                        </p>
                      </div>
                    </motion.div>
                  )) || (
                    <div className="col-span-2 text-center py-8 text-gray-500">
                      Course highlights coming soon...
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Enhanced Curriculum */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#163560] to-[#1e4a8a] flex items-center justify-center">
                      <BookOpen size={24} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Course Curriculum</h2>
                  </div>
                  <div className="text-sm text-gray-600">
                    {course.curriculum?.reduce((acc, section) => acc + section.lessons, 0) || 0} lessons • {course.duration}
                  </div>
                </div>
                
                <div className="space-y-3">
                  {course.curriculum?.map((section, index) => {
                    const isExpanded = expandedSections[index];
                    const completedLessons = 0; // This would come from user progress
                    
                    return (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#EB5E26] transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleSection(index)}
                          className="w-full p-6 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 transition-all duration-300 flex justify-between items-center"
                        >
                          <div className="text-left">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#163560]/10 to-[#1e4a8a]/10 flex items-center justify-center">
                                <span className="font-bold text-[#163560]">
                                  {index + 1}
                                </span>
                              </div>
                              <h3 className="font-bold text-gray-900 text-lg">
                                {section.title}
                              </h3>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <PlayCircle size={14} />
                                {section.lessons} lessons
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={14} />
                                {section.duration}
                              </span>
                              {completedLessons > 0 && (
                                <span className="text-green-600 font-medium">
                                  {completedLessons}/{section.lessons} completed
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            {isExpanded ? (
                              <ChevronUp size={20} className="text-[#EB5E26]" />
                            ) : (
                              <ChevronDown size={20} className="text-gray-400" />
                            )}
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-6 border-t border-gray-100 bg-white">
                                {section.lessonsList && section.lessonsList.length > 0 ? (
                                  <div className="space-y-3">
                                    {section.lessonsList.map((lesson, lessonIndex) => (
                                      <div
                                        key={lessonIndex}
                                        className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                                      >
                                        <div className="flex items-center gap-3">
                                          {lesson.isFree ? (
                                            <PlayCircle size={18} className="text-[#EB5E26]" />
                                          ) : (
                                            <Lock size={18} className="text-gray-400" />
                                          )}
                                          <div>
                                            <p className="font-medium text-gray-900">
                                              {lessonIndex + 1}. {lesson.title}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                              {formatDuration(lesson.duration)}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          {lesson.isFree && (
                                            <Badge variant="secondary" size="sm">
                                              Free Preview
                                            </Badge>
                                          )}
                                          {lesson.isCompleted && (
                                            <CheckCircle size={16} className="text-green-500" />
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <p className="text-gray-600 text-center py-4">
                                    Lesson details coming soon
                                  </p>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }) || (
                    <div className="text-center py-8 text-gray-500">
                      Curriculum details coming soon...
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Course Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Course</h2>
                <div className="prose max-w-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Sparkles size={20} className="text-[#EB5E26]" />
                        Course Overview
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Target size={20} className="text-[#163560]" />
                        Learning Outcomes
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircle size={16} className="text-[#163560]" />
                          Build real-world projects
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircle size={16} className="text-[#163560]" />
                          Master industry best practices
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircle size={16} className="text-[#163560]" />
                          Develop a professional portfolio
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircle size={16} className="text-[#163560]" />
                          Gain job-ready skills
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Prerequisites */}
                  {course.prerequisites && course.prerequisites.length > 0 && (
                    <div className="bg-gradient-to-r from-[#163560]/5 to-[#1e4a8a]/5 rounded-xl p-6 border border-[#163560]/20">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Prerequisites</h3>
                      <div className="flex flex-wrap gap-2">
                        {course.prerequisites.map((req, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-white rounded-lg border border-[#163560]/20 text-[#163560] text-sm"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Course Statistics */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 sticky top-24"
              >
                <h3 className="font-bold text-gray-900 mb-6 text-lg flex items-center gap-2">
                  <BarChart size={20} className="text-[#EB5E26]" />
                  Course Statistics
                </h3>
                <div className="space-y-4">
                  {Object.entries(enrollmentStats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <span className="text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="font-bold text-[#163560]">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-[#163560] mb-4">Additional Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Calendar size={16} className="text-[#EB5E26]" />
                      <span>Last updated: {new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Globe size={16} className="text-[#163560]" />
                      <span>Language: English</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Award size={16} className="text-[#EB5E26]" />
                      <span>Certification included</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Related Courses */}
              {relatedCourses.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="font-bold text-gray-900 mb-6 text-lg">Related Courses</h3>
                  <div className="space-y-4">
                    {relatedCourses.map((relatedCourse) => (
                      <Link
                        key={relatedCourse.id}
                        to={`/courses/${relatedCourse.id}`}
                        className="group block"
                      >
                        <div className="flex gap-3 p-3 hover:bg-gray-50 rounded-xl transition-all duration-300 group-hover:scale-[1.02]">
                          <img
                            src={relatedCourse.image}
                            alt={relatedCourse.title}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-[#163560]">
                              {relatedCourse.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-sm font-bold text-[#163560]">
                                ${relatedCourse.price}
                              </span>
                              <Star size={12} className="fill-yellow-400 text-yellow-400" />
                              <span className="text-xs text-gray-600">{relatedCourse.rating}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="py-20 bg-gradient-to-br from-[#163560] via-[#163560] to-[#1e4a8a] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EB5E26' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#EB5E26]/20 to-[#FF7B3D]/20 backdrop-blur-sm flex items-center justify-center border border-white/20"
          >
            <Award size={40} className="text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Career with <span className="text-[#EB5E26]">Ai Vidya</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join {(course.students || 0).toLocaleString()}+ successful students who have already transformed their careers with this comprehensive course.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="xl"
              variant="secondary"
              className="bg-gradient-to-r from-[#163560] to-[#1e4a8a] text-white hover:from-[#1e4a8a] hover:to-[#163560] shadow-2xl px-8 py-4 text-lg"
              onClick={handleEnroll}
            >
              <ShoppingCart size={24} className="mr-2" />
              Enroll Now - ${course.price}
            </Button>
            
            <Button
              size="xl"
              variant="ghost"
              className="text-white border-2 border-white/30 hover:bg-white/10 px-8 py-4 text-lg"
              onClick={() => navigate('/contact')}
            >
              <MessageSquare size={24} className="mr-2" />
              Schedule a Consultation
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">30-Day</div>
              <div className="text-white/80">Money Back Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Student Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Job-Ready Skills</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Modals and Menus */}
      <AnimatePresence>
        {isPreviewModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsPreviewModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl p-6 max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-[#163560]">Course Preview</h3>
                <button
                  onClick={() => setIsPreviewModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="aspect-video bg-gradient-to-br from-[#163560] to-[#1e4a8a] rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <PlayCircle size={64} className="text-white mx-auto mb-4" />
                    <p className="text-white text-lg">Course Preview Video</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {showShareMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowShareMenu(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-[#163560]">Share This Course</h3>
                <button
                  onClick={() => setShowShareMenu(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600">Share this course: {course.title}</p>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={() => setShowShareMenu(false)}>
                    Copy Link
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}