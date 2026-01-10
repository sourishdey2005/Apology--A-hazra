
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const attemptPlay = async () => {
      if (audioRef.current) {
        try {
          // Attempt to play immediately
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          // If blocked, we wait for the first user interaction
          console.log("Autoplay blocked. Waiting for user interaction to start music.");
        }
      }
    };

    // Try on mount
    attemptPlay();

    // Fallback: play on first click or touch anywhere on the document
    const handleFirstInteraction = () => {
      if (!isPlaying) {
        attemptPlay();
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction, { passive: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };
  }, [isPlaying]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <audio
        ref={audioRef}
        loop
        playsInline
        src="https://res.cloudinary.com/dodhvvewu/video/upload/v1768069492/Pehli_Dafa_Atif_Aslam_128_Kbps_ur2j39.mp3"
      />
      <motion.button
        onClick={toggleMusic}
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 shadow-xl group overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isPlaying ? "Mute Music" : "Play Music"}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, rotate: -20 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 20 }}
            >
              <Volume2 className="w-5 h-5 text-rose-400" />
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ opacity: 0, rotate: -20 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 20 }}
            >
              <VolumeX className="w-5 h-5 text-stone-400" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {isPlaying && (
          <motion.div
            className="absolute inset-0 border-2 border-rose-300/30 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        )}
      </motion.button>
      
      <motion.span 
        className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] tracking-[0.3em] uppercase text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        initial={{ x: 10 }}
        whileHover={{ x: 0 }}
      >
        {isPlaying ? "Pehli Dafa - Atif Aslam" : "Ambient Silence"}
      </motion.span>
    </div>
  );
};
