import React, { useState } from 'react';
import { Mail, Phone, FileText, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const Support: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
  };

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl font-bold text-center mb-6 dark:text-white"
        >
          We’re here for you
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-xl text-gray-600 dark:text-gray-300 mb-16"
        >
          Chat or drop us a line anytime!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white dark:bg-libera-darkCard p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-libera-teal">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-libera-teal outline-none transition-all"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-libera-teal outline-none transition-all"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">How can we help?</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-libera-teal outline-none transition-all"
                    placeholder="Tell us about your comfort journey..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="consent"
                    required
                    className="mt-1 w-4 h-4 text-libera-teal rounded focus:ring-libera-teal"
                    checked={formData.consent}
                    onChange={e => setFormData({...formData, consent: e.target.checked})}
                  />
                  <label htmlFor="consent" className="text-sm text-gray-500">
                    I consent to LIBERA processing my data to handle my request.
                  </label>
                </div>
                <button type="submit" className="w-full bg-libera-pink text-libera-charcoal font-bold py-4 rounded-full hover:bg-libera-pinkDark hover:text-white transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info & Resources */}
          <ScrollReveal delay={0.3} className="space-y-8">
             {/* Quick Contacts */}
             <div className="grid gap-6">
                <div className="flex items-center gap-4 bg-libera-teal/5 p-6 rounded-2xl border border-libera-teal/20">
                   <div className="w-12 h-12 bg-libera-teal text-white rounded-full flex items-center justify-center">
                      <Phone size={20} />
                   </div>
                   <div>
                      <h3 className="font-bold text-lg dark:text-white">Call Us</h3>
                      <p className="text-gray-600 dark:text-gray-400">+91 123 456 7890</p>
                      <p className="text-xs text-gray-400">Mon-Fri, 9am - 6pm</p>
                   </div>
                </div>

                <div className="flex items-center gap-4 bg-libera-pink/5 p-6 rounded-2xl border border-libera-pink/20">
                   <div className="w-12 h-12 bg-libera-pink text-white rounded-full flex items-center justify-center">
                      <Mail size={20} />
                   </div>
                   <div>
                      <h3 className="font-bold text-lg dark:text-white">Email Us</h3>
                      <p className="text-gray-600 dark:text-gray-400">support@libera.com</p>
                      <p className="text-xs text-gray-400">We reply within 24 hours</p>
                   </div>
                </div>

                <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                   <div className="w-12 h-12 bg-libera-charcoal text-white rounded-full flex items-center justify-center">
                      <MessageCircle size={20} />
                   </div>
                   <div>
                      <h3 className="font-bold text-lg dark:text-white">Live Chat</h3>
                      <p className="text-gray-600 dark:text-gray-400">Chat with a support friend</p>
                      <button className="text-xs text-libera-teal font-bold mt-1 underline">Start Chat</button>
                   </div>
                </div>
             </div>

             {/* Resources */}
             <div className="bg-libera-offWhite dark:bg-gray-900 p-8 rounded-3xl">
                <h3 className="font-serif text-2xl font-bold mb-6 dark:text-white">Resources</h3>
                <div className="space-y-4">
                   <button className="w-full flex items-center justify-between bg-white dark:bg-libera-darkCard p-4 rounded-xl hover:shadow-md transition-all">
                      <div className="flex items-center gap-3">
                         <FileText className="text-libera-teal" size={20} />
                         <span className="font-medium dark:text-gray-200">User Manual (Classic)</span>
                      </div>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">PDF</span>
                   </button>
                   <button className="w-full flex items-center justify-between bg-white dark:bg-libera-darkCard p-4 rounded-xl hover:shadow-md transition-all">
                      <div className="flex items-center gap-3">
                         <FileText className="text-libera-teal" size={20} />
                         <span className="font-medium dark:text-gray-200">User Manual (Smart)</span>
                      </div>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">PDF</span>
                   </button>
                   <button className="w-full mt-4 bg-libera-charcoal text-white py-3 rounded-full font-bold text-sm">
                      Grab your LIBERA care guide
                   </button>
                </div>
             </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Support;