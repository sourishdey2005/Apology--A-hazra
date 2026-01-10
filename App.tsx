
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TopVisual } from './components/TopVisual';
import { Hero } from './components/Hero';
import { Acknowledgment } from './components/Acknowledgment';
import { Responsibility } from './components/Responsibility';
import { TheBeginning } from './components/TheBeginning';
import { DeepReflections } from './components/DeepReflections';
import { RespectSpace } from './components/RespectSpace';
import { Quotes } from './components/Quotes';
import { Closing } from './components/Closing';
import { HeartfeltLove } from './components/HeartfeltLove';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';
import { GrainOverlay } from './components/GrainOverlay';
import { CustomCursor } from './components/CustomCursor';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="relative min-h-screen selection:bg-rose-100 selection:text-rose-900 bg-[#FAF9F6] cursor-none overflow-x-hidden">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] bg-[#FAF9F6] flex items-center justify-center"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="text-[10px] uppercase tracking-[1em] font-serif italic text-stone-400"
            >
              Preparing a message...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <GrainOverlay />
      <CustomCursor />
      <MusicPlayer />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <TopVisual />
        <Hero />
        <Acknowledgment />
        <Responsibility />
        <TheBeginning />
        <DeepReflections />
        <RespectSpace />
        <Quotes />
        <div className="h-96 bg-gradient-to-b from-[#FAF9F6] to-[#0C0D18]" />
        <Closing />
        <HeartfeltLove />
        <Footer />
      </motion.div>
    </main>
  );
}

export default App;
