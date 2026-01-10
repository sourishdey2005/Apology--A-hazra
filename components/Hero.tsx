
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const Hero: React.FC = () => {
  const sentence = "I’m Sorry";
  const subtext = "For every moment I failed to be the home you deserved.";
  const { scrollY } = useScroll();
  
  // Adjusted transforms to make the text "stay" much longer and maintain high visibility
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);
  const yText = useTransform(scrollY, [0, 1000], [0, -100]);
  
  // Fades out extremely slowly, staying at 0.6 visibility even after deep scrolling
  const opacity = useTransform(scrollY, [0, 1200], [1, 0.6]);
  const scale = useTransform(scrollY, [0, 1200], [1, 0.98]);

  const letterVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(15px)', scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      scale: 1,
      transition: { duration: 2.5, ease: EASE }
    },
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAF9F6]">
      <motion.div 
        className="absolute inset-0 z-0 origin-center will-change-transform"
        style={{ y: yBg }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.25] saturate-[0.3] contrast-[1.1]"
          style={{ backgroundImage: 'url("https://res.cloudinary.com/dodhvvewu/image/upload/v1768066790/IMG-20260110-WA0344_kllpxq.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF9F6]/40 to-[#FAF9F6]" />
      </motion.div>

      <motion.div 
        style={{ opacity, scale, y: yText }} 
        className="relative z-10 text-center px-6 w-full max-w-7xl will-change-transform"
      >
        <motion.h1 
          className="text-7xl md:text-[13rem] font-serif text-[#1a1a1a] mb-12 italic font-medium tracking-[-0.04em] flex justify-center flex-wrap gap-x-1 md:gap-x-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.8, ease: EASE }}
          className="space-y-12"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="w-24 h-[1px] bg-rose-400/40" />
            <p className="text-base md:text-2xl text-stone-600 font-light tracking-[0.35em] max-w-3xl mx-auto leading-relaxed text-center uppercase">
              {subtext}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Aesthetic bottom scroll indicator */}
      <motion.div 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 3.5, duration: 2 }}
      >
        <motion.div 
          className="w-[1px] h-20 bg-gradient-to-b from-stone-400 to-transparent"
          animate={{ height: [20, 40, 20], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};
