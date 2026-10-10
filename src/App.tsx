import { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Team } from './components/Team';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#171817] text-[#FFFFFF] selection:bg-[#168BCB] selection:text-[#FFFFFF] relative">
      {/* Fullscreen Minimal Preloader */}
      {!preloaderFinished && (
        <Preloader onComplete={() => setPreloaderFinished(true)} />
      )}

      {/* Main Experience (Rendered once preloader finishes) */}
      {preloaderFinished && (
        <>
          {/* Top Architectural Header (Logo left, MENU lines right, Ivory #F4F0E8 background) */}
          <Header />

          <main className="w-full max-w-full overflow-x-hidden">
            {/* 1. Home (Hero) */}
            <Hero />

            {/* 2. Projects Section */}
            <Projects />

            {/* 3. About Section */}
            <About />

            {/* 4. Services Section */}
            <Services />

            {/* 5. Methodology — Our Process of Work */}
            <Process />

            {/* 6. People & Expertise — Elegant Team */}
            <Team />

            {/* 7. Contact Section */}
            <Contact />
          </main>

          {/* 8. Existing Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
