
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TypewriterText = ({ text, delay = 0, speed = 0.04 }: { text: string; delay?: number; speed?: number }) => (
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

  const yBlur = useTransform(scrollYProgress, [0, 1], [-120, 120]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section ref={sectionRef} className="relative py-64 bg-[#FAF9F6] px-6 flex items-center justify-center overflow-hidden">
      {/* Intricate Parallax Glows */}
      <motion.div 
        style={{ y: yBlur, rotate }}
        className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-rose-100/30 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [120, -120]) }}
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-stone-100/40 rounded-full blur-[100px] pointer-events-none" 
      />

      <motion.div
        className="relative z-10 w-full max-w-2xl p-16 md:p-24 bg-white/30 backdrop-blur-xl rounded-[2.5rem] border border-white/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.03)] text-center group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="space-y-8 text-[#333333]">
          <div className="space-y-4">
            <p className="text-xl font-light tracking-wide text-stone-500">
              <TypewriterText text="I’m not asking you to forgive me." />
            </p>
            <p className="text-xl font-light tracking-wide text-stone-500">
              <TypewriterText text="I’m not asking you to respond." delay={1.5} />
            </p>
          </div>
          
          <div className="py-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
              viewport={{ once: true }}
              transition={{ delay: 2.5, duration: 2 }}
              className="w-8 h-8 mx-auto mb-8 group-hover:opacity-40 transition-opacity duration-1000"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </motion.div>
            <p className="text-xl font-light tracking-widest italic text-rose-400">
              <TypewriterText text="I just wanted you to know —" delay={3} />
            </p>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] tracking-tight leading-tight">
            <TypewriterText text="I care enough to say sorry." delay={4} />
          </h2>
        </div>
      </motion.div>
    </section>
  );
};
