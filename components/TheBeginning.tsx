
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StoryParagraph = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <motion.p
    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 2, delay, ease: [0.22, 1, 0.36, 1] }}
    className="text-xl md:text-3xl lg:text-4xl font-serif italic text-stone-800 leading-[1.6] font-light px-4 max-w-5xl mx-auto"
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

  const imgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section ref={containerRef} className="relative min-h-screen py-40 md:py-80 bg-[#FDFBF7] flex items-center justify-center px-6 overflow-hidden">
      <motion.div 
        style={{ y: imgY }}
        className="absolute inset-0 z-0 pointer-events-none will-change-transform"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-[0.03]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&q=auto&f_auto&w=1600")' }} 
        />
      </motion.div>

      <div className="max-w-6xl w-full space-y-32 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 2 }}
            className="h-[1px] bg-stone-300"
          />
          <motion.h4 
            initial={{ opacity: 0, letterSpacing: "1.5em" }}
            whileInView={{ opacity: 0.5, letterSpacing: "1em" }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="text-[12px] uppercase text-stone-500 font-bold tracking-[1em]"
          >
            The Calendar Stuck at Midnight
          </motion.h4>
        </div>

        <div className="space-y-28 text-center">
          <StoryParagraph 
            text="They say a year changes in a second, but for me, it’s been frozen since the moment we stopped talking. I find myself tracing the ghosts of our old conversations, wondering where I went wrong, and why the silence grew so tall between us." 
            delay={0.2}
          />

          <StoryParagraph 
            text="When the world was counting down and the sky was full of light, I was just looking at a screen—waiting for your name to appear. I was waiting for that 'Congratulations,' waiting for the 'Happy New Year' that would mean the bridge was still there. But the clock struck twelve, and the silence only grew louder."
            delay={0.8}
          />

          <StoryParagraph 
            text="I’m not just sorry for the mistakes I made; I’m sorry for the silence I caused. I’m still here, holding the memory of our better days close to my chest, and I’ll keep waiting—because a New Year doesn’t truly start until I hear your voice again."
            delay={1.4}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ delay: 2.5, duration: 2 }}
          className="flex justify-center pt-20"
        >
          <div className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center italic text-stone-500 text-sm">
            S
          </div>
        </motion.div>
      </div>
    </section>
  );
};
