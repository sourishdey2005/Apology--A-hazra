
import React from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <motion.span
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: {
        transition: { staggerChildren: 0.05, delayChildren: delay }
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

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1B2E] py-20 px-6 flex flex-col items-center border-t border-indigo-900/20">
      <div className="text-center space-y-2 opacity-40">
        <p className="text-xs text-indigo-200 tracking-[0.2em] font-light uppercase">
          <TypewriterText text="Written with honesty." />
        </p>
        <p className="text-xs text-indigo-200 tracking-[0.2em] font-light uppercase">
          <TypewriterText text="Not expectation." delay={1} />
        </p>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 2 }}
        className="mt-12 text-[10px] text-indigo-300/20 uppercase tracking-widest"
      >
        &copy; {new Date().getFullYear()} — Just a quiet message.
      </motion.div>
    </footer>
  );
};
