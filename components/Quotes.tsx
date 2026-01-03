
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Heart, Sparkles } from 'lucide-react';

const quotes = [
  {
    text: "Some apologies are not about fixing things, but about honoring what was real.",
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    img: "https://images.unsplash.com/photo-1559734840-f9509ee5677f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    text: "Love sometimes means letting silence speak, and regret speak gently.",
    icon: <Moon className="w-8 h-8 text-indigo-500" />,
    img: "https://images.unsplash.com/photo-1550431327-0f8c7e93f773?auto=format&fit=crop&q=80&w=1200"
  },
  {
    text: "I don’t need answers — I just needed you to know I cared.",
    icon: <Sparkles className="w-8 h-8 text-amber-500" />,
    img: "https://images.unsplash.com/photo-1446071103245-02c807d49994?auto=format&fit=crop&q=80&w=1200"
  }
];

export const Quotes: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 10000); // Slightly longer to allow for typewriter completion
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-72 bg-[#FAF9F6] overflow-hidden">
      {/* Dynamic Background Image - Cinematic Roses */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${index}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${quotes[index].img})` }}
        />
      </AnimatePresence>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="h-64 relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute flex flex-col items-center text-center space-y-12 w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="p-6 rounded-full bg-white/80 backdrop-blur-md shadow-lg"
              >
                {quotes[index].icon}
              </motion.div>
              <blockquote className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-[#1a1a1a] font-light leading-tight max-w-4xl tracking-tight flex flex-wrap justify-center">
                “
                {quotes[index].text.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                ”
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Improved Nav UI */}
        <div className="flex justify-center mt-32 space-x-6">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="group relative py-6 px-2 focus:outline-none"
            >
              <div
                className={`w-16 h-[3px] rounded-full transition-all duration-1000 ${
                  i === index ? "bg-rose-400" : "bg-stone-200"
                }`}
              />
              <span className={`absolute top-10 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.5em] transition-opacity duration-500 uppercase ${i === index ? 'opacity-100 text-rose-500' : 'opacity-0'}`}>
                Letter {i+1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
