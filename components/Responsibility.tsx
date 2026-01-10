
import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const PointReveal: React.FC<{ text: string; sub: string; index: number }> = ({ text, sub, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 2.2, delay: index * 0.2, ease: EASE }}
    className="group relative"
  >
    <div className="flex flex-col gap-6">
      <div className="space-y-4">
        <p className="text-2xl md:text-5xl text-[#333333] font-serif font-light leading-tight tracking-tight group-hover:text-rose-900 transition-colors duration-1000">
          {text}
        </p>
        <p className="text-sm md:text-lg text-stone-400 font-light tracking-wide italic leading-relaxed max-w-xl">
          {sub}
        </p>
        <motion.div
          className="h-[1px] bg-rose-200 mt-6 origin-left w-full opacity-30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: index * 0.2 + 0.5, ease: EASE }}
        />
      </div>
    </div>
  </motion.div>
);

export const Responsibility: React.FC = () => {
  const points = [
    { 
      text: "If my words were careless, I’m sorry.", 
      sub: "Sometimes language fails our intentions, and I regret every word that felt like a sharp edge." 
    },
    { 
      text: "If I didn't hold your heart as gently as it deserved, I’m sorry.", 
      sub: "You are a precious soul, and I regret every moment I was anything less than the gentle home you need." 
    },
    { 
      text: "If my presence ever felt heavy, I’m sorry.", 
      sub: "I only ever wanted to be your light, not a weight you had to carry through your days." 
    }
  ];

  return (
    <section className="py-40 md:py-64 bg-stone-50/50 px-6">
      <div className="max-w-4xl mx-auto space-y-40">
        {points.map((point, index) => (
          <PointReveal key={index} index={index} text={point.text} sub={point.sub} />
        ))}
      </div>
    </section>
  );
};
