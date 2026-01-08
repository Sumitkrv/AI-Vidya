import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, BookOpen, GraduationCap, Shield, Home, Users, FolderOpen, Award, FileText, HelpCircle, Phone, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle scroll for header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { to: '/about', label: 'About Us', icon: <Shield className="w-4 h-4" /> },
    { to: '/courses', label: 'Courses', icon: <BookOpen className="w-4 h-4" /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with Government Identity */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/ai-vidya-logo.png" 
                alt="AI VIDYA Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${
                    isActive(link.to)
                      ? 'bg-white text-black border-b-2 border-black'
                      : 'text-black/90 hover:bg-black/10 hover:text-black'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* CTA Buttons - Government Style */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/login"
                className="px-5 py-2.5 text-sm font-medium bg-[#163560] text-white rounded-lg hover:bg-[#1e4a8a] hover:shadow-lg hover:shadow-[#163560]/30 transition-all hover:-translate-y-0.5"
              >
                Student Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2.5 bg-[#163560] text-white text-sm font-medium rounded-lg hover:bg-[#1e4a8a] hover:shadow-lg hover:shadow-[#163560]/30 transition-all hover:-translate-y-0.5"
              >
                Register Free
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-black hover:bg-black/10"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 bg-white shadow-lg"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium ${
                      isActive(link.to)
                        ? 'bg-[#163560] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                ))}
                <div className="pt-4 space-y-2 border-t border-gray-200 mt-2">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-center bg-[#163560] text-white text-sm font-medium rounded-lg hover:bg-[#1e4a8a] hover:shadow-md"
                  >
                    Student Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-center bg-[#163560] text-white text-sm font-medium rounded-lg hover:bg-[#1e4a8a] hover:shadow-md"
                  >
                    Register Free
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Government Footer */}
      <footer className="bg-gradient-to-b from-[#163560] to-[#000000] text-white pt-14 pb-8 mt-20 border-t border-[#1e3550]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            {/* Branding & Mission */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src="/ai-vidya-logo.png" 
                  alt="AI VIDYA Logo" 
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-white/80 text-sm leading-relaxed max-w-md">
                An initiative by the Government of Odisha to provide free, quality digital education to all residents. Empowering students through accessible learning resources.
              </p>
              <div className="flex gap-6 mt-2">
                <div className="bg-[#163560]/80 px-4 py-2 rounded-lg border border-[#1e4a8a]/30">
                  <div className="text-lg font-bold text-white">100%</div>
                  <div className="text-white/70 text-xs">Free Access</div>
                </div>
                <div className="bg-[#163560]/80 px-4 py-2 rounded-lg border border-[#1e4a8a]/30">
                  <div className="text-lg font-bold text-white">30+</div>
                  <div className="text-white/70 text-xs">Districts Covered</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 pb-1 border-b border-white/10 uppercase tracking-wider text-xs">Platform</h3>
              <ul className="space-y-2 mt-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-white/80 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4 pb-1 border-b border-white/10 uppercase tracking-wider text-xs">Contact</h3>
              <ul className="space-y-4 text-sm mt-2">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-white/70" />
                  <div>
                    <div className="text-white/70">Helpline</div>
                    <div className="text-white font-medium">1800-XXX-XXXX</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-white/70" />
                  <div>
                    <div className="text-white/70">Email</div>
                    <div className="text-white font-medium">education@odisha.gov.in</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Home className="w-5 h-5 text-white/70" />
                  <div>
                    <div className="text-white/70">Address</div>
                    <div className="text-white font-medium">Bhubaneswar, Odisha</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
              <span className="text-white/60">© {new Date().getFullYear()} Government of Odisha. All rights reserved.</span>
              <span className="text-white/50">Official website of the Odisha Government</span>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Accessibility</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Government Portal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}