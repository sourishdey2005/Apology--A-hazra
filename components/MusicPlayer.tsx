
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <audio
        ref={audioRef}
        loop
        src="https://res.cloudinary.com/dodhvvewu/video/upload/v1767422914/spotidownloader.com_-_Tumhi_Dekho_Naa_-_Sitar_Lofi_-_Rishab_Rikhiram_Sharma_ork1g8.mp3" // Soft ambient piano
      />
      <motion.button
        onClick={toggleMusic}
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 shadow-xl group overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
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
        Ambient Silence
      </motion.span>
    </div>
  );
};
