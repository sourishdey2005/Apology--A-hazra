
import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Acknowledgment } from './components/Acknowledgment';
import { Responsibility } from './components/Responsibility';
import { DeepReflections } from './components/DeepReflections';
import { RespectSpace } from './components/RespectSpace';
import { Quotes } from './components/Quotes';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="relative min-h-screen selection:bg-rose-100 selection:text-rose-900 bg-[#FAF9F6]">
      <Hero />
      <Acknowledgment />
      <Responsibility />
      <DeepReflections />
      <RespectSpace />
      <Quotes />
      <Closing />
      <Footer />
    </main>
  );
}

export default App;
