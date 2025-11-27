import React, { useState } from 'react';
import { FAQS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-10 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl font-bold text-libera-charcoal dark:text-white mb-4"
          >
            Curious how LIBERA fits into your life?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 dark:text-gray-300"
          >
            It’s super simple—just follow our cozy guide below.
          </motion.p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.05} animation="fade">
              <div 
                className="bg-white dark:bg-libera-darkCard rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-medium text-lg ${openIndex === index ? 'text-libera-teal' : 'text-libera-charcoal dark:text-gray-200'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full ${openIndex === index ? 'bg-libera-teal/10 text-libera-teal' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-gray-700 mt-2 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="mt-12 text-center bg-libera-pink/20 rounded-2xl p-8">
           <h3 className="font-bold text-xl mb-2 text-libera-charcoal">Still have questions?</h3>
           <p className="mb-6 text-gray-700">Need a hand? Our friendly team is here.</p>
           <a href="/support" className="inline-block bg-libera-charcoal text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Chat with Us
           </a>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default FAQ;