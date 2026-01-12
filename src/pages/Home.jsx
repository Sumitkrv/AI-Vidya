import { motion } from 'framer-motion';
import { Video, FileText, HelpCircle, Award, Play, Sparkles, Users, Target, ChevronRight, Star } from 'lucide-react';
import Languages from '../components/Languages';

const Home = () => {
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

      {/* Executive Stats Section */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-28 lg:py-36 overflow-hidden">
        {/* Sophisticated background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#163560] via-slate-600 to-[#163560]"></div>
        </div>
        
        {/* Geometric accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#163560]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-slate-600/5 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-slate-100 via-white to-slate-100 rounded-full mb-8 border border-slate-200/50 shadow-sm">
              <div className="w-1.5 h-1.5 bg-[#163560] rounded-full"></div>
              <span className="text-xs font-bold text-slate-700 tracking-[0.15em] uppercase">Government Initiative • AI Excellence</span>
              <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">
              Transforming India's<br />
              <span className="bg-gradient-to-r from-[#163560] via-slate-700 to-[#163560] bg-clip-text text-transparent">
                AI Workforce
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              India's premier AI skilling initiative, delivering measurable impact at unprecedented scale through strategic public-private partnerships.
            </p>
          </div>

          {/* Main Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-24">
            {/* Left Column - Key Impact Metrics */}
            <div className="space-y-8 lg:space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-[2px] bg-gradient-to-r from-[#163560] via-slate-600 to-[#163560] rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-9 border border-slate-200/60 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-slate-50 rounded-full mb-5 border border-slate-100">
                        <Users className="w-3.5 h-3.5 text-[#163560]" />
                        <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">Impact Scale</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 leading-tight">Nationwide Reach & Adoption</h3>
                    </div>
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#163560] to-slate-800 rounded-2xl shadow-lg">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="space-y-7">
                    <div className="grid grid-cols-3 gap-5">
                      <div className="text-center p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100">
                        <div className="text-4xl font-bold bg-gradient-to-br from-[#163560] to-slate-700 bg-clip-text text-transparent mb-1">28</div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">States</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100">
                        <div className="text-4xl font-bold bg-gradient-to-br from-[#163560] to-slate-700 bg-clip-text text-transparent mb-1">8</div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">UTs</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100">
                        <div className="text-4xl font-bold bg-gradient-to-br from-[#163560] to-slate-700 bg-clip-text text-transparent mb-1">4,800+</div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Cities</div>
                      </div>
                    </div>
                    <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#163560] via-slate-600 to-slate-700 w-[75%] rounded-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-[2px] bg-gradient-to-r from-slate-700 via-indigo-600 to-slate-700 rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-9 border border-slate-200/60 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-indigo-50 rounded-full mb-5 border border-indigo-100">
                        <Award className="w-3.5 h-3.5 text-indigo-600" />
                        <span className="text-xs font-bold text-indigo-700 tracking-wider uppercase">Industry Validation</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 leading-tight">Strategic Partnerships</h3>
                    </div>
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl shadow-lg">
                      <Star className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                      <div className="text-4xl font-bold bg-gradient-to-br from-indigo-600 to-indigo-800 bg-clip-text text-transparent mb-2">45</div>
                      <div className="text-sm text-slate-700 font-semibold mb-1">Fortune 500</div>
                      <div className="text-xs text-slate-500 font-medium">Global Partners</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                      <div className="text-4xl font-bold bg-gradient-to-br from-indigo-600 to-indigo-800 bg-clip-text text-transparent mb-2">150+</div>
                      <div className="text-sm text-slate-700 font-semibold mb-1">Indian MNCs</div>
                      <div className="text-xs text-slate-500 font-medium">Active Collaborations</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Performance Metrics */}
            <div className="space-y-8 lg:space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-9 border border-slate-200/60 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-blue-50 rounded-full mb-5 border border-blue-100">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">Performance Metrics</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 leading-tight">Learning Effectiveness</h3>
                    </div>
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-lg">
                      <div className="text-white text-lg font-bold">94%</div>
                    </div>
                  </div>
                  <div className="space-y-7">
                    <div>
                      <div className="flex justify-between items-baseline mb-3">
                        <span className="text-sm font-semibold text-slate-700">Course Completion Rate</span>
                        <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">94%</span>
                      </div>
                      <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 w-[94%] rounded-full"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline mb-3">
                        <span className="text-sm font-semibold text-slate-700">Learner Satisfaction</span>
                        <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">96%</span>
                      </div>
                      <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 w-[96%] rounded-full"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-[2px] bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-9 border border-slate-200/60 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-violet-50 rounded-full mb-5 border border-violet-100">
                        <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                        <span className="text-xs font-bold text-violet-700 tracking-wider uppercase">Career Impact</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 leading-tight">Employment Outcomes</h3>
                    </div>
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl shadow-lg">
                      <div className="text-white text-xs font-bold text-center leading-tight">85K+<br/>Jobs</div>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-center justify-between p-5 bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                      <div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-1">85,000+</div>
                        <div className="text-sm text-slate-600 font-medium">Successful Placements</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-1">₹12.8L</div>
                        <div className="text-sm text-slate-600 font-medium">Avg. CTC Hike</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-5 bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                      <div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-1">42%</div>
                        <div className="text-sm text-slate-600 font-medium">Year-over-Year Growth</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">78%</div>
                        <div className="text-sm text-slate-600 font-medium">Within 3 Months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Stats Bar - Executive Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative group mb-20"
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-slate-600/5 via-[#163560]/10 to-slate-600/5 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-700"></div>
            <div className="relative bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl p-10 lg:p-12 border-2 border-slate-200/50 shadow-2xl backdrop-blur-sm">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                <div className="text-center group/item">
                  <div className="text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-br from-[#163560] via-slate-700 to-[#163560] bg-clip-text text-transparent mb-3 group-hover/item:scale-105 transition-transform duration-300">
                    5.2M
                  </div>
                  <div className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1.5">Trained Learners</div>
                  <div className="text-xs text-slate-500 font-medium">India's Largest AI Cohort</div>
                </div>
                <div className="text-center group/item">
                  <div className="text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover/item:scale-105 transition-transform duration-300">
                    10M+
                  </div>
                  <div className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1.5">Learning Assets</div>
                  <div className="text-xs text-slate-500 font-medium">Videos, Notes, Tests</div>
                </div>
                <div className="text-center group/item">
                  <div className="text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent mb-3 group-hover/item:scale-105 transition-transform duration-300">
                    500+
                  </div>
                  <div className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1.5">Daily Sessions</div>
                  <div className="text-xs text-slate-500 font-medium">Live Interactive Classes</div>
                </div>
                <div className="text-center group/item">
                  <div className="text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-3 group-hover/item:scale-105 transition-transform duration-300">
                    120+
                  </div>
                  <div className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1.5">Centers</div>
                  <div className="text-xs text-slate-500 font-medium">Nationwide Presence</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certification Badge */}
          <div className="text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-5 bg-white rounded-full px-8 py-4 border-2 border-slate-200/60 shadow-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                <span className="text-sm font-bold text-slate-700">ISO 9001:2015 Certified</span>
              </div>
              <div className="h-5 w-px bg-slate-300"></div>
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full shadow-lg shadow-blue-600/50"></div>
                <span className="text-sm font-bold text-slate-700">MSME Registered</span>
              </div>
              <div className="h-5 w-px bg-slate-300"></div>
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-[#163560] rounded-full shadow-lg shadow-[#163560]/50"></div>
                <span className="text-sm font-bold text-slate-700">Govt. of India Initiative</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <Languages />
    </div>
  );
};

export default Home;