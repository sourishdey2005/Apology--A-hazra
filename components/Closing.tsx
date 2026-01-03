
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
  const moonY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#0C0D18] flex items-center justify-center px-4 md:px-12 overflow-hidden">
      {/* Deep Space Gradient Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1A1B2E_0%,#0C0D18_100%)]" />

      {/* Layered Parallax Moon / Celestial Glows */}
      <motion.div 
        style={{ y: moonY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-indigo-500/5 rounded-full blur-[100px] md:blur-[180px] pointer-events-none"
      />

      {/* Background Star Layer */}
      <motion.div style={{ y: yParticlesSlow }} className="absolute inset-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={`slow-${i}`}
            className="absolute w-[1px] h-[1px] bg-white rounded-full"
            style={{ 
              left: Math.random() * 100 + "%", 
              top: Math.random() * 100 + "%" 
            }}
            animate={{
              opacity: [0, Math.random() * 0.4 + 0.1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 10
            }}
          />
        ))}
      </motion.div>

      {/* Foreground Particle Layer */}
      <motion.div style={{ y: yParticlesFast }} className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`fast-${i}`}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-rose-200/40' : 'bg-white/40'}`}
            style={{ 
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              left: Math.random() * 100 + "%", 
              top: Math.random() * 100 + "%" 
            }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-6xl w-full text-center space-y-20 relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 2 }}
              className="w-px h-16 bg-gradient-to-b from-transparent via-white to-transparent mx-auto"
            />
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 2 }}
              className="text-indigo-200/60 text-[10px] uppercase tracking-[1em] font-medium"
            >
              <TypewriterText text="Final thoughts" />
            </motion.p>
            <p className="text-indigo-50/90 text-lg md:text-2xl font-light tracking-wide leading-relaxed max-w-2xl mx-auto">
              <TypewriterText text="Wherever life takes you, I hope it treats you kindly." delay={1.2} />
            </p>
          </div>
          
          <div className="relative pt-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif italic text-white leading-[1.4] font-light max-w-5xl mx-auto text-center px-4">
              <TypewriterText 
                text="And if this apology ever reaches your heart — that’s enough for me." 
                delay={3.2} 
              />
            </h2>
            <div className="mt-12 flex justify-center">
              <motion.div 
                className="w-32 md:w-64 h-[1px] bg-gradient-to-r from-transparent via-rose-300/30 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 7.5, duration: 4 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </section>
  );
};
