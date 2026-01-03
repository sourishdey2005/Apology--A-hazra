
import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const PointReveal = ({ text, sub, index }: { text: string; sub: string; index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 2.2, delay: index * 0.2, ease: EASE }}
    className="group relative"
  >
    <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-10">
      <motion.span 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: index * 0.2 + 0.5, ease: EASE }}
        className="text-stone-300 font-serif text-5xl md:text-8xl italic select-none"
      >
        0{index + 1}
      </motion.span>
      <div className="space-y-6 flex-1">
        <p className="text-2xl md:text-5xl text-[#333333] font-serif font-light leading-tight tracking-tight group-hover:text-rose-900 transition-colors duration-1000">
          {text}
        </p>
        <p className="text-sm md:text-lg text-stone-400 font-light tracking-wide italic leading-relaxed max-w-xl">
          {sub}
        </p>
        <motion.div
          className="h-[1px] bg-rose-200 mt-4 origin-left w-full opacity-40"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: index * 0.2 + 1, ease: EASE }}
        />
      </div>
    </div>
  </motion.div>
);

export const Responsibility: React.FC = () => {
  const points = [
    { text: "If my words were careless, I’m sorry.", sub: "Sometimes language fails our intentions, and I regret every word that felt like a sharp edge." },
    { text: "If my silence hurt you, I’m sorry.", sub: "The space between us shouldn't have been cold. I apologize for the things I left unsaid." },
    { text: "If my presence ever felt heavy, I’m sorry.", sub: "I only ever wanted to be your light, not a weight you had to carry through your days." }
  ];

  return (
    <section className="py-40 md:py-64 bg-stone-50/50 px-6">
      <div className="max-w-5xl mx-auto space-y-32">
        {points.map((point, index) => (
          <PointReveal key={index} index={index} text={point.text} sub={point.sub} />
        ))}
      </div>
    </section>
  );
};
