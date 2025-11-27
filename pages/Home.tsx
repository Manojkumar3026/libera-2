import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import ScrollReveal from '../components/ScrollReveal';
import CircularText from '../components/CircularText';
import CircularGallery from '../components/CircularGallery';
import ThreeDCard from '../components/ThreeDCard';
import ModelViewer from '../components/ModelViewer';
import { FEATURES, TESTIMONIALS } from '../constants';
import { Star, Smartphone, ArrowRight, Heart, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  
  const galleryItems = [
    { image: 'https://picsum.photos/seed/liberaLife1/600/800', text: 'Work' },
    { image: 'https://picsum.photos/seed/liberaLife2/600/800', text: 'Relax' },
    { image: 'https://picsum.photos/seed/liberaLife3/600/800', text: 'Travel' },
    { image: 'https://picsum.photos/seed/liberaLife4/600/800', text: 'Sleep' },
    { image: 'https://picsum.photos/seed/liberaLife5/600/800', text: 'Yoga' },
    { image: 'https://picsum.photos/seed/liberaLife6/600/800', text: 'Study' },
  ];

  return (
    <div className="overflow-hidden bg-libera-cream dark:bg-libera-darkBg">
      <div className="relative">
         <div className="absolute top-20 right-10 z-20 hidden lg:block opacity-60">
            <CircularText 
               text="GENTLE RELIEF • DRUG FREE • " 
               className="text-libera-rose dark:text-libera-lilac text-xs" 
               spinDuration={15} 
            />
         </div>
         <Hero />
      </div>
      
      <Ticker />

      {/* 3D Product Showcase */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
         <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-5xl text-libera-charcoal dark:text-white font-bold mb-4">
              Explore <span className="text-libera-rose">LIBERA</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
               Interact with the device that's changing menstrual care.
            </p>
         </ScrollReveal>
         
         <div className="grid lg:grid-cols-2 gap-12 items-center">
             <ScrollReveal className="h-[500px] w-full">
                {/* Using a sample GLB that looks somewhat like a rounded device (ToyCar used as placeholder for 3D logic, ideally this is the Libera Device) */}
                <ModelViewer url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf" autoRotate={true} />
                <p className="text-center text-xs text-gray-400 mt-2">*Interactive 3D View</p>
             </ScrollReveal>
             
             <ScrollReveal delay={0.2} className="space-y-8">
                <ThreeDCard className="bg-white dark:bg-libera-darkCard p-8 rounded-3xl shadow-xl border border-libera-rose/20">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="bg-libera-rose/20 p-3 rounded-full text-libera-rose"><Heart size={24} fill="currentColor" /></div>
                      <h3 className="font-serif text-2xl font-bold text-libera-charcoal dark:text-white">Comfort First Design</h3>
                   </div>
                   <p className="text-gray-600 dark:text-gray-300">
                      Curved to fit your body perfectly. The soft-touch silicone finish feels gentle against your skin, making it invisible under clothes.
                   </p>
                </ThreeDCard>
                
                <ThreeDCard className="bg-white dark:bg-libera-darkCard p-8 rounded-3xl shadow-xl border border-libera-orchid/20">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="bg-libera-orchid/20 p-3 rounded-full text-libera-orchid"><Zap size={24} fill="currentColor" /></div>
                      <h3 className="font-serif text-2xl font-bold text-libera-charcoal dark:text-white">Instant Relief</h3>
                   </div>
                   <p className="text-gray-600 dark:text-gray-300">
                      Advanced PEMF waves target pain receptors immediately. Feel the soothing sensation wash over you in minutes.
                   </p>
                </ThreeDCard>
             </ScrollReveal>
         </div>
      </section>

      {/* Product Highlight Section - Classic vs Smart */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Classic */}
          <ScrollReveal delay={0.1} className="h-full">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-libera-cream to-white dark:from-libera-darkCard dark:to-gray-900 rounded-[2.5rem] p-10 shadow-lg border border-libera-rose/10 text-center relative overflow-hidden group h-full flex flex-col"
            >
               <div className="absolute top-0 right-0 bg-libera-rose text-white text-xs font-bold px-6 py-2 rounded-bl-2xl uppercase tracking-widest">Best Value</div>
               <div className="h-64 bg-libera-rose/5 rounded-3xl mb-8 flex items-center justify-center overflow-hidden relative">
                   <div className="absolute inset-0 bg-libera-rose/20 blur-3xl rounded-full transform scale-75"></div>
                   <img src="https://picsum.photos/seed/liberaClassic/400/400" alt="Libera Classic" className="object-cover h-48 w-48 rounded-2xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500" />
               </div>
               <h3 className="font-serif text-3xl font-bold mb-2 text-libera-charcoal dark:text-white">LIBERA Classic</h3>
               <p className="text-gray-500 mb-8 font-medium">Simple one-touch relief.</p>
               <ul className="text-left text-sm space-y-3 mb-8 text-gray-600 dark:text-gray-400 max-w-xs mx-auto flex-grow">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-libera-rose rounded-full"></span>Single optimized PEMF setting</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-libera-rose rounded-full"></span>Easy On/Off button</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-libera-rose rounded-full"></span>Compact & discreet</li>
               </ul>
               <button className="w-full py-4 border-2 border-libera-rose text-libera-rose font-bold rounded-full hover:bg-libera-rose hover:text-white transition-all">Shop Classic</button>
            </motion.div>
          </ScrollReveal>

          {/* Smart */}
          <ScrollReveal delay={0.2} className="h-full">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-libera-orchid/10 to-libera-mint/10 dark:from-gray-800 dark:to-gray-900 rounded-[2.5rem] p-10 shadow-xl border border-libera-orchid/20 text-center relative overflow-hidden group h-full flex flex-col"
            >
               <div className="absolute top-0 right-0 bg-libera-orchid text-white text-xs font-bold px-6 py-2 rounded-bl-2xl uppercase tracking-widest">Most Popular</div>
               <div className="h-64 bg-libera-orchid/5 rounded-3xl mb-8 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-libera-orchid/20 blur-3xl rounded-full transform scale-75"></div>
                  <img src="https://picsum.photos/seed/liberaSmart/400/400" alt="Libera Smart" className="object-cover h-48 w-48 rounded-2xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500" />
               </div>
               <h3 className="font-serif text-3xl font-bold mb-2 text-libera-charcoal dark:text-white">LIBERA Smart</h3>
               <p className="text-gray-500 mb-8 font-medium">Connected comfort via App.</p>
               <ul className="text-left text-sm space-y-3 mb-8 text-gray-600 dark:text-gray-400 max-w-xs mx-auto flex-grow">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-libera-orchid rounded-full"></span>Bluetooth Connectivity</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-libera-orchid rounded-full"></span>3 Adjustable Intensity Levels</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-libera-orchid rounded-full"></span>Usage Tracking via App</li>
               </ul>
               <button className="w-full py-4 bg-libera-orchid text-white font-bold rounded-full hover:bg-libera-charcoal transition-all shadow-lg hover:shadow-libera-orchid/30">Shop Smart</button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lifestyle Circular Gallery */}
      <section className="bg-libera-charcoal text-white py-20 overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-libera-cream dark:from-libera-darkBg to-transparent z-10"></div>
         <div className="max-w-7xl mx-auto px-4 text-center mb-10 relative z-20">
            <h2 className="font-serif text-4xl font-bold mb-2">Designed for Your Life</h2>
            <p className="text-gray-400">Move freely, live fully.</p>
         </div>
         
         <div className="h-[500px] w-full relative z-0">
            <CircularGallery 
               items={galleryItems} 
               textColor="#ffffff" 
               bend={2} 
               borderRadius={0.1}
            />
         </div>
      </section>

      {/* App Feature Section */}
      <section className="bg-libera-cream dark:bg-black py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
           <ScrollReveal delay={0.2} className="order-2 md:order-1 relative flex justify-center">
              <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                 <div className="rounded-[2rem] overflow-hidden w-full h-full bg-libera-orchid/10 relative">
                    <img src="https://picsum.photos/seed/liberaAppUI/300/600" alt="App Interface" className="w-full h-full object-cover opacity-90" />
                 </div>
              </div>
           </ScrollReveal>
           
           <ScrollReveal className="order-1 md:order-2 space-y-6">
              <div className="w-16 h-16 bg-libera-orchid/10 rounded-2xl flex items-center justify-center text-libera-orchid mb-4">
                 <Smartphone size={32} />
              </div>
              <h2 className="font-serif text-5xl font-bold text-libera-charcoal dark:text-white">Control your comfort.</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                 With the LIBERA Smart App, relief is in your hands. Adjust intensity, track your usage history, and check battery life—all from your phone.
              </p>
              
              <div className="grid grid-cols-1 gap-6 pt-4">
                 <ThreeDCard className="bg-white dark:bg-libera-darkCard p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-4">
                       <div className="bg-libera-coral/20 p-2 rounded-full"><Smartphone className="text-libera-coral" size={24} /></div>
                       <div>
                          <h4 className="font-bold text-lg text-libera-charcoal dark:text-white">Easy Pairing</h4>
                          <p className="text-sm text-gray-500">Connects in seconds via Bluetooth.</p>
                       </div>
                    </div>
                 </ThreeDCard>
                 <ThreeDCard className="bg-white dark:bg-libera-darkCard p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-4">
                       <div className="bg-libera-mint/20 p-2 rounded-full"><Star className="text-libera-mint" size={24} /></div>
                       <div>
                          <h4 className="font-bold text-lg text-libera-charcoal dark:text-white">Personalized Therapy</h4>
                          <p className="text-sm text-gray-500">Choose from 3 gentle intensity levels.</p>
                       </div>
                    </div>
                 </ThreeDCard>
              </div>

              <div className="pt-8 flex gap-4">
                 <button className="bg-libera-charcoal text-white px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition transform hover:-translate-y-1">
                    <span className="text-xs text-gray-300">Download on the</span><br/><span className="font-bold text-lg leading-none">App Store</span>
                 </button>
                 <button className="bg-libera-charcoal text-white px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition transform hover:-translate-y-1">
                    <span className="text-xs text-gray-300">GET IT ON</span><br/><span className="font-bold text-lg leading-none">Google Play</span>
                 </button>
              </div>
           </ScrollReveal>
        </div>
      </section>

      {/* Features Grid with 3D Cards */}
      <section className="py-24 bg-white dark:bg-libera-darkBg">
        <div className="max-w-7xl mx-auto px-4">
           <ScrollReveal className="text-center mb-16">
             <h2 className="font-serif text-4xl font-bold mb-4 dark:text-white">Why women love <span className="text-libera-rose">LIBERA</span></h2>
             <p className="text-gray-500 dark:text-gray-400">Trusted by women, approved by science.</p>
           </ScrollReveal>
           
           <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
             {FEATURES.map((feature, idx) => (
               <ScrollReveal key={idx} delay={idx * 0.1}>
                 <ThreeDCard className="h-full">
                    <div className="flex flex-col items-center text-center p-8 bg-libera-cream dark:bg-gray-800 rounded-3xl hover:bg-libera-rose/5 transition-colors h-full border border-transparent hover:border-libera-rose/20">
                       <div className="w-16 h-16 bg-white dark:bg-gray-700 text-libera-rose rounded-full flex items-center justify-center mb-6 shadow-md">
                         <feature.icon size={32} />
                       </div>
                       <h3 className="font-bold text-lg mb-3 dark:text-gray-200">{feature.title}</h3>
                       <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                    </div>
                 </ThreeDCard>
               </ScrollReveal>
             ))}
           </div>
           
           <ScrollReveal delay={0.3} className="text-center mt-16">
             <Link to="/why-libera" className="inline-flex items-center text-libera-charcoal font-bold hover:text-libera-rose transition-colors text-lg">
               See detailed comparison <ArrowRight size={20} className="ml-2" />
             </Link>
           </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-libera-lilac/30 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
           <ScrollReveal>
              <h2 className="font-serif text-3xl font-bold text-center mb-12 dark:text-white">Real Stories, Real Relief</h2>
           </ScrollReveal>
           <div className="grid md:grid-cols-3 gap-8">
             {TESTIMONIALS.map((t, i) => (
               <ScrollReveal key={i} delay={i * 0.15}>
                 <ThreeDCard className="h-full">
                    <div className="bg-white dark:bg-libera-darkCard p-10 rounded-[2rem] shadow-sm relative h-full">
                       <div className="text-libera-orchid text-6xl font-serif absolute top-6 left-6 opacity-20">"</div>
                       <p className="text-gray-600 dark:text-gray-300 mb-8 mt-4 italic relative z-10 leading-relaxed text-lg">{t.quote}</p>
                       <div className="flex items-center gap-4 mt-auto">
                          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow">
                             <img src={`https://picsum.photos/seed/p${i}/100/100`} alt={t.name} />
                          </div>
                          <div>
                             <p className="font-bold text-base dark:text-white">{t.name}</p>
                             <p className="text-xs text-libera-rose font-bold uppercase tracking-wider">{t.role}</p>
                          </div>
                       </div>
                    </div>
                 </ThreeDCard>
               </ScrollReveal>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;