
import React from 'react';
import { motion } from 'framer-motion';

export const TopVisual: React.FC = () => {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden bg-[#0C0D18]">
      {/* Cinematic Background with Ken Burns Effect */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.65 }}
        transition={{ duration: 6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 will-change-transform"
      >
        <img 
          src="https://res.cloudinary.com/dodhvvewu/image/upload/f_auto,q_auto:eco,w_1600/v1768066792/IMG-20260110-WA0337_oblias.jpg" 
          alt="Opening Memory"
          className="w-full h-full object-cover saturate-[0.5] brightness-[0.7]"
        />
        {/* Deep vignette and gradient to transition to Hero section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#FAF9F6]" />
      </motion.div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(15px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 1.2, duration: 3, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-10 max-w-4xl"
        >
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[1.2em] text-rose-200/50 font-medium block">A Question for the Silence</span>
            <h2 className="text-white/90 font-serif italic text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-snug">
              "I keep wondering, <span className="text-rose-200/90 underline decoration-rose-300/30 underline-offset-8">Yaar</span>... how did the words stop so suddenly?"
            </h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 3, duration: 2 }}
            className="text-stone-300 font-light italic text-lg md:text-xl tracking-wide max-w-2xl mx-auto leading-relaxed"
          >
            The world moved on, the calendar turned, but I am still here—listening for the sound of you.
          </motion.p>

          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 3.5, duration: 2 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto" 
          />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 4.5, duration: 2 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-stone-400 to-transparent" />
      </motion.div>
    </section>
  );
};
