
import React from 'react';
import { motion } from 'framer-motion';

export const TopVisual: React.FC = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-stone-100">
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img 
          src="https://res.cloudinary.com/dodhvvewu/image/upload/f_auto,q_auto:eco,w_1600/v1768066792/IMG-20260110-WA0337_oblias.jpg" 
          alt="Opening Memory"
          className="w-full h-full object-cover saturate-[0.8] brightness-[0.9]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#FAF9F6]" />
      </motion.div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="space-y-4"
        >
          <span className="text-[10px] uppercase tracking-[1em] text-white/60 font-medium">A Moment Held</span>
          <div className="w-8 h-[1px] bg-white/20 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};
