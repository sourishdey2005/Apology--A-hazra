
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
        className="absolute inset-0 z-0 pointer-events-none will-change-transform"
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
            A Year Turned in Silence
          </motion.h4>
        </div>

        <div className="space-y-20 text-center">
          <StoryParagraph 
            text="I still carry the weight of the silence that grew between us. I find myself wondering where the conversation stopped, and if my mistakes were the reason you felt you had to turn away. The distance feels heavy, and every day without your voice feels like a page left blank." 
            delay={0.2}
          />

          <StoryParagraph 
            text="Even as the year turned and the world celebrated, I found myself waiting—still looking for your name on my screen, still hoping for that 'Congratulations' and the simple 'Happy New Year' that never arrived. It made me realize how much I miss the rhythm of our talk, and how much it hurts to be a stranger to you now."
            delay={0.8}
          />

          <StoryParagraph 
            text="I’m truly sorry for whatever caused you to stop talking. I’m still here, holding onto the memory of when we first met at Laal Quila, and waiting for the chance to hear your voice again, whenever you feel ready to speak."
            delay={1.4}
          />
        </div>
      </div>
    </section>
  );
};
