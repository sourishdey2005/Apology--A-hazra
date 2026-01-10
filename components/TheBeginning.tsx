
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StoryParagraph = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <motion.p
    initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 1.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className="text-xl md:text-2xl lg:text-3xl font-serif italic text-stone-700 leading-relaxed font-light px-4"
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

  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="relative min-h-screen py-40 md:py-64 bg-[#FDFBF7] flex items-center justify-center px-6 overflow-hidden">
      <motion.div 
        style={{ y: imgY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-[0.05]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&q=auto&f_auto&w=1600")' }} 
        />
      </motion.div>

      <div className="max-w-4xl w-full space-y-24 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.h4 
            initial={{ opacity: 0, letterSpacing: "1.2em" }}
            whileInView={{ opacity: 0.4, letterSpacing: "0.8em" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-[10px] uppercase text-stone-500 font-bold"
          >
            A memory of April
          </motion.h4>
        </div>

        <div className="space-y-20 text-center">
          <StoryParagraph 
            text="I still remember that April breeze. Before then, the year was just another cycle of seasons — days passing without meaning, moments blending into one another. But meeting you changed the very rhythm of my life. Suddenly, every morning felt softer, every night felt warmer, and every second carried a sense of anticipation." 
            delay={0.4}
          />

          <StoryParagraph 
            text="It was at Laal Quila, where we met for the very first time — standing beneath centuries of history, unaware that we were creating our own. In that moment, among the quiet echoes of the past and the soft chaos of the present, I felt it — the first undeniable spark of love. From that instant onward, something inside me chose you, silently and completely."
            delay={1.2}
          />

          <StoryParagraph 
            text="From that day forward, every conversation became a promise, every smile became a memory, and every shared silence felt meaningful. Time stopped being something I counted — it became something I felt, measured only by moments with you. April didn’t just mark a month on the calendar; it marked the beginning of us — a story I want to keep writing, slowly, sincerely, and endlessly."
            delay={2}
          />
        </div>
      </div>
    </section>
  );
};
