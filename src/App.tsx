import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { WistiaPlayer } from './components/WistiaPlayer';
import { ProofGallery } from './components/ProofGallery';
import { ImageModal } from './components/ImageModal';
import { QualificationSection } from './components/QualificationSection';
import { SystemSteps } from './components/SystemSteps';
import { CalendlySection } from './components/CalendlySection';
import { Footer } from './components/Footer';
import { CaseStudyItem } from './types';

export default function App() {
  const [selectedProof, setSelectedProof] = useState<CaseStudyItem | null>(null);

  const scrollToCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('calendly');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#0A0A0A] font-sans selection:bg-gray-200 relative overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 max-w-[1100px] mx-auto text-center">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] aspect-square ambient-glow rounded-full blur-[90px] pointer-events-none -z-10" />

        {/* Centered Decent Size Logo above Attention Badge */}
        <div className="flex justify-center mb-6">
          <img
            src="https://i.ibb.co/0yBPKq0Q/adways-logo-variation-01-geometric-interlock.png"
            alt="Ad-ways"
            referrerPolicy="no-referrer"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          />
        </div>

        {/* Attention Badge */}
        <div className="inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-6 bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-md shadow-purple-600/20">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            B2B Companies & Agency Owners...
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.12] max-w-4xl mx-auto text-balance">
          How we help you to predictably and consistently sign new clients through paid ads.
        </h1>

        {/* Subheading */}
        <p className="mt-4 sm:mt-5 text-base sm:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
          And you can get started with as little as $10/day in ad spend.
        </p>

        {/* VSL VIDEO SECTION */}
        <div id="vsl" className="mt-8 sm:mt-10 max-w-4xl mx-auto">
          <WistiaPlayer />
        </div>

        {/* Widgets MOVED BELOW VSL: Primary CTA + Scarcity Pill */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#calendly"
            onClick={scrollToCalendly}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0A0A0A] hover:bg-gray-800 text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-xl cursor-pointer group"
          >
            <span>Book a 1-on-1 Growth Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-3 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-gray-800">
              Only 3 spots open for this month
            </span>
          </div>
        </div>
      </section>

      {/* REAL RESULTS ONCE THE SYSTEM GOES LIVE (Client Wins & Campaign Results) */}
      <ProofGallery onSelectImage={(item) => setSelectedProof(item)} />

      {/* THE 4-STEP SYSTEM */}
      <SystemSteps />

      {/* SIDE-BY-SIDE QUALIFICATION (This Is For You If vs NOT For You If) */}
      <QualificationSection />

      {/* CALENDLY EMBED SECTION */}
      <CalendlySection />

      {/* FOOTER (Only Logo & Copyright line) */}
      <Footer />

      {/* Full-screen Lightbox / Zoom Modal */}
      <ImageModal
        item={selectedProof}
        onClose={() => setSelectedProof(null)}
      />
    </div>
  );
}
