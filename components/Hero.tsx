
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const sentence = "I’m Sorry";
  const subtext = "For whatever I did wrong — knowingly or unknowingly.";
  const { scrollY } = useScroll();
  
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleBg = useTransform(scrollY, [0, 1000], [1.1, 1.25]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10, rotateX: 45 },
    visible: { opacity: 1, y: 0, rotateX: 0 },
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAF9F6]">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ y: yBg, scale: scaleBg }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 saturate-[0.5]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2070")' }}
        />
        <motion.div 
          className="absolute inset-0 z-0 opacity-40"
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

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 w-full max-w-5xl">
        <motion.h1 
          className="text-7xl md:text-[10rem] font-serif text-[#1a1a1a] mb-12 italic font-light tracking-[-0.05em] flex justify-center flex-wrap gap-x-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sentence.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
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
              transition: { staggerChildren: 0.04, delayChildren: 1.8 }
            }
          }}
          className="space-y-6"
        >
          <p className="text-xl md:text-2xl text-stone-500 font-light tracking-[0.1em] max-w-3xl mx-auto leading-relaxed text-center uppercase">
            {subtext.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{ hidden: { opacity: 0, filter: 'blur(4px)' }, visible: { opacity: 1, filter: 'blur(0px)' } }}
                transition={{ duration: 1.2 }}
              >
                {char}
              </motion.span>
            ))}
          </p>
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 3.5, ease: "circOut" }}
            className="w-24 h-[1px] bg-rose-200 mx-auto" 
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 6, duration: 2 }}
      >
        <span className="text-[9px] uppercase tracking-[0.6em] text-stone-400 font-bold">Begin your journey</span>
        <motion.div 
          className="w-[1px] h-20 bg-gradient-to-b from-[#E8D5D5] to-transparent"
          animate={{ height: [20, 40, 20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};
