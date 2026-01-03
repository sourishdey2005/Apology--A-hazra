
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Softer spring configuration for a fluid, floating feel
  const springConfigOuter = { damping: 30, stiffness: 100, mass: 0.8 };
  const cursorX = useSpring(0, springConfigOuter);
  const cursorY = useSpring(0, springConfigOuter);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = ['BUTTON', 'A', 'BLOCKQUOTE', 'IMG'].includes(target.tagName) || 
                        target.closest('button') || 
                        target.closest('a');
      setIsHovering(!!clickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleHover);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-rose-300/30 pointer-events-none z-[10000] mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(244, 114, 182, 0.08)' : 'transparent',
        }}
        transition={{ scale: { type: 'spring', damping: 20, stiffness: 100 } }}
      />
      {/* Dot cursor inside for precision */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-rose-400 pointer-events-none z-[10001] hidden md:block"
        style={{
          x: useSpring(cursorX, { damping: 40, stiffness: 300 }),
          y: useSpring(cursorY, { damping: 40, stiffness: 300 }),
          translateX: 12.25,
          translateY: 12.25,
        }}
      />
    </>
  );
};
