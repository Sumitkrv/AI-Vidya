import { motion } from 'framer-motion';
import { Video, FileText, HelpCircle, Award, Play, Sparkles, Users, Target, ChevronRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen">
        {/* Full Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'right center' }}
        >
          <source src="/1920-1080.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Hero Tagline Overlay */}
        <div className="absolute inset-0 flex items-start pt-32">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl ml-8 md:ml-16 lg:ml-24"
          >
            <div className="mb-6">
              <span className="text-[#163560] font-medium text-sm tracking-wide uppercase">AI VIDYA | Government of INDIA</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              <span>MAKING <span className="text-[#EB5E26]">INDIA</span></span><br />
              <span>READY FOR THE</span><br />
              <span className="text-[#163560]">FUTURE WITH AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-black mb-4 leading-relaxed max-w-2xl">
              AI ISN'T JUST FOR TECH ANYMORE - IT'S CHANGING HEALTHCARE, FASHION, BUSINESS, AND DESIGN. AT <span className="font-bold text-[#163560]">AI VIDYA</span>, WE MAKE LEARNING AI SIMPLE, SO YOU CAN GROW IN YOUR FIELD AND STAY ON TOP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button className="px-8 py-4 bg-[#163560] text-white font-semibold rounded-lg hover:bg-[#12274b] transition-all flex items-center justify-center gap-2">
                REGISTER NOW
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Updated */}
      <section className="bg-gradient-to-r from-white via-gray-50 to-white py-16 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Daily Live */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Video className="w-8 h-8 text-[#EB5E26]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Daily Live</h3>
              <p className="text-gray-600 font-medium">Interactive Classes</p>
              <p className="text-sm text-gray-500 mt-2">500+ live sessions monthly</p>
            </motion.div>

            {/* 10 Million + */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-[#163560]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10M+</h3>
              <p className="text-gray-600 font-medium">Study Materials</p>
              <p className="text-sm text-gray-500 mt-2">Tests, notes & papers</p>
            </motion.div>

            {/* 24 x 7 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-8 h-8 text-[#163560]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600 font-medium">Doubt Solving</p>
              <p className="text-sm text-gray-500 mt-2">Instant expert support</p>
            </motion.div>

            {/* 100+ */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-[#EB5E26]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600 font-medium">Offline Centres</p>
              <p className="text-sm text-gray-500 mt-2">Nationwide presence</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}