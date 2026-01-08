
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Faqs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How do I create an account?',
          answer: 'Creating an account is simple! Click the "Sign Up" button in the top right corner, enter your email and create a password. You can also sign up using your Google or Facebook account for faster access.'
        },
        {
          question: 'Is there a free trial?',
          answer: 'Yes! We offer a 14-day free trial for all our paid plans. You can explore all features without entering credit card information. Cancel anytime during the trial period without any charges.'
        },
        {
          question: 'How do I enroll in a course?',
          answer: 'Browse our course catalog, click on any course that interests you, and hit the "Enroll Now" button. Free courses are instantly accessible, while paid courses require an active subscription or one-time purchase.'
        }
      ]
    },
    {
      category: 'Billing & Payments',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions. All payments are processed securely through our payment partners.'
        },
        {
          question: 'Can I get a refund?',
          answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase for any reason, contact our support team within 30 days of purchase for a full refund.'
        },
        {
          question: 'How do I cancel my subscription?',
          answer: 'You can cancel your subscription anytime from your account settings. Go to Settings > Subscription > Cancel Subscription. Your access will continue until the end of your current billing period.'
        },
        {
          question: 'Will I be charged automatically?',
          answer: 'Yes, subscriptions automatically renew at the end of each billing cycle. You\'ll receive an email reminder 7 days before renewal. You can cancel anytime before the renewal date to avoid charges.'
        }
      ]
    },
    {
      category: 'Courses & Learning',
      questions: [
        {
          question: 'How long do I have access to a course?',
          answer: 'Once you enroll in a course, you have lifetime access to all its content, including future updates. Learn at your own pace without any time restrictions.'
        },
        {
          question: 'Do I get a certificate after completing a course?',
          answer: 'Yes! Pro and Enterprise plan subscribers receive a certificate of completion for every course they finish. Certificates are shareable on LinkedIn and can be downloaded as PDF.'
        },
        {
          question: 'Can I download course videos?',
          answer: 'Yes, Pro and Enterprise subscribers can download course videos for offline viewing using our mobile app. This feature is perfect for learning on the go without internet connection.'
        },
        {
          question: 'Are there any prerequisites for courses?',
          answer: 'Each course page lists any prerequisites in the "Requirements" section. We offer courses for all skill levels from beginner to advanced. Check the course details before enrolling.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'What devices can I use to access courses?',
          answer: 'Our platform works on any device with a web browser - desktop, laptop, tablet, or smartphone. We also have dedicated mobile apps for iOS and Android for the best mobile experience.'
        },
        {
          question: 'I\'m having trouble playing videos. What should I do?',
          answer: 'Try refreshing your browser, clearing cache and cookies, or switching to a different browser. Ensure you have a stable internet connection. If issues persist, contact our technical support team.'
        },
        {
          question: 'Can I access courses from multiple devices?',
          answer: 'Yes! Your account can be accessed from unlimited devices. Your progress syncs automatically across all devices, so you can start on your computer and continue on your phone.'
        }
      ]
    },
    {
      category: 'Account & Settings',
      questions: [
        {
          question: 'How do I change my password?',
          answer: 'Go to Settings > Security > Change Password. Enter your current password and choose a new one. We recommend using a strong, unique password for your account security.'
        },
        {
          question: 'Can I change my email address?',
          answer: 'Yes, you can update your email in Settings > Profile > Email Address. You\'ll receive a verification email at your new address to confirm the change.'
        },
        {
          question: 'How do I delete my account?',
          answer: 'We\'re sorry to see you go! You can delete your account in Settings > Account > Delete Account. Note that this action is permanent and cannot be undone. All your data will be permanently removed.'
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((cat, catIndex) =>
    cat.questions.map((q, qIndex) => ({
      ...q,
      category: cat.category,
      globalIndex: `${catIndex}-${qIndex}`
    }))
  );

  const filteredQuestions = searchTerm
    ? allQuestions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allQuestions;

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-purple via-electric-violet to-soft-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Find answers to common questions about our platform, courses, and services
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm ? (
            // Search Results
            <div className="space-y-4">
              <p className="text-gray-600 mb-6">
                Found {filteredQuestions.length} result{filteredQuestions.length !== 1 ? 's' : ''}
              </p>
              {filteredQuestions.map((item) => (
                <motion.div
                  key={item.globalIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(item.globalIndex)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <span className="text-xs text-royal-purple font-medium mb-1 block">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`flex-shrink-0 ml-4 text-gray-400 transition-transform ${
                        openIndex === item.globalIndex ? 'transform rotate-180' : ''
                      }`}
                      size={24}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === item.globalIndex && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          ) : (
            // Category View
            <div className="space-y-8">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((item, qIndex) => {
                      const globalIndex = `${catIndex}-${qIndex}`;
                      return (
                        <motion.div
                          key={qIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: qIndex * 0.05 }}
                          className="bg-white rounded-2xl overflow-hidden"
                        >
                          <button
                            onClick={() => toggleQuestion(globalIndex)}
                            className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-gray-900">
                              {item.question}
                            </h3>
                            <ChevronDown
                              className={`flex-shrink-0 ml-4 text-gray-400 transition-transform ${
                                openIndex === globalIndex ? 'transform rotate-180' : ''
                              }`}
                              size={24}
                            />
                          </button>
                          <AnimatePresence>
                            {openIndex === globalIndex && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-4 text-gray-600">
                                  {item.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? Our support team is here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-royal-purple to-electric-violet text-white font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              Contact Support
            </Link>
            <a
              href="mailto:support@ai-vidya.com"
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
