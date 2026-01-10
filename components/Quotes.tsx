
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Wind } from 'lucide-react';

const quotes = [
  {
    text: "The heaviest thing I carry is not what I did, but the silence that followed.",
    icon: <Wind className="w-8 h-8 text-indigo-400" />,
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/v1768066792/IMG-20250720-WA0022_edn5lq.jpg"
  },
  {
    text: "A Happy New Year is just a date on a calendar unless you're there to share it.",
    icon: <Sparkles className="w-8 h-8 text-amber-400" />,
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/v1768066790/IMG-20260110-WA0354_jzprhl.jpg"
  },
  {
    text: "True apologies are not for the past, but for the future we might still have.",
    icon: <Heart className="w-8 h-8 text-rose-400" />,
    img: "https://res.cloudinary.com/dodhvvewu/image/upload/v1768066790/IMG-20260110-WA0344_kllpxq.jpg"
  }
];

export const Quotes: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-80 bg-[#FAF9F6] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${index}`}
          initial={{ opacity: 0, scale: 1.15, filter: 'blur(20px)' }}
          animate={{ opacity: 0.2, scale: 1, filter: 'blur(5px)' }}
          exit={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
          transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${quotes[index].img})` }}
        />
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="h-[400px] relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute flex flex-col items-center text-center space-y-16 w-full"
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="p-8 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl"
              >
                {quotes[index].icon}
              </motion.div>
              
              <blockquote className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-stone-900 font-light leading-[1.2] max-w-5xl tracking-tight">
                “
                <span className="relative">
                  {quotes[index].text}
                </span>
                ”
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-40 space-x-8">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="group relative p-4 focus:outline-none"
            >
              <div
                className={`h-px transition-all duration-1000 ease-out ${
                  i === index ? "bg-rose-400 w-24 opacity-100" : "bg-stone-300 w-12 opacity-40 hover:opacity-100"
                }`}
              />
              <span className={`absolute top-0 left-1/2 -translate-x-1/2 text-[8px] tracking-[0.4em] uppercase transition-opacity duration-700 ${i === index ? 'opacity-40' : 'opacity-0'}`}>
                0{i + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
