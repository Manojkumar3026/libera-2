import React from 'react';
import { COMPARISON_DATA } from '../constants';
import { Check, X } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { motion } from 'framer-motion';

const WhyLibera: React.FC = () => {
  const renderCell = (value: boolean | string) => {
    if (value === true) {
      return <div className="flex justify-center"><Check className="text-libera-teal w-6 h-6" strokeWidth={3} /></div>;
    }
    if (value === false) {
      return <div className="flex justify-center"><X className="text-red-400 w-6 h-6" strokeWidth={3} /></div>;
    }
    return <span className="text-sm font-medium">{value}</span>;
  };

  return (
    <div className="pt-10 pb-20">
       <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-libera-charcoal dark:text-white mb-6"
          >
            Why women choose LIBERA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            A gentle solution, free from harsh chemicals. See how we compare.
          </motion.p>
       </div>

       {/* Comparison Table */}
       <div className="max-w-6xl mx-auto px-4 mb-20">
          <ScrollReveal>
            <div className="bg-white dark:bg-libera-darkCard rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
               {/* Table Header */}
               <div className="grid grid-cols-4 bg-gray-50 dark:bg-gray-800 p-6 text-center font-bold text-lg border-b dark:border-gray-700 items-center">
                  <div className="text-gray-500 dark:text-gray-400 text-left pl-4">Feature</div>
                  <div className="text-libera-tealDark text-xl bg-libera-teal/10 rounded-t-lg py-2">LIBERA</div>
                  <div className="text-gray-400 text-sm md:text-base">Pain Medication</div>
                  <div className="text-gray-400 text-sm md:text-base">Heat Pads</div>
               </div>
               
               {/* Table Body */}
               <div className="divide-y divide-gray-100 dark:divide-gray-700">
                  {COMPARISON_DATA.map((item, idx) => (
                     <div key={idx} className="grid grid-cols-4 p-4 md:p-6 items-center text-center hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                        <div className="font-bold text-gray-700 dark:text-gray-300 text-sm md:text-base text-left pl-4">{item.feature}</div>
                        
                        {/* Libera Column */}
                        <div className="text-libera-charcoal dark:text-white bg-libera-teal/5 dark:bg-libera-teal/5 h-full flex items-center justify-center -my-6 py-6 border-x border-libera-teal/10">
                           {renderCell(item.libera)}
                        </div>
                        
                        {/* Medication Column */}
                        <div className="text-gray-500 dark:text-gray-500">
                           {renderCell(item.medication)}
                        </div>

                        {/* Heat Pads Column */}
                        <div className="text-gray-500 dark:text-gray-500">
                           {renderCell(item.heat)}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
          </ScrollReveal>
       </div>

       {/* Benefits Grid */}
       <section className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
             <ScrollReveal delay={0.1}>
               <div className="bg-libera-peach/20 dark:bg-libera-peach/10 p-8 rounded-3xl h-full">
                  <h3 className="font-serif text-2xl font-bold mb-6 text-libera-coral">Why avoid painkillers?</h3>
                  <ul className="space-y-4">
                     <li className="flex items-start gap-3">
                        <Check className="text-libera-coral shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Long-term use can affect gut health.</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <Check className="text-libera-coral shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Chemicals enter your bloodstream.</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <Check className="text-libera-coral shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Often masks pain rather than relaxing muscles.</span>
                     </li>
                  </ul>
               </div>
             </ScrollReveal>

             <ScrollReveal delay={0.2}>
               <div className="bg-libera-teal/20 dark:bg-libera-teal/10 p-8 rounded-3xl h-full">
                  <h3 className="font-serif text-2xl font-bold mb-6 text-libera-tealDark">The LIBERA Advantage</h3>
                  <ul className="space-y-4">
                     <li className="flex items-start gap-3">
                        <Check className="text-libera-tealDark shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Non-invasive and completely safe.</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <Check className="text-libera-tealDark shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Targeted relief exactly where you need it.</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <Check className="text-libera-tealDark shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Wearable all day long (rechargeable battery).</span>
                     </li>
                  </ul>
               </div>
             </ScrollReveal>
          </div>
       </section>
    </div>
  );
};

export default WhyLibera;