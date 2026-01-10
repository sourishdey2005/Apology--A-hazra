
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Optimized image URLs with economy quality and smaller widths for faster delivery
const reflections = [
  {
    text: "If anything I did caused you pain, I am truly sorry.",
    color: "bg-orange-50/70",
    accent: "text-orange-950",
    glow: "bg-orange-300/10",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/f_auto,q_auto:eco,w_800/v1768066790/IMG-20260110-WA0344_kllpxq.jpg"
  },
  {
    text: "I regret every moment my hesitation made you feel unseen.",
    color: "bg-rose-50/70",
    accent: "text-rose-950",
    glow: "bg-rose-300/10",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/f_auto,q_auto:eco,w_800/v1768066790/IMG-20260110-WA0357_rkkqtw.jpg"
  },
  {
    text: "I take full responsibility for not loving you as perfectly as you deserved.",
    color: "bg-emerald-50/70",
    accent: "text-emerald-950",
    glow: "bg-emerald-300/10",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/f_auto,q_auto:eco,w_800/v1768066792/IMG-20250720-WA0022_edn5lq.jpg"
  },
  {
    text: "I am sorry that my imperfections ever became your burden.",
    color: "bg-blue-50/70",
    accent: "text-blue-950",
    glow: "bg-blue-300/10",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/f_auto,q_auto:eco,w_800/v1768066791/IMG-20260110-WA0364_lbeppo.jpg"
  },
  {
    text: "I cared deeply, and I choose to own my mistakes with honesty.",
    color: "bg-amber-50/70",
    accent: "text-amber-950",
    glow: "bg-amber-300/10",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/f_auto,q_auto:eco,w_800/v1768066792/IMG-20260110-WA0337_oblias.jpg"
  },
  {
    text: "I cannot change the past, but I acknowledge it with total sincerity.",
    color: "bg-violet-50/70",
    accent: "text-violet-950",
    glow: "bg-violet-300/10",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/f_auto,q_auto:eco,w_800/v1768067827/20260110_164433_pugptc.jpg"
  },
  {
    text: "You deserved warmth and ease, never confusion or pressure.",
    color: "bg-pink-50/70",
    accent: "text-pink-950",
    glow: "bg-pink-300/10",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/f_auto,q_auto:eco,w_800/v1768067814/20260110_164745_fttbom.jpg"
  },
  {
    text: "What I felt was genuine, and I am responsible for how it reached you.",
    color: "bg-teal-50/70",
    accent: "text-teal-950",
    glow: "bg-teal-300/10",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/f_auto,q_auto:eco,w_800/v1768067817/20260110_164548_rxy4fe.jpg"
  },
  {
    text: "This apology exists simply because you are meaningful to me.",
    color: "bg-stone-100/70",
    accent: "text-stone-950",
    glow: "bg-stone-300/10",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/f_auto,q_auto:eco,w_800/v1768067821/20260110_164530_gl3s93.jpg"
  },
  {
    text: "I value what we shared enough to let this apology stand, quietly.",
    color: "bg-indigo-50/70",
    accent: "text-indigo-950",
    glow: "bg-indigo-300/10",
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/f_auto,q_auto:eco,w_800/v1768067845/20260110_164726_llyual.jpg"
  }
];

const OptimizedImage = ({ src, alt }: { src: string, alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="relative w-full h-full bg-stone-100 overflow-hidden">
      <motion.img 
        src={src} 
        alt={alt} 
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-stone-200 border-t-stone-400 rounded-full animate-spin opacity-20" />
        </div>
      )}
    </div>
  );
};

const TypewriterBlock = ({ text, colorClass }: { text: string; colorClass: string }) => {
  return (
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.5, ease: EASE }}
      className={`text-2xl md:text-4xl font-serif italic font-light leading-relaxed max-w-2xl ${colorClass} relative z-10 will-change-transform`}
    >
      {text}
    </motion.p>
  );
};

export const DeepReflections: React.FC = () => {
  return (
    <section className="relative bg-[#FAF9F6] w-full overflow-x-hidden">
      <div className="py-40 text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 10, letterSpacing: "1.5em" }}
          whileInView={{ opacity: 0.5, y: 0, letterSpacing: "1em" }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: EASE }}
          className="text-[10px] uppercase text-stone-400 font-bold"
        >
          A sequence of truth
        </motion.h3>
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 80 }}
          transition={{ duration: 3, ease: EASE }}
          className="w-px bg-gradient-to-b from-stone-200 to-transparent mx-auto mt-12" 
        />
      </div>

      <div className="flex flex-col w-full">
        {reflections.map((item, idx) => (
          <div 
            key={idx} 
            className={`min-h-[80vh] relative flex items-center justify-center p-6 py-32 md:py-48 ${item.color} overflow-hidden`}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 2, opacity: 0.2 }}
              viewport={{ margin: "-20%" }}
              transition={{ duration: 3, ease: EASE }}
              className={`absolute inset-0 rounded-full blur-[80px] pointer-events-none ${item.glow} will-change-transform`}
            />
            
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 2, ease: EASE }}
                className="space-y-12 order-2 lg:order-1 will-change-transform"
              >
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: EASE }}
                  className={`h-[1px] w-24 origin-left bg-current opacity-20 ${item.accent}`} 
                />
                <TypewriterBlock text={item.text} colorClass={item.accent} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 2.5, ease: EASE }}
                className="relative h-[450px] md:h-[650px] w-full rounded-[3rem] overflow-hidden shadow-2xl group order-1 lg:order-2 will-change-transform"
              >
                <OptimizedImage src={item.img} alt={`Reflection ${idx}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-20" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
