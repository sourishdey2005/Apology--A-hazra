
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const Hero: React.FC = () => {
  const sentence = "I’m Sorry";
  const subtext = "For whatever I did wrong — knowingly or unknowingly.";
  const { scrollY } = useScroll();
  
  const yBg = useTransform(scrollY, [0, 1000], [0, 250]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scaleBg = useTransform(scrollY, [0, 1000], [1, 1.15]);

  const letterVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(15px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 2.5, ease: EASE }
    },
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAF9F6]">
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ y: yBg, scale: scaleBg }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.2] saturate-[0.2]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2070")' }}
        />
        <motion.div 
          className="absolute inset-0 z-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 30% 30%, #FDF2F2 0%, transparent 60%)",
              "radial-gradient(circle at 70% 70%, #F5E8E8 0%, transparent 60%)",
              "radial-gradient(circle at 30% 30%, #FDF2F2 0%, transparent 60%)"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 w-full max-w-5xl">
        <motion.h1 
          className="text-7xl md:text-[11rem] font-serif text-[#1a1a1a] mb-12 italic font-light tracking-[-0.04em] flex justify-center flex-wrap gap-x-2"
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
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.8, ease: EASE }}
          className="space-y-10"
        >
          <p className="text-sm md:text-lg text-stone-400 font-light tracking-[0.3em] max-w-2xl mx-auto leading-relaxed text-center uppercase">
            {subtext}
          </p>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3.5, delay: 2.5, ease: EASE }}
            className="w-12 h-[1px] bg-rose-200/60 mx-auto" 
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 4, duration: 3 }}
      >
        <span className="text-[10px] uppercase tracking-[1em] text-stone-400 font-medium">Continue</span>
        <motion.div 
          className="w-[1px] h-20 bg-gradient-to-b from-rose-200 to-transparent"
          animate={{ height: [20, 40, 20], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};
