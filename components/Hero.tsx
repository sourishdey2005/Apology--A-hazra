
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const Hero: React.FC = () => {
  const sentence = "I’m Sorry";
  const subtext = "For whatever I did wrong — knowingly or unknowingly.";
  const { scrollY } = useScroll();
  
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const letterVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
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
          className="absolute inset-0 bg-cover bg-center opacity-[0.15] saturate-[0.1]"
          style={{ backgroundImage: 'url("https://res.cloudinary.com/dodhvvewu/image/upload/v1768066790/IMG-20260110-WA0344_kllpxq.jpg")' }}
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 w-full max-w-5xl will-change-opacity">
        <motion.h1 
          className="text-7xl md:text-[11rem] font-serif text-[#1a1a1a] mb-12 italic font-light tracking-[-0.04em] flex justify-center flex-wrap gap-x-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {sentence.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2, ease: EASE }}
          className="space-y-10"
        >
          <p className="text-sm md:text-lg text-stone-400 font-light tracking-[0.3em] max-w-2xl mx-auto leading-relaxed text-center uppercase">
            {subtext}
          </p>
          <div className="w-10 h-[1px] bg-rose-200/40 mx-auto" />
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2.5, duration: 2 }}
      >
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-rose-200 to-transparent"
          animate={{ height: [12, 24, 12] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};
