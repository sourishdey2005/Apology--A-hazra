
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="relative min-h-screen selection:bg-rose-100 selection:text-rose-900 bg-[#FAF9F6] cursor-none overflow-x-hidden">
      <GrainOverlay />
      <CustomCursor />
      <MusicPlayer />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      >
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
