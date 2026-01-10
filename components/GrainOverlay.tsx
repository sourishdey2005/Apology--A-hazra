
import React from 'react';

export const GrainOverlay: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.015] will-change-[opacity]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '250px 250px'
      }}
    />
  );
};
