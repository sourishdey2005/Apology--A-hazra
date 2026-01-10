
import React from 'react';
import { motion } from 'framer-motion';

export const TopVisual: React.FC = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#0C0D18]">
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 will-change-transform"
      >
        <img 
          src="https://res.cloudinary.com/dodhvvewu/image/upload/f_auto,q_auto:eco,w_1600/v1768066792/IMG-20260110-WA0337_oblias.jpg" 
          alt="Opening Memory"
          className="w-full h-full object-cover saturate-[0.6] brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#FAF9F6]" />
      </motion.div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 1, duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <p className="text-white/80 font-serif italic text-2xl md:text-4xl font-light tracking-wide max-w-3xl leading-relaxed">
            "I keep wondering, <span className="text-rose-200">Yaar</span>... what was it that made the words stop? I’m still here, holding the silence."
          </p>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.5, duration: 1.5 }}
            className="w-16 h-[1px] bg-white/30 mx-auto" 
          />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 3, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[1em] text-stone-500 font-bold">Scroll to listen</span>
        <div className="w-px h-12 bg-stone-300" />
      </motion.div>
    </section>
  );
};
