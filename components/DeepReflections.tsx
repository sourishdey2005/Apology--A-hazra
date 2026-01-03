
import React from 'react';
import { motion } from 'framer-motion';

const reflections = [
  {
    text: "I don’t know where my words fell short or where my silence spoke too loudly, but I know this — if anything I did caused you pain, then I owe you more than just thoughts. I owe you an apology, one that comes from honesty, humility, and care. This is me standing still, not to explain myself, but to say I’m truly sorry.",
    color: "bg-orange-50/80",
    accent: "text-orange-900",
    glow: "bg-orange-300/30",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767422362/9_flwn6i.webp"
  },
  {
    text: "Sometimes the deepest regret isn’t about what we said, but about what we failed to say at the right moment. If my hesitation, confusion, or quietness ever made you feel unseen or unimportant, please know that it was never a lack of care — it was a flaw I’m learning to own. I’m sorry, sincerely and completely.",
    color: "bg-rose-50/80",
    accent: "text-rose-900",
    glow: "bg-rose-300/30",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767422361/7_ex2zz7.webp"
  },
  {
    text: "I may not have loved you perfectly, and I may not have handled every moment with the gentleness you deserved. For that, I take full responsibility. This apology isn’t meant to undo the past, but to honor it — because what we shared was real, and real things deserve respect, even when they hurt.",
    color: "bg-emerald-50/80",
    accent: "text-emerald-900",
    glow: "bg-emerald-300/30",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767422361/8_ol6enl.webp"
  },
  {
    text: "If there were moments when my presence felt uncertain, or my absence felt heavier than it should have, I want you to know that none of it came from indifference. It came from imperfect humanity. And I’m sorry that my imperfections ever became your burden.",
    color: "bg-blue-50/80",
    accent: "text-blue-900",
    glow: "bg-blue-300/30",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767422360/3_lp5xfp.webp"
  },
  {
    text: "This isn’t an apology meant to reopen wounds or ask for reassurance. It’s simply a quiet admission that I cared deeply, and in caring, I sometimes made mistakes. If love means taking responsibility even when it’s uncomfortable, then this is me choosing love in its most honest form.",
    color: "bg-amber-50/80",
    accent: "text-amber-900",
    glow: "bg-amber-300/30",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767422360/2_dlkwme.webp"
  },
  {
    text: "I’ve replayed moments in my mind, not to rewrite them, but to understand them better. And with that understanding came the realization that some of my actions — or inactions — may have hurt you. I can’t change what’s already passed, but I can acknowledge it with sincerity and say I’m sorry.",
    color: "bg-violet-50/80",
    accent: "text-violet-900",
    glow: "bg-violet-300/30",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767422361/10_yothur.webp"
  },
  {
    text: "If my affection ever felt overwhelming, or my expectations ever felt unspoken yet heavy, I regret that deeply. You deserved ease, not pressure. You deserved warmth, not confusion. This apology comes from a place of love that has learned to be quieter, softer, and more respectful.",
    color: "bg-pink-50/80",
    accent: "text-pink-900",
    glow: "bg-pink-300/30",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767422361/6_pfgdag.webp"
  },
  {
    text: "There are feelings that don’t disappear even when words fall apart. If mine ever reached you in the wrong way, or at the wrong time, I apologize for that. What I felt was genuine — but genuineness still requires responsibility, and this is me owning mine.",
    color: "bg-teal-50/80",
    accent: "text-teal-900",
    glow: "bg-teal-300/30",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767422361/4_fgc19n.webp"
  },
  {
    text: "I don’t expect forgiveness, and I don’t ask for answers. This apology exists simply because some emotions are too meaningful to be left without acknowledgment. If this reaches you gently, without causing discomfort, then it has served its purpose.",
    color: "bg-stone-100/80",
    accent: "text-stone-900",
    glow: "bg-stone-300/30",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767422554/11_jcx9rq.webp"
  },
  {
    text: "No matter where life takes us from here, I want this to remain true — I respect you enough to admit where I may have failed you. I care enough to say sorry without conditions. And I value what we shared enough to let this apology stand on its own, quietly and honestly.",
    color: "bg-indigo-50/80",
    accent: "text-indigo-900",
    glow: "bg-indigo-300/30",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767422555/12_qbz01u.webp"
  }
];

const TypewriterBlock = ({ text, colorClass }: { text: string; colorClass: string }) => {
  const letters = Array.from(text);
  
  return (
    <motion.p className={`text-xl md:text-3xl font-serif italic font-light leading-relaxed max-w-2xl ${colorClass} relative z-10 flex flex-wrap`}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{
            duration: 0.3,
            delay: i * 0.02,
            ease: "easeIn"
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const DeepReflections: React.FC = () => {
  return (
    <section className="relative bg-[#FAF9F6] w-full">
      <div className="py-24 text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[1em] text-stone-400 font-medium"
        >
          A sequence of truth
        </motion.h3>
        <div className="w-px h-12 bg-stone-200 mx-auto mt-8" />
      </div>

      <div className="flex flex-col w-full">
        {reflections.map((item, idx) => (
          <div 
            key={idx} 
            className={`min-h-screen relative flex items-center justify-center p-6 py-32 md:py-48 ${item.color} overflow-hidden transition-colors duration-1000`}
          >
            {/* Background Glows for Vibrant Feel */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1.8, opacity: 0.5 }}
              viewport={{ margin: "-20%" }}
              className={`absolute inset-0 rounded-full blur-[200px] pointer-events-none ${item.glow}`}
            />
            
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="space-y-12 order-2 lg:order-1"
              >
                <div className="flex items-center gap-8">
                  <span className={`text-6xl md:text-9xl font-serif opacity-20 italic ${item.accent}`}>
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className={`h-[2px] w-32 origin-left bg-current opacity-30 ${item.accent}`} 
                  />
                </div>
                <TypewriterBlock text={item.text} colorClass={item.accent} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-[450px] md:h-[700px] w-full rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.2)] group order-1 lg:order-2"
              >
                <motion.img 
                  src={item.img} 
                  alt={`Reflection ${idx + 1}`} 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                
                {/* Repositioned & Refined Folio Counter */}
                <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="text-white/90 text-[10px] tracking-[0.4em] uppercase font-bold">Reflection</span>
                  <div className="w-4 h-[1px] bg-white/40" />
                  <span className="text-white/90 text-[10px] font-bold">{idx + 1} / {reflections.length}</span>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative End Line */}
      <div className="h-64 flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-[#FAF9F6]">
        <div className="w-px h-24 bg-gradient-to-b from-stone-300 to-transparent" />
      </div>
    </section>
  );
};
