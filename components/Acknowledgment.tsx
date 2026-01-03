
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <motion.span
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: {
        transition: { staggerChildren: 0.02, delayChildren: delay }
      }
    }}
  >
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.4 }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.span>
);

export const Acknowledgment: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yImg = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const opacityImg = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);
  
  const blurImg = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    ["blur(10px)", "blur(2px)", "blur(0px)", "blur(2px)", "blur(10px)"]
  );

  return (
    <section ref={containerRef} className="relative min-h-screen py-32 md:py-48 bg-[#FAF9F6] px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        
        {/* Text Content */}
        <div className="space-y-12 lg:pr-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="space-y-4"
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-rose-400 font-bold block mb-4">
              An honest reflection
            </span>
            <div className="w-12 h-[1px] bg-rose-200" />
          </motion.div>

          <div className="space-y-10">
            {[
              "I may not fully understand everything I did wrong,",
              "but I understand that I may have hurt you —",
              "and for that, I’m truly sorry."
            ].map((line, index) => (
              <p
                key={index}
                className="text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] font-serif italic font-light leading-[1.4]"
              >
                <TypewriterText text={line} delay={index * 0.8 + 0.5} />
              </p>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ delay: 3, duration: 2 }}
            className="pt-4"
          >
            <div className="text-[9px] uppercase tracking-[0.4em] text-stone-400 italic font-medium">
              Acknowledge. Understand. Respect.
            </div>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[450px] md:h-[650px] rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.1)] order-first lg:order-last"
        >
          <motion.div 
            style={{ 
              y: yImg, 
              opacity: opacityImg,
              filter: blurImg,
              backgroundImage: 'url("https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1200")'
            }}
            className="absolute inset-0 bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
          
          {/* Subtle Frame Decoration */}
          <div className="absolute inset-8 border border-white/20 rounded-[1.5rem] pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};
