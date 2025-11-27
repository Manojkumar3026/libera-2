import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  // 'up' is the default subtle slide up. 'none' just fades in.
  animation?: 'up' | 'fade'; 
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  animation = 'up'
}) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: animation === 'up' ? 30 : 0 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;