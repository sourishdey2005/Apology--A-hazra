
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

  const yImg = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const opacityImg = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.6, 1, 1, 0.6]);
  
  const blurImg = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
  );

  return (
    <section ref={containerRef} className="relative min-h-screen py-24 md:py-40 bg-[#FAF9F6] px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Text Content - Positioned Above */}
        <div className="w-full text-center space-y-10 mb-20 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center space-y-4"
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-rose-400 font-bold block">
              An honest reflection
            </span>
            <div className="w-12 h-[1px] bg-rose-200" />
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            {[
              "I may not fully understand everything I did wrong,",
              "but I understand that I may have hurt you —",
              "and for that, I’m truly sorry."
            ].map((line, index) => (
              <p
                key={index}
                className="text-lg md:text-xl lg:text-2xl text-[#1a1a1a] font-serif italic font-light leading-relaxed px-4"
              >
                <TypewriterText text={line} delay={index * 0.8 + 0.5} />
              </p>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: 3, duration: 2 }}
            className="pt-6 inline-block"
          >
            <div className="text-[9px] uppercase tracking-[0.5em] text-stone-400 italic font-bold border-t border-stone-100 pt-4 px-8">
              Acknowledge. Understand. Respect.
            </div>
          </motion.div>
        </div>

        {/* Image Content - Positioned Below */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-[400px] md:h-[550px] rounded-[3rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)]"
        >
          <motion.div 
            style={{ 
              y: yImg, 
              opacity: opacityImg,
              filter: blurImg,
              backgroundImage: 'url("https://res.cloudinary.com/dodhvvewu/image/upload/v1768067845/20260110_164726_llyual.jpg")'
            }}
            className="absolute inset-0 bg-cover bg-center scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-30" />
          
          <div className="absolute inset-6 md:inset-10 border border-white/30 rounded-[2rem] pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};
