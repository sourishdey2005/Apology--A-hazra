
import React from 'react';
import { motion } from 'framer-motion';

export const TopVisual: React.FC = () => {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden bg-[#0C0D18]">
      {/* Cinematic Background with Ken Burns Effect */}
      <motion.div 
        initial={{ scale: 1.25, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 will-change-transform"
      >
        <img 
          src="https://res.cloudinary.com/dodhvvewu/image/upload/f_auto,q_auto:eco,w_1600/v1768066792/IMG-20260110-WA0337_oblias.jpg" 
          alt="Opening Memory"
          className="w-full h-full object-cover saturate-[0.4] brightness-[0.6] sepia-[0.2]"
        />
        {/* Deep vignette and gradient to transition to Hero section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#FAF9F6]" />
      </motion.div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(20px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 1, duration: 3, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12 max-w-5xl"
        >
          <div className="space-y-8">
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "1.5em" }}
              animate={{ opacity: 0.4, letterSpacing: "1em" }}
              transition={{ delay: 2, duration: 2 }}
              className="text-[11px] uppercase text-rose-200 font-bold block"
            >
              A Heart's Quiet Whisper
            </motion.span>
            <h2 className="text-white font-serif italic text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.15]">
              "I just wanted to whisper into the wind... <br/> 
              <span className="text-rose-200/90 italic">Yaar</span>, tell me, <br/> 
              when did the music of our souls lose its voice?"
            </h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 3.5, duration: 2 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
            <p className="text-stone-300 font-light italic text-xl md:text-2xl tracking-wide max-w-3xl mx-auto leading-relaxed">
              I am still standing in the tender, blue quiet of that last December... <br/>
              holding my breath for a New Year that refuses to arrive without you.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 5.5, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <span className="text-[9px] uppercase tracking-[1em] text-stone-500 font-bold italic">Waiting for your sun to rise</span>
      </motion.div>
    </section>
  );
};
