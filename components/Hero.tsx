
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const sentence = "I’m Sorry";
  const subtext = "For whatever I did wrong — knowingly or unknowingly.";
  const { scrollY } = useScroll();
  
  // Parallax effect: background moves at a slower rate than the scroll
  // We scale the background slightly (1.1) to give it room to move without showing edges.
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleBg = useTransform(scrollY, [0, 1000], [1.1, 1.2]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAF9F6]">
      {/* Parallax Background Container */}
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ y: yBg, scale: scaleBg }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 saturate-[0.7]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2070")' }}
        />
        
        {/* Animated breathing gradients for extra depth */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-60"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, #FDF2F2 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, #F5E8E8 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, #FDF2F2 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Foreground Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-6">
        <motion.h1 
          className="text-7xl md:text-9xl font-serif text-[#333333] mb-8 italic font-light tracking-tighter flex justify-center flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sentence.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
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
          className="space-y-4"
        >
          <p className="text-xl md:text-2xl text-[#555555] font-light tracking-wide max-w-lg mx-auto leading-relaxed flex flex-wrap justify-center">
            {subtext.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                transition={{ duration: 0.8 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </p>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.5, delay: 3, ease: "circOut" }}
            className="w-16 h-[1px] bg-rose-200 mx-auto" 
          />
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 5, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400">Scroll gently</span>
        <motion.div 
          className="w-[1px] h-16 bg-gradient-to-b from-[#E8D5D5] to-transparent"
          animate={{ height: [16, 32, 16] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};
