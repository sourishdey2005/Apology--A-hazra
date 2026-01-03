
import React from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, delay = 0, speed = 0.03 }: { text: string; delay?: number; speed?: number }) => (
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

export const Responsibility: React.FC = () => {
  const points = [
    { text: "If my words were careless, I’m sorry.", sub: "Sometimes language fails our intentions." },
    { text: "If my silence hurt you, I’m sorry.", sub: "The space between us shouldn't be cold." },
    { text: "If my presence ever felt heavy, I’m sorry.", sub: "I only ever wanted to be your light." }
  ];

  return (
    <section className="py-32 md:py-48 bg-stone-50 px-6">
      <div className="max-w-4xl mx-auto space-y-24">
        {points.map((point, index) => (
          <div key={index} className="group relative">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: index * 0.5 }}
                className="text-stone-300 font-serif text-5xl md:text-7xl italic"
              >
                0{index + 1}
              </motion.span>
              <div className="space-y-4">
                <p className="text-2xl md:text-4xl text-[#444444] font-serif font-light leading-tight group-hover:text-rose-900 transition-colors duration-700">
                  <TypewriterText text={point.text} delay={index * 0.3} />
                </p>
                <p className="text-sm md:text-base text-stone-400 font-light tracking-wide italic">
                  <TypewriterText text={point.sub} delay={index * 0.3 + 0.8} speed={0.02} />
                </p>
                <motion.div
                  className="h-[1px] bg-rose-200 mt-2 origin-left w-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: index * 0.3 + 1.5, ease: "circOut" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
