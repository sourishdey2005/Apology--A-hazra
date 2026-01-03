
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

  const yImg = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacityImg = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  
  // Subtle blur effect that clears as the image reaches the center of the scroll view
  const blurImg = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    ["blur(12px)", "blur(4px)", "blur(0px)", "blur(4px)", "blur(12px)"]
  );

  return (
    <section ref={containerRef} className="relative min-h-[80vh] py-32 bg-[#FAF9F6] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-20 overflow-hidden">
      <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl lg:order-last">
        <motion.div 
          style={{ 
            y: yImg, 
            opacity: opacityImg,
            filter: blurImg,
            backgroundImage: 'url("https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1000")'
          }}
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/40 to-transparent" />
      </div>

      <div className="max-w-xl space-y-8">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.5em] text-rose-400 font-medium block"
        >
          <TypewriterText text="An honest reflection" />
        </motion.span>
        <div className="space-y-8">
          {[
            "I may not fully understand everything I did wrong,",
            "but I understand that I may have hurt you —",
            "and for that, I’m truly sorry."
          ].map((line, index) => (
            <p
              key={index}
              className="text-2xl md:text-4xl text-[#333333] font-serif italic font-light leading-snug"
            >
              <TypewriterText text={line} delay={index * 0.8} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
