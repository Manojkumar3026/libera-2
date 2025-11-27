import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      {/* Header */}
      <section className="relative px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl font-bold text-libera-charcoal dark:text-libera-pink mb-6"
          >
            Born from care, <br/>made for you.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-600 dark:text-gray-300 font-light"
          >
            Helping you embrace every day with ease.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <img 
                src="https://picsum.photos/seed/liberaStory/600/800" 
                alt="Women Empowered" 
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="space-y-6">
             <h2 className="text-3xl font-serif font-bold text-libera-teal">Our Story</h2>
             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
               We believe that menstrual pain shouldn't put your life on pause. LIBERA began with a simple mission: to empower women through innovative, drug-free relief.
             </p>
             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
               Traditional methods often involve chemicals or bulky heating pads that tether you to a wall. We wanted to create something that felt like a warm hug—gentle, effective, and capable of moving with you.
             </p>
             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
               Combining advanced PEMF technology with a discreet, wearable design, LIBERA is more than a device; it's a commitment to your wellness and everyday strength.
             </p>
             <div className="pt-4 border-l-4 border-libera-pink pl-6">
                <p className="italic font-serif text-lg text-libera-charcoal dark:text-white">"We wanted to give women their time back, free from pain and free from wires."</p>
             </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Family Section */}
      <section className="bg-libera-offWhite dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
           <ScrollReveal className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold mb-4 dark:text-white">Meet the LIBERA Family</h2>
           </ScrollReveal>
           
           <div className="grid md:grid-cols-2 gap-8">
              {/* Product 1 */}
              <ScrollReveal delay={0.1}>
                <div className="bg-white dark:bg-libera-darkCard p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-md hover:shadow-lg transition-shadow">
                   <img src="https://picsum.photos/seed/classicThumb/200/200" className="w-32 h-32 rounded-full object-cover border-4 border-libera-pink/20" alt="Classic" />
                   <div>
                      <h3 className="text-xl font-bold text-libera-charcoal dark:text-white">LIBERA Classic</h3>
                      <p className="text-sm text-libera-teal font-bold uppercase tracking-wider mb-2">Simplicity First</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">One-touch operation with a preset PEMF frequency optimized for general relief.</p>
                   </div>
                </div>
              </ScrollReveal>

              {/* Product 2 */}
              <ScrollReveal delay={0.2}>
                <div className="bg-white dark:bg-libera-darkCard p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-md border-2 border-libera-teal/20 hover:shadow-lg transition-shadow">
                   <img src="https://picsum.photos/seed/smartThumb/200/200" className="w-32 h-32 rounded-full object-cover border-4 border-libera-teal/20" alt="Smart" />
                   <div>
                      <h3 className="text-xl font-bold text-libera-charcoal dark:text-white">LIBERA Smart</h3>
                      <p className="text-sm text-libera-teal font-bold uppercase tracking-wider mb-2">Connected Care</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Bluetooth enabled with App control. Choose from 3 intensity levels for personalized comfort.</p>
                   </div>
                </div>
              </ScrollReveal>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;