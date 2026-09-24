import { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Philosophy } from './components/Philosophy';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { MissionVision } from './components/MissionVision';
import { CostEstimator } from './components/CostEstimator';
import { CtaSection } from './components/CtaSection';
import { Contact } from './components/Contact';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { FloatingActions } from './components/FloatingActions';
import type { Project } from './types';

export function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceForConsult, setSelectedServiceForConsult] = useState('Architectural Design');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForConsult(serviceName);
    }
    setIsConsultationOpen(true);
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleConsultFromProject = (projectTitle: string) => {
    setSelectedProject(null);
    setSelectedServiceForConsult(`Inquiry for project: ${projectTitle}`);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FCFCFD] text-[#0A0D14] flex flex-col selection:bg-[#0284C7] selection:text-white relative">
      {/* Architectural Preloader */}
      {!preloaderFinished && (
        <Preloader onComplete={() => setPreloaderFinished(true)} />
      )}

      {/* Main Website Structure */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 2. About Section */}
        <About onOpenConsultation={() => handleOpenConsultation()} />

        {/* 3. Services Section */}
        <Services onSelectService={(service) => handleOpenConsultation(service)} />

        {/* 4. Interactive Project Budget Estimator */}
        <CostEstimator onOpenConsultationWithEstimate={(summary) => handleOpenConsultation(summary)} />

        {/* 5. Featured Projects Portfolio */}
        <Projects onSelectProject={handleSelectProject} />

        {/* 6. Design Philosophy */}
        <Philosophy />

        {/* 7. Our Process */}
        <Process />

        {/* 8. Why Elegant Architects */}
        <WhyUs />

        {/* 9. Mission / Vision */}
        <MissionVision />

        {/* 10. Call To Action */}
        <CtaSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 11. Contact Section */}
        <Contact />

        {/* 12. Google Map */}
        <MapSection />
      </main>

      {/* 13. Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService={selectedServiceForConsult}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConsultProject={handleConsultFromProject}
      />

      {/* Floating Speed Actions */}
      <FloatingActions />
    </div>
  );
}

export default App;
