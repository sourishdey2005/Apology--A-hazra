
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw motion values for instant tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Very snappy spring for the outer ring
  const springConfigOuter = { damping: 40, stiffness: 800, mass: 0.1 };
  const cursorXSpring = useSpring(mouseX, springConfigOuter);
  const cursorYSpring = useSpring(mouseY, springConfigOuter);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = ['BUTTON', 'A', 'BLOCKQUOTE', 'IMG'].includes(target.tagName) || 
                        target.closest('button') || 
                        target.closest('a');
      setIsHovering(!!clickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleHover);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Circle: Follows with a tiny, high-frequency spring for elegance */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-rose-400/30 pointer-events-none z-[10000] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? 'rgba(251, 113, 133, 0.08)' : 'transparent',
        }}
      />
      {/* Inner Dot: Follows mouse instantly to eliminate perceived lag */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-rose-500 pointer-events-none z-[10001] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};
