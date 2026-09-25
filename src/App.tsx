import { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  return (
    <div className="min-h-screen bg-[#171817] text-[#FFFFFF] selection:bg-[#168BCB] selection:text-[#FFFFFF] relative">
      {/* Fullscreen Minimal Preloader */}
      {!preloaderFinished && (
        <Preloader onComplete={() => setPreloaderFinished(true)} />
      )}

      {/* Main Experience (Rendered once preloader finishes) */}
      {preloaderFinished && (
        <>
          {/* Top Architectural Header (Logo left, MENU lines right, Ivory #F4F0E8 background) */}
          <Header />

          <main>
            {/* 1. Home Hero Section (Dark Charcoal #171817) */}
            <Hero />

            {/* 2. Selected Works Portfolio Section (Warm Architectural Ivory #F5F3EE) */}
            <Projects />

            {/* 3. Editorial About Us & Vision Section (Warm Architectural Ivory #F5F3EE) */}
            <About />

            {/* 4. Editorial Services / Expertise Section (Warm Architectural Ivory #F4F0E8) */}
            <Services />

            {/* 5. Minimalist Contact Section (Dark Charcoal #171817) */}
            <Contact />
          </main>

          {/* 6. Editorial 3-Column Footer (Warm Architectural Ivory #F4F0E8) */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
