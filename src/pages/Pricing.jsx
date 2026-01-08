
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for trying out our platform',
      features: [
        'Access to 5 free courses',
        'Basic course materials',
        'Community forum access',
        'Mobile app access',
      ],
      limitations: [
        'No certificates',
        'No downloadable resources',
        'No live sessions',
        'Limited support'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: { monthly: 29, annual: 290 },
      description: 'Best for individual learners',
      features: [
        'Access to 100+ courses',
        'All course materials',
        'Downloadable resources',
        'Certificates of completion',
        'Priority email support',
        'Mobile app access',
        'Offline viewing',
      ],
      limitations: [
        'No live sessions',
        'No 1-on-1 mentoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: { monthly: 99, annual: 990 },
      description: 'Perfect for teams and organizations',
      features: [
        'Access to 1,000+ courses',
        'All Pro features',
        'Live instructor sessions',
        '1-on-1 mentoring',
        'Custom learning paths',
        'Team management dashboard',
        'Advanced analytics',
        '24/7 priority support',
        'API access'
      ],
      limitations: [],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All paid plans come with a 14-day free trial. No credit card required.'
    },
    {
      question: 'Can I get a refund?',
      answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with your purchase.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-purple via-electric-violet to-soft-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Choose the plan that's right for you and start learning today
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full p-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-royal-purple'
                    : 'text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingPeriod === 'annual'
                    ? 'bg-white text-royal-purple'
                    : 'text-white'
                }`}
              >
                Annual
                <span className="ml-2 text-xs text-neon-green">(Save 17%)</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 ${
                  plan.popular
                    ? 'ring-2 ring-royal-purple shadow-2xl scale-105'
                    : 'shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-royal-purple to-electric-violet text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    ${plan.price[billingPeriod]}
                  </span>
                  <span className="text-gray-600">
                    /{billingPeriod === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>

                <Button
                  className="w-full mb-8"
                  variant={plan.popular ? 'primary' : 'outline'}
                >
                  {plan.name === 'Free' ? 'Get Started' : 'Start Free Trial'}
                </Button>

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-gray-900 uppercase">
                    What's included:
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.length > 0 && (
                    <>
                      {plan.limitations.map((limitation, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <X size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400">{limitation}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Compare Plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-gray-900 font-semibold">Feature</th>
                  <th className="text-center py-4 px-6 text-gray-900 font-semibold">Free</th>
                  <th className="text-center py-4 px-6 text-gray-900 font-semibold">Pro</th>
                  <th className="text-center py-4 px-6 text-gray-900 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Course Access</td>
                  <td className="py-4 px-6 text-center">5 courses</td>
                  <td className="py-4 px-6 text-center">100+ courses</td>
                  <td className="py-4 px-6 text-center">1,000+ courses</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Certificates</td>
                  <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-400" size={20} /></td>
                  <td className="py-4 px-6 text-center"><Check className="mx-auto text-green-500" size={20} /></td>
                  <td className="py-4 px-6 text-center"><Check className="mx-auto text-green-500" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Downloadable Resources</td>
                  <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-400" size={20} /></td>
                  <td className="py-4 px-6 text-center"><Check className="mx-auto text-green-500" size={20} /></td>
                  <td className="py-4 px-6 text-center"><Check className="mx-auto text-green-500" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Live Sessions</td>
                  <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-400" size={20} /></td>
                  <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-400" size={20} /></td>
                  <td className="py-4 px-6 text-center"><Check className="mx-auto text-green-500" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">1-on-1 Mentoring</td>
                  <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-400" size={20} /></td>
                  <td className="py-4 px-6 text-center"><X className="mx-auto text-gray-400" size={20} /></td>
                  <td className="py-4 px-6 text-center"><Check className="mx-auto text-green-500" size={20} /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Support</td>
                  <td className="py-4 px-6 text-center">Community</td>
                  <td className="py-4 px-6 text-center">Email</td>
                  <td className="py-4 px-6 text-center">24/7 Priority</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-royal-purple to-electric-violet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you find the perfect plan for your needs
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-royal-purple hover:bg-gray-100">
              Contact Sales
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
