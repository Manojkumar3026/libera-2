import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Wifi, Smile } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Find your cozy spot",
      desc: "Place LIBERA on your lower abdomen or wherever you feel the cramps most. The slim design fits easily under clothes.",
      icon: Smile
    },
    {
      id: 2,
      title: "Activate Relief",
      desc: "Press the power button (Classic) or use the App (Smart) to start the gentle PEMF waves.",
      icon: Wifi
    },
    {
      id: 3,
      title: "Let the magic happen",
      desc: "Relax as the pulses improve circulation and calm nerve signals, reducing pain naturally.",
      icon: Activity
    }
  ];

  return (
    <div className="pt-10 pb-20">
       <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-libera-charcoal dark:text-white mb-6"
          >
            How LIBERA softly works its magic
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Backed by research, inspired by you. Simple steps to a better day.
          </motion.p>
       </div>

       {/* Steps */}
       <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-24">
          {steps.map((step, idx) => (
             <motion.div 
               key={step.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ delay: idx * 0.2, duration: 0.5 }}
               className="relative bg-white dark:bg-libera-darkCard p-8 rounded-3xl shadow-lg text-center"
             >
                <div className="w-16 h-16 bg-libera-pink text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md">
                   {step.id}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
             </motion.div>
          ))}
       </div>

       {/* Science Section */}
       <section className="bg-libera-teal/5 dark:bg-gray-800 py-20">
          <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
             <ScrollReveal className="flex-1">
                <h2 className="font-serif text-3xl font-bold mb-6 text-libera-teal">What is PEMF?</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                   <p>
                     **PEMF (Pulsed Electromagnetic Field)** therapy is a revolutionary method that uses soothing electromagnetic waves to encourage your body's natural recovery processes.
                   </p>
                   <p>
                     Unlike TENS units that shock the nerves, or heat pads that only treat the surface, PEMF penetrates deeper to:
                   </p>
                   <ul className="list-disc pl-5 space-y-2">
                      <li>Improve local blood circulation (reducing inflammation).</li>
                      <li>Relax muscle tissues to stop cramping spasms.</li>
                      <li>Calm pain signals sent to the brain.</li>
                   </ul>
                   <p className="font-medium pt-4">It's 100% drug-free, sensation-free, and safe.</p>
                </div>
             </ScrollReveal>
             
             <ScrollReveal delay={0.2} className="flex-1 w-full flex justify-center">
                <div className="relative aspect-square w-full max-w-sm bg-white dark:bg-gray-900 rounded-full flex items-center justify-center p-8 shadow-inner">
                   {/* Abstract visualization of waves */}
                   <div className="absolute w-full h-full border border-libera-teal/20 rounded-full animate-ping [animation-duration:3s]"></div>
                   <div className="absolute w-3/4 h-3/4 border border-libera-teal/40 rounded-full animate-ping [animation-duration:3s] [animation-delay:0.5s]"></div>
                   <div className="absolute w-1/2 h-1/2 border border-libera-teal/60 rounded-full animate-ping [animation-duration:3s] [animation-delay:1s]"></div>
                   <div className="bg-libera-teal text-white w-24 h-24 rounded-full flex items-center justify-center font-bold z-10 shadow-xl relative">
                      LIBERA
                   </div>
                </div>
             </ScrollReveal>
          </div>
       </section>
    </div>
  );
};

export default HowItWorks;