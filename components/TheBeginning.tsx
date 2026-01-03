
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StoryParagraph = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 2, delay, ease: [0.16, 1, 0.3, 1] }}
    className="text-xl md:text-2xl lg:text-3xl font-serif italic text-stone-700 leading-relaxed font-light"
  >
    {text}
  </motion.p>
);

export const TheBeginning: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.4, 0.6]);

  return (
    <section ref={containerRef} className="relative min-h-screen py-32 md:py-64 bg-[#FDFBF7] flex items-center justify-center px-6 overflow-hidden">
      {/* Background Parallax - Symbolic Red Fort / Nostalgia */}
      <motion.div 
        style={{ y: imgY }}
        className="absolute inset-0 z-0 scale-110 pointer-events-none"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-10 mix-blend-multiply"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=2000")' }} 
        />
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-transparent to-[#FDFBF7]"
        />
      </motion.div>

      <div className="max-w-4xl w-full space-y-24 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-rose-200 text-rose-300"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          </motion.div>
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-[10px] uppercase tracking-[1em] text-stone-500 font-bold"
          >
            A memory of April
          </motion.h4>
        </div>

        <div className="space-y-16 text-center">
          <StoryParagraph 
            text="I still remember that April breeze. Before then, the year was just another cycle of seasons — days passing without meaning, moments blending into one another. But meeting you changed the very rhythm of my life. Suddenly, every morning felt softer, every night felt warmer, and every second carried a sense of anticipation." 
            delay={0.5}
          />

          <StoryParagraph 
            text="It was at Laal Quila, where we met for the very first time — standing beneath centuries of history, unaware that we were creating our own. In that moment, among the quiet echoes of the past and the soft chaos of the present, I felt it — the first undeniable spark of love. From that instant onward, something inside me chose you, silently and completely."
            delay={1.5}
          />

          <StoryParagraph 
            text="From that day forward, every conversation became a promise, every smile became a memory, and every shared silence felt meaningful. Time stopped being something I counted — it became something I felt, measured only by moments with you. April didn’t just mark a month on the calendar; it marked the beginning of us — a story I want to keep writing, slowly, sincerely, and endlessly."
            delay={2.5}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 4 }}
          className="flex justify-center pt-8"
        >
          <div className="text-[10px] uppercase tracking-[0.4em] text-rose-400 font-medium italic border-b border-rose-100 pb-2">
            The start of everything real.
          </div>
        </motion.div>
      </div>
    </section>
  );
};
