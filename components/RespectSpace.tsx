
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TypewriterText = ({ text, delay = 0, speed = 0.05 }: { text: string; delay?: number; speed?: number }) => (
  <motion.span
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: {
        transition: { staggerChildren: speed, delayChildren: delay }
      }
    }}
  >
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.span>
);

export const RespectSpace: React.FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yBlur = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section ref={sectionRef} className="relative py-64 bg-[#FAF9F6] px-6 flex items-center justify-center overflow-hidden">
      {/* Intricate Parallax Glows */}
      <motion.div 
        style={{ y: yBlur, rotate }}
        className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-rose-100/40 rounded-full blur-[140px] pointer-events-none" 
      />
      
      <motion.div
        className="relative z-10 w-full max-w-4xl p-12 md:p-32 bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/80 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.05)] text-center group"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Subtle pulsing heart icon in background */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-rose-500 pointer-events-none z-0"
        >
          <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </motion.div>

        <div className="space-y-16 text-[#333333] relative z-10">
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-serif italic tracking-widest text-rose-400 font-light">
              <TypewriterText text="I just wanted you to know —" />
            </p>
            <div className="w-16 h-[1px] bg-rose-200 mx-auto" />
          </div>
          
          <div className="space-y-10">
            <p className="text-2xl md:text-4xl font-serif text-[#1a1a1a] leading-relaxed italic font-light tracking-tight">
              <TypewriterText 
                text="What I did Yaar, you stopped talking?" 
                delay={1.8} 
              />
            </p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.15 }}
              viewport={{ once: true }}
              transition={{ delay: 4, duration: 2 }}
              className="w-10 h-10 mx-auto"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </motion.div>

            <h2 className="text-xl md:text-3xl font-light text-stone-500 tracking-wide leading-loose">
              <TypewriterText 
                text="I’m still waiting your Congratulations and Happy New Year…….." 
                delay={5.0} 
                speed={0.07}
              />
            </h2>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
