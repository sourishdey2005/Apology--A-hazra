
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const Hero: React.FC = () => {
  const sentence = "I’m Sorry";
  const subtext = "For every moment I failed to be the home you deserved.";
  const { scrollY } = useScroll();
  
  // Adjusted transforms to make the text "stay" and feel more grounded
  const yBg = useTransform(scrollY, [0, 1000], [0, 150]);
  // Fades out much more slowly now, and only to 0.1 instead of 0 to keep it "there"
  const opacity = useTransform(scrollY, [0, 800], [1, 0.1]);
  const scale = useTransform(scrollY, [0, 800], [1, 0.95]);

  const letterVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 2.2, ease: EASE }
    },
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAF9F6]">
      <motion.div 
        className="absolute inset-0 z-0 origin-center will-change-transform"
        style={{ y: yBg }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.2] saturate-[0.2] contrast-[0.9]"
          style={{ backgroundImage: 'url("https://res.cloudinary.com/dodhvvewu/image/upload/v1768066790/IMG-20260110-WA0344_kllpxq.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF9F6]/20 to-[#FAF9F6]" />
      </motion.div>

      <motion.div 
        style={{ opacity, scale }} 
        className="relative z-10 text-center px-6 w-full max-w-7xl will-change-transform"
      >
        <motion.h1 
          className="text-7xl md:text-[12rem] font-serif text-[#1a1a1a] mb-12 italic font-light tracking-[-0.05em] flex justify-center flex-wrap gap-x-1 md:gap-x-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12 } }
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.5, ease: EASE }}
          className="space-y-12"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-[1px] bg-rose-300/60" />
            <p className="text-sm md:text-xl text-stone-500 font-light tracking-[0.4em] max-w-3xl mx-auto leading-relaxed text-center uppercase">
              {subtext}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Aesthetic bottom indicator */}
      <motion.div 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 3, duration: 2 }}
      >
        <motion.div 
          className="w-[1px] h-16 bg-gradient-to-b from-stone-400 to-transparent"
          animate={{ height: [16, 32, 16], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};
