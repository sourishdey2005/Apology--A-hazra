
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <motion.span
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: {
        transition: { staggerChildren: 0.04, delayChildren: delay }
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

export const Closing: React.FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yParticlesSlow = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yParticlesFast = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const moonY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#0C0D18] flex items-center justify-center px-6 overflow-hidden">
      {/* Deep Space Gradient Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1A1B2E_0%,#0C0D18_100%)]" />

      {/* Layered Parallax Moon / Celestial Glows */}
      <motion.div 
        style={{ y: moonY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div 
        style={{ y: moonY }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-white/[0.02] rounded-full blur-[60px] pointer-events-none"
      />

      {/* Background Star Layer (Slower Drift) */}
      <motion.div style={{ y: yParticlesSlow }} className="absolute inset-0 pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={`slow-${i}`}
            className="absolute w-[1px] h-[1px] bg-white rounded-full"
            style={{ 
              left: Math.random() * 100 + "%", 
              top: Math.random() * 100 + "%" 
            }}
            animate={{
              opacity: [0, Math.random() * 0.3 + 0.1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10, // Slower flicker
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 15
            }}
          />
        ))}
      </motion.div>

      {/* Foreground Particle Layer (Slightly more active) */}
      <motion.div style={{ y: yParticlesFast }} className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`fast-${i}`}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-indigo-200' : 'bg-white'}`}
            style={{ 
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              left: Math.random() * 100 + "%", 
              top: Math.random() * 100 + "%" 
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0.5, 1, 0.5],
              y: [0, -30, 0], // Subtle floating drift
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 10
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-5xl text-center space-y-16 relative z-10 w-full">
        <div className="space-y-10">
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 2 }}
              className="text-indigo-200/50 text-[10px] uppercase tracking-[0.8em] font-medium"
            >
              <TypewriterText text="Final thoughts" />
            </motion.p>
            <p className="text-indigo-50 text-xl md:text-2xl font-light tracking-wide leading-relaxed px-4">
              <TypewriterText text="Wherever life takes you, I hope it treats you kindly." delay={1} />
            </p>
          </div>
          
          <div className="relative inline-block px-4 w-full">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif italic text-white leading-tight font-light whitespace-normal md:whitespace-nowrap">
              <TypewriterText text="And if this apology ever reaches your heart — " delay={2.5} />
              <TypewriterText text="that’s enough for me." delay={4.8} />
            </h2>
            <motion.div 
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-rose-300/40 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 6.5, duration: 3 }}
            />
          </div>
        </div>
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
    </section>
  );
};
