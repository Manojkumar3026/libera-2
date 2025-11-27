import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-libera-offWhite dark:bg-libera-darkBg min-h-[90vh] flex items-center">
      {/* Background Decorative Blob */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-libera-pink/30 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-libera-lavender/30 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-libera-pink/30 text-libera-charcoal dark:text-white text-xs font-bold tracking-widest uppercase mb-2">
              CDSCO Approved • Drug-Free Relief
            </span>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-libera-charcoal dark:text-libera-offWhite">
              Your gentle, <span className="text-libera-teal italic">drug-free hug</span> for monthly relief.
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 font-light">
              Comfort and care designed just for you. Experience the power of PEMF technology in a discreet, wearable device.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="bg-libera-charcoal dark:bg-libera-teal text-white dark:text-libera-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 dark:hover:bg-libera-tealDark dark:hover:text-white transition-all shadow-xl hover:translate-y-[-2px] flex items-center justify-center gap-2 group">
                Feel the Relief
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => navigate('/how-it-works')}
                className="bg-transparent border-2 border-libera-charcoal dark:border-white text-libera-charcoal dark:text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-libera-charcoal hover:text-white dark:hover:bg-white dark:hover:text-libera-charcoal transition-all"
              >
                Learn How It Works
              </button>
            </div>
            
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500 dark:text-gray-400">
               <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-300 overflow-hidden">
                       <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" />
                    </div>
                  ))}
               </div>
               <span className="pl-2">Trusted by thousands of women</span>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] w-full flex items-center justify-center"
          >
             {/* Main Product/Lifestyle Image Placeholder */}
             <div className="relative w-full h-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-libera-pink/30 to-libera-teal/30 rounded-[3rem] transform rotate-3 blur-sm"></div>
                <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-[3rem] border border-white/20 overflow-hidden shadow-2xl">
                   <img 
                      src="https://picsum.photos/seed/liberaWoman/800/1000" 
                      alt="Woman relaxing with Libera" 
                      className="w-full h-full object-cover"
                   />
                </div>
                
                {/* Floating Badge */}
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                   className="absolute bottom-8 -left-4 bg-white dark:bg-libera-darkCard p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[200px]"
                >
                   <div className="bg-green-100 p-2 rounded-full text-green-600">
                      <ShieldCheck size={24} />
                   </div>
                   <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">Approved</p>
                      <p className="text-sm font-semibold text-libera-charcoal dark:text-white">CDSCO Registered</p>
                   </div>
                </motion.div>
             </div>
          </motion.div>
        </div>
      </div>
      
      {/* Running Marquee Text Background */}
      <div className="absolute bottom-0 w-full overflow-hidden opacity-5 pointer-events-none select-none">
        <div className="whitespace-nowrap animate-marquee text-[10rem] font-bold font-serif text-libera-charcoal dark:text-white leading-none">
          HER COMFORT • HER POWER • HER FREEDOM • LIBERA CARE • PERIOD PEACE • 
        </div>
      </div>
    </div>
  );
};

export default Hero;