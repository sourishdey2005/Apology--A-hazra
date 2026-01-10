
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const Hero: React.FC = () => {
  const sentence = "I’m Sorry";
  const subtext = "For every moment I failed to be the home you deserved.";
  const { scrollY } = useScroll();
  
  // Parallax optimized for performance
  const yBg = useTransform(scrollY, [0, 1000], [0, 150]);
  const yText = useTransform(scrollY, [0, 1000], [0, -50]);
  
  // High persistence: Text stays visible at 70% even after significant scroll
  const opacity = useTransform(scrollY, [0, 1000], [1, 0.7]);
  const scale = useTransform(scrollY, [0, 1000], [1, 0.98]);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.8, ease: EASE }
    },
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAF9F6]">
      <motion.div 
        className="absolute inset-0 z-0 origin-center will-change-transform"
        style={{ y: yBg }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.25] saturate-[0.3] contrast-[1.05]"
          style={{ backgroundImage: 'url("https://res.cloudinary.com/dodhvvewu/image/upload/f_auto,q_auto:best,w_1600/v1768066790/IMG-20260110-WA0344_kllpxq.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF9F6]/30 to-[#FAF9F6]" />
      </motion.div>

      <motion.div 
        style={{ opacity, scale, y: yText }} 
        className="relative z-10 text-center px-6 w-full max-w-7xl will-change-transform"
      >
        <motion.h1 
          className="text-7xl md:text-[14rem] font-serif text-[#1a1a1a] mb-12 italic font-semibold tracking-[-0.05em] flex justify-center flex-wrap gap-x-1 md:gap-x-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {sentence.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="space-y-8"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-[1px] bg-rose-400/30" />
            <p className="text-sm md:text-xl text-stone-500 font-light tracking-[0.4em] max-w-2xl mx-auto leading-relaxed text-center uppercase">
              {subtext}
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-20">
        <motion.div 
          className="w-[1px] h-12 bg-stone-400"
          animate={{ height: [12, 24, 12] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </section>
  );
};
