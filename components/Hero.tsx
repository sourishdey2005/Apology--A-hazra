
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const sentence = "I’m Sorry";
  const subtext = "For whatever I did wrong — knowingly or unknowingly.";
  const { scrollY } = useScroll();
  
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scaleBg = useTransform(scrollY, [0, 1000], [1.05, 1.2]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  // Fixed: Cast the cubic-bezier array as a tuple of numbers to satisfy Framer Motion's Easing type
  const letterVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
    },
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAF9F6]">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ y: yBg, scale: scaleBg }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.25] saturate-[0.3]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2070")' }}
        />
        <motion.div 
          className="absolute inset-0 z-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, #FDF2F2 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, #F5E8E8 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, #FDF2F2 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 w-full max-w-5xl">
        <motion.h1 
          className="text-7xl md:text-[11rem] font-serif text-[#1a1a1a] mb-8 italic font-light tracking-[-0.03em] flex justify-center flex-wrap gap-x-1"
          variants={letterVariants}
          initial="hidden"
          animate="visible"
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
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.03, delayChildren: 1.5 }
            }
          }}
          className="space-y-8"
        >
          <p className="text-lg md:text-xl text-stone-400 font-light tracking-[0.2em] max-w-3xl mx-auto leading-relaxed text-center uppercase">
            {subtext.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                transition={{ duration: 1.5 }}
              >
                {char}
              </motion.span>
            ))}
          </p>
          {/* Fixed: Cast the ease array as a tuple of numbers */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.3 }}
            transition={{ duration: 4, delay: 3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="w-16 h-[1px] bg-rose-300 mx-auto" 
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 5, duration: 2.5 }}
      >
        <span className="text-[9px] uppercase tracking-[0.8em] text-stone-400 font-bold">Scroll to begin</span>
        <motion.div 
          className="w-[1px] h-16 bg-gradient-to-b from-rose-200 to-transparent"
          animate={{ height: [16, 32, 16], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};
