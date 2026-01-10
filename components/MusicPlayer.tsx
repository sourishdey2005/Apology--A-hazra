
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            // Clean up listeners once music starts
            removeListeners();
          })
          .catch(() => {
            // Still blocked, wait for next interaction
          });
      }
    };

    const removeListeners = () => {
      window.removeEventListener('click', startAudio);
      window.removeEventListener('touchstart', startAudio);
      window.removeEventListener('scroll', startAudio);
      window.removeEventListener('mousemove', startAudio);
      window.removeEventListener('keydown', startAudio);
    };

    // Add comprehensive listeners for autoplay bypass
    window.addEventListener('click', startAudio);
    window.addEventListener('touchstart', startAudio);
    window.addEventListener('scroll', startAudio, { passive: true });
    window.addEventListener('mousemove', startAudio, { passive: true });
    window.addEventListener('keydown', startAudio);

    // Initial attempt
    startAudio();

    return () => removeListeners();
  }, [isPlaying]);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
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
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl group overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Volume2 className="w-5 h-5 text-rose-400" />
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VolumeX className="w-5 h-5 text-stone-400" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {isPlaying && (
          <motion.div
            className="absolute inset-0 border-2 border-rose-300/20 rounded-full"
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        )}
      </motion.button>
      
      <div className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none">
         <motion.span 
          className="whitespace-nowrap text-[9px] tracking-[0.3em] uppercase text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          {isPlaying ? "Pehli Dafa - Atif Aslam" : "Click to Play"}
        </motion.span>
      </div>
    </div>
  );
};
