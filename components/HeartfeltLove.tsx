
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
    <section className="relative min-h-[70vh] bg-[#0C0D18] flex flex-col items-center justify-center px-6 py-32 overflow-hidden border-t border-white/[0.02]">
      {/* Soft Rose Nebula Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-4xl w-full text-center space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="w-px h-24 bg-gradient-to-b from-rose-300/0 via-rose-300/50 to-rose-300/0 mx-auto mb-16"
        />

        <LoveQuote 
          text="I love you. More than the words I can find, and more than the silence I've kept." 
          delay={0.5} 
        />
        
        <LoveQuote 
          text="I love you. In the quiet, in the regret, and in every hope I have for you." 
          delay={2.5} 
        />
        
        <LoveQuote 
          text="I love you a lot. Forever, quietly, and with all my heart." 
          delay={4.5} 
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: 6.5 }}
          className="pt-12"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="w-8 h-[1px] bg-rose-300/20" />
            <span className="text-rose-300/40 text-[10px] uppercase tracking-[1em] font-medium">Always</span>
            <div className="w-8 h-[1px] bg-rose-300/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
