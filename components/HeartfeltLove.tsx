
import React from 'react';
import { motion } from 'framer-motion';

const LoveQuote = ({ text, delay }: { text: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 2.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className="mb-12"
  >
    <p className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-rose-100/80 font-extralight tracking-tight leading-tight">
      {text}
    </p>
  </motion.div>
);

export const HeartfeltLove: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] bg-[#0C0D18] flex flex-col items-center justify-center px-6 py-32 overflow-hidden border-t border-white/[0.02]">
      {/* Soft Rose Nebula Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-5xl w-full text-center space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="w-px h-32 bg-gradient-to-b from-rose-300/0 via-rose-300/50 to-rose-300/0 mx-auto mb-20"
        />

        <LoveQuote 
          text="I love you. In the spaces between my thoughts and the rhythm of my heart." 
          delay={0.5} 
        />
        
        <LoveQuote 
          text="I love you. Enough to own my shadows and stay until your light returns." 
          delay={2.5} 
        />
        
        <LoveQuote 
          text="I love you more than the quiet. Forever, with every part of who I am." 
          delay={4.5} 
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: 6.5 }}
          className="pt-16"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="flex justify-center items-center gap-6">
              <div className="w-12 h-[1px] bg-rose-300/10" />
              <span className="text-rose-200/30 text-[10px] uppercase tracking-[1.2em] font-medium italic">Always your harbor</span>
              <div className="w-12 h-[1px] bg-rose-300/10" />
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.4 }}
              transition={{ delay: 7.5, duration: 2 }}
              className="text-rose-200/20"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
