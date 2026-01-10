
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StoryParagraph = ({ text, delay = 0, highlighted = false }: { text: string; delay?: number; highlighted?: boolean }) => (
  <motion.p
    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 2.2, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`text-2xl md:text-4xl lg:text-5xl font-serif italic leading-[1.5] font-light px-4 max-w-5xl mx-auto tracking-tight ${
      highlighted ? "text-rose-900/90" : "text-stone-800"
    }`}
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

  const imgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen py-40 md:py-96 bg-[#FDFBF7] flex items-center justify-center px-6 overflow-hidden">
      {/* Soft atmospheric background */}
      <motion.div 
        style={{ y: imgY, opacity }}
        className="absolute inset-0 z-0 pointer-events-none will-change-transform"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-[0.04]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1501901642050-9606ba3ec653?auto=format&q=auto&f_auto&w=1600")' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-transparent to-[#FDFBF7]" />
      </motion.div>

      <div className="max-w-6xl w-full space-y-40 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2.5, ease: "circOut" }}
            className="w-24 h-[1px] bg-rose-200/60"
          />
          <motion.h4 
            initial={{ opacity: 0, letterSpacing: "1.8em" }}
            whileInView={{ opacity: 0.4, letterSpacing: "1.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="text-[11px] uppercase text-stone-500 font-bold tracking-[1.5em]"
          >
            A Heart Still Waiting
          </motion.h4>
        </div>

        <div className="space-y-32 text-center">
          <StoryParagraph 
            text="The world turned its page and the calendar found a new year, but my heart is still folded at the chapter where we last spoke. Every morning since has felt like a beautiful book left out in the rain—waiting for the one hand that knows how to turn its pages." 
            delay={0.2}
          />

          <StoryParagraph 
            highlighted
            text="When the clock struck twelve and the sky was painting itself in gold, I wasn’t looking at the fireworks. I was looking for a single spark—your name, a 'Congratulations,' or just a 'Happy New Year' that would tell me the bridge was still there. The silence of that night was louder than any celebration."
            delay={0.8}
          />

          <StoryParagraph 
            text="I am still carrying the warmth of that sun-drenched afternoon at Laal Quila. I’m sorry for the winter I let grow between us. I’m staying right here, protecting the embers of our memories, until you’re ready to come back to the warmth."
            delay={1.4}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.3, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.8, duration: 2 }}
          className="flex flex-col items-center pt-32 space-y-8"
        >
          <div className="w-px h-20 bg-gradient-to-b from-stone-300 to-transparent" />
          <div className="text-[10px] uppercase tracking-[0.8em] text-stone-400 font-light italic">
            Sincerely, forever
          </div>
        </motion.div>
      </div>
    </section>
  );
};
