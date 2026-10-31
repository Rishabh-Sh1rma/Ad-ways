import React, { useEffect, useRef, useState } from 'react';
import { 
  Rocket, 
  Layers, 
  Database, 
  MessageSquare, 
  Video, 
  BarChart3, 
  Palette, 
  Globe, 
  CheckCircle2, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Sparkles,
  Zap,
  ShieldCheck,
  Check
} from 'lucide-react';

interface ReelVideo {
  id: string;
  title: string;
  tag: string;
}

const REEL_VIDEOS: ReelVideo[] = [
  { id: 'av462avyi0', title: 'Ad Script Reference #1', tag: 'Direct Response Hook' },
  { id: '34z7ylt2m1', title: 'Ad Script Reference #2', tag: 'Problem-Agitation Angle' },
  { id: 'xp6bc5xlsc', title: 'Ad Script Reference #3', tag: 'High-Ticket VSL Cut' },
  { id: '04bwe8piy7', title: 'Ad Script Reference #4', tag: 'Social Proof Creative' },
];

export const WhatYouGetSection: React.FC = () => {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [activeVslTab, setActiveVslTab] = useState<'wistia' | 'youtube'>('wistia');
  const reelSliderRef = useRef<HTMLDivElement>(null);

  // Load Wistia Embed scripts for all videos
  useEffect(() => {
    const ensureScript = (src: string, isModule = false) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        if (isModule) script.type = 'module';
        document.body.appendChild(script);
      }
    };

    ensureScript('https://fast.wistia.com/player.js');
    
    // Reel scripts
    REEL_VIDEOS.forEach((vid) => {
      ensureScript(`https://fast.wistia.com/embed/${vid.id}.js`, true);
    });

    // VSL script
    ensureScript('https://fast.wistia.com/embed/oz5ajtksfm.js', true);
  }, []);

  const scrollToReel = (index: number) => {
    setActiveReelIndex(index);
    if (reelSliderRef.current) {
      const cardWidth = reelSliderRef.current.offsetWidth;
      reelSliderRef.current.scrollTo({
        left: index * (cardWidth * 0.78),
        behavior: 'smooth',
      });
    }
  };

  const handleNextReel = () => {
    const nextIdx = (activeReelIndex + 1) % REEL_VIDEOS.length;
    scrollToReel(nextIdx);
  };

  const handlePrevReel = () => {
    const prevIdx = (activeReelIndex - 1 + REEL_VIDEOS.length) % REEL_VIDEOS.length;
    scrollToReel(prevIdx);
  };

  return (
    <section id="what-you-get" className="py-12 sm:py-20 px-3 sm:px-6 max-w-[1200px] mx-auto scroll-mt-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700 badge-purple shadow-xs mb-3">
          <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
          <span>Complete Done-For-You Deliverables</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A0A0A] leading-tight">
          What you get when you work with us
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
          End-to-End client generation system. Onboard us and you don't have to lift a finger.
        </p>
      </div>

      {/* Grid of First 4 Setup Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {/* Item 1 */}
        <div className="bg-white rounded-[24px] border border-gray-200/90 p-5 sm:p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-100 badge-purple flex items-center justify-center font-mono font-bold text-sm">
                01
              </span>
              <Rocket className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#0A0A0A] leading-snug mb-2">
              Ready-to-Launch Offer
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              An outcome-driven, irresistible offer architected specifically for Facebook & Instagram paid ads to convert cold prospects.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs text-green-700 font-medium">
            <Check className="w-3.5 h-3.5" />
            <span>Works on cold traffic</span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="bg-white rounded-[24px] border border-gray-200/90 p-5 sm:p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-100 badge-purple flex items-center justify-center font-mono font-bold text-sm">
                02
              </span>
              <Layers className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#0A0A0A] leading-snug mb-2">
              Meta Business Suite & IG Setup
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Complete Meta Ad account, Business Manager verification, pixel diagnostics, and Instagram profile integration.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs text-green-700 font-medium">
            <Check className="w-3.5 h-3.5" />
            <span>100% compliant setup</span>
          </div>
        </div>

        {/* Item 3 */}
        <div className="bg-white rounded-[24px] border border-gray-200/90 p-5 sm:p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-100 badge-purple flex items-center justify-center font-mono font-bold text-sm">
                03
              </span>
              <Database className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-base sm:text-lg font-bold text-[#0A0A0A] leading-snug">
                Free High-End CRM
              </h3>
              <span className="text-[10px] font-mono font-bold bg-green-50 text-green-700 border border-green-200 badge-green px-1.5 py-0.5 rounded-sm">
                $100 Value
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              All-in-one centralized lead management dashboard where all incoming deals, booked calls, and notes are organized.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs text-green-700 font-medium">
            <Check className="w-3.5 h-3.5" />
            <span>Zero software fees</span>
          </div>
        </div>

        {/* Item 4 */}
        <div className="bg-white rounded-[24px] border border-gray-200/90 p-5 sm:p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-100 badge-purple flex items-center justify-center font-mono font-bold text-sm">
                04
              </span>
              <MessageSquare className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#0A0A0A] leading-snug mb-2">
              Automated WhatsApp, SMS & Email
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Instant auto-replies, multi-touch SMS & WhatsApp confirmations, and email reminders to guarantee an 80%+ show-up rate.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs text-green-700 font-medium">
            <Check className="w-3.5 h-3.5" />
            <span>Zero manual follow-ups</span>
          </div>
        </div>
      </div>

      {/* FEATURE ITEM 5: 9:16 Video Ads Slider from our Copywriter */}
      <div className="bg-white rounded-[28px] sm:rounded-[36px] border border-gray-200/90 p-5 sm:p-8 shadow-md mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100 badge-purple text-xs font-mono font-bold">
                05 · Video Ads Production
              </span>
              <span className="text-xs text-green-700 font-semibold bg-green-50 border border-green-200 badge-green px-2 py-0.5 rounded-full">
                9:16 Mobile Native
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] tracking-tight">
              Ad scripts for video ads from our Copywriter
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-1 max-w-2xl">
              Swipe through real high-converting 9:16 reference video ads written and structured by our direct-response copywriters:
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={handlePrevReel}
              aria-label="Previous video ad"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center transition-colors active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-xs font-mono font-medium text-gray-500 px-2">
              {activeReelIndex + 1} / {REEL_VIDEOS.length}
            </div>
            <button
              onClick={handleNextReel}
              aria-label="Next video ad"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center transition-colors active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 9:16 Reel Cards - Responsive Swipe Slider */}
        <div
          ref={reelSliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 no-scrollbar scroll-smooth"
        >
          {REEL_VIDEOS.map((vid, index) => (
            <div
              key={vid.id}
              className="shrink-0 w-[260px] sm:w-[280px] snap-center bg-neutral-950 rounded-[24px] p-2 sm:p-2.5 border border-neutral-800 shadow-xl flex flex-col justify-between"
            >
              {/* Top Reel Header */}
              <div className="flex items-center justify-between px-2 py-1.5 text-xs text-white">
                <span className="font-semibold text-gray-200 truncate">{vid.title}</span>
                <span className="text-[10px] font-mono bg-purple-900/60 text-purple-300 px-2 py-0.5 rounded-full border border-purple-700/50">
                  {vid.tag}
                </span>
              </div>

              {/* 9:16 Video Player Container */}
              <div className="relative overflow-hidden rounded-[18px] bg-neutral-900 aspect-[9/16] w-full flex items-center justify-center my-1.5">
                {React.createElement('wistia-player', {
                  'media-id': vid.id,
                  aspect: '0.5625',
                  style: { width: '100%', height: '100%', display: 'block' },
                })}
              </div>

              {/* Bottom Reel Caption */}
              <div className="px-2 pt-2 pb-1 text-[11px] text-gray-400 flex items-center justify-between">
                <span>Direct-response hook</span>
                <span className="text-green-400 font-mono">Verified Active Ad</span>
              </div>
            </div>
          ))}
        </div>

        {/* Swipe Indicators on Mobile */}
        <div className="flex items-center justify-center gap-1.5 mt-3 sm:hidden">
          {REEL_VIDEOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToReel(idx)}
              className={`h-1.5 rounded-full transition-all ${
                activeReelIndex === idx ? 'w-6 bg-purple-600' : 'w-1.5 bg-gray-300'
              }`}
              aria-label={`Jump to video ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Grid of Campaign Setup + Unlimited Creative Ads */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {/* Item 6: Complete campaign setup */}
        <div className="bg-white rounded-[24px] border border-gray-200/90 p-5 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-100 badge-purple flex items-center justify-center font-mono font-bold text-sm">
                06
              </span>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">
              Complete Campaign Setup with Pixel & Live Reporting
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Full Meta Conversions API (CAPI) setup, custom events, exclusion audiences, and custom reporting dashboards so you always know your exact cost per lead and closed revenue.
            </p>
          </div>
          <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-100 text-gray-800 px-2.5 py-1 rounded-md font-medium">Meta CAPI Pixel</span>
            <span className="bg-gray-100 text-gray-800 px-2.5 py-1 rounded-md font-medium">Daily ROAS Audit</span>
            <span className="bg-gray-100 text-gray-800 px-2.5 py-1 rounded-md font-medium">Live Dashboard</span>
          </div>
        </div>

        {/* Item 7: Unlimited Image Ads from Lead Designer */}
        <div className="bg-white rounded-[24px] border border-gray-200/90 p-5 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-100 badge-purple flex items-center justify-center font-mono font-bold text-sm">
                07
              </span>
              <Palette className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-[#0A0A0A]">
                Free Image Ads – Unlimited from Lead Designer
              </h3>
              <span className="text-[10px] font-mono font-bold bg-purple-50 text-purple-700 border border-purple-200 badge-purple px-1.5 py-0.5 rounded-sm">
                Unlimited
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              We never run out of ad creatives. Our in-house design team produces fresh scroll-stopping visual ads, carousels, and stat banners continuously to beat ad fatigue.
            </p>
          </div>
          <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-100 text-gray-800 px-2.5 py-1 rounded-md font-medium">No Retainer Limits</span>
            <span className="bg-gray-100 text-gray-800 px-2.5 py-1 rounded-md font-medium">Scroll-Stopping Graphics</span>
            <span className="bg-gray-100 text-gray-800 px-2.5 py-1 rounded-md font-medium">Weekly Creative Drops</span>
          </div>
        </div>
      </div>

      {/* FEATURE ITEM 8: Landing Page Funnel with Live Links */}
      <div className="bg-white rounded-[28px] sm:rounded-[36px] border border-gray-200/90 p-5 sm:p-8 shadow-md mb-8 sm:mb-12">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-100 badge-purple flex items-center justify-center font-mono font-bold text-sm">
              08
            </span>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A]">
                High-Converting Landing Page & Funnel
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Engineered for speed, high qualification, and maximum booked calls
              </p>
            </div>
          </div>
          <Globe className="w-6 h-6 text-purple-600 hidden sm:block" />
        </div>

        <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
          A bespoke landing page with compelling copy, fast load speeds, and seamless calendar integrations. Check live examples built by our team:
        </p>

        {/* 4 Live Landing Page Link Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <a
            href="https://cintra.run/ecom"
            className="group flex flex-col justify-between p-4 rounded-2xl bg-neutral-50 hover:bg-white border border-gray-200 hover:border-purple-300 transition-all hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-purple-700">Funnel Example 01</span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <h4 className="text-sm font-bold text-[#0A0A0A] group-hover:text-purple-700 transition-colors">
                cintra.run/ecom
              </h4>
              <p className="text-xs text-gray-500 mt-1">E-Commerce High-Ticket Growth Funnel</p>
            </div>
            <span className="mt-3 text-xs font-semibold text-purple-600 group-hover:underline inline-flex items-center gap-1">
              View live page →
            </span>
          </a>

          <a
            href="https://funnels.cintra.run/offer"
            className="group flex flex-col justify-between p-4 rounded-2xl bg-neutral-50 hover:bg-white border border-gray-200 hover:border-purple-300 transition-all hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-purple-700">Funnel Example 02</span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <h4 className="text-sm font-bold text-[#0A0A0A] group-hover:text-purple-700 transition-colors">
                funnels.cintra.run/offer
              </h4>
              <p className="text-xs text-gray-500 mt-1">Direct Offer Conversion Funnel</p>
            </div>
            <span className="mt-3 text-xs font-semibold text-purple-600 group-hover:underline inline-flex items-center gap-1">
              View live page →
            </span>
          </a>

          <a
            href="https://sites.leadconnectorhq.com/preview/5zsWPxvSH70fWsL8lhjM?notrack=true"
            className="group flex flex-col justify-between p-4 rounded-2xl bg-neutral-50 hover:bg-white border border-gray-200 hover:border-purple-300 transition-all hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-purple-700">Funnel Example 03</span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <h4 className="text-sm font-bold text-[#0A0A0A] group-hover:text-purple-700 transition-colors truncate">
                sites.leadconnectorhq...
              </h4>
              <p className="text-xs text-gray-500 mt-1">High-Converting Sales & Booking Funnel</p>
            </div>
            <span className="mt-3 text-xs font-semibold text-purple-600 group-hover:underline inline-flex items-center gap-1">
              View live page →
            </span>
          </a>

          <a
            href="https://genial-designer-013595.framer.app/"
            className="group flex flex-col justify-between p-4 rounded-2xl bg-neutral-50 hover:bg-white border border-gray-200 hover:border-purple-300 transition-all hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-purple-700">Funnel Example 04</span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <h4 className="text-sm font-bold text-[#0A0A0A] group-hover:text-purple-700 transition-colors">
                genial-designer...framer.app
              </h4>
              <p className="text-xs text-gray-500 mt-1">High-Impact Framer Agency Funnel</p>
            </div>
            <span className="mt-3 text-xs font-semibold text-purple-600 group-hover:underline inline-flex items-center gap-1">
              View live page →
            </span>
          </a>
        </div>
      </div>

      {/* FEATURE ITEM 9: Lead Qualification System */}
      <div className="bg-white rounded-[28px] sm:rounded-[36px] border border-gray-200/90 p-5 sm:p-8 shadow-md mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-100 badge-purple flex items-center justify-center font-mono font-bold text-sm">
              09
            </span>
            <div>
              <span className="text-xs font-mono uppercase text-green-700 tracking-wider font-semibold bg-green-50 border border-green-200 badge-green px-2.5 py-0.5 rounded-full inline-block mb-1">
                Tire-Kicker Protection
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] tracking-tight">
                Complete Lead Qualification System
              </h3>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-xs font-semibold text-green-700 badge-green self-start sm:self-auto">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            <span>High Quality Calls Only</span>
          </div>
        </div>

        <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
          We filter leads before they reach your schedule. Custom questionnaires, budget validation, and service fit criteria ensure only genuine decision-makers get booked directly into your calendar.
        </p>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-100 text-xs sm:text-sm text-gray-700 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
            <span>Revenue & budget verification</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
            <span>Automated disqualification rules</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
            <span>Direct calendar sync</span>
          </div>
        </div>
      </div>

      {/* FEATURE ITEM 10: Video Sales Letter (Script + Editing) with Switchable References */}
      <div className="bg-white rounded-[28px] sm:rounded-[36px] border border-gray-200/90 p-5 sm:p-8 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-xs font-mono font-bold border border-purple-100">
                10 · Video Sales Letter
              </span>
              <span className="text-xs font-semibold text-gray-600">Script + High-Production Editing</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] tracking-tight">
              Video Sales Letter : Script + Editing
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Toggle between our high-ticket VSL reference formats below:
            </p>
          </div>

          {/* VSL Reference Switcher Tabs */}
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setActiveVslTab('wistia')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeVslTab === 'wistia'
                  ? 'bg-white text-black shadow-xs'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Reference 1 (Wistia VSL)
            </button>
            <button
              onClick={() => setActiveVslTab('youtube')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeVslTab === 'youtube'
                  ? 'bg-white text-black shadow-xs'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Reference 2 (YouTube VSL)
            </button>
          </div>
        </div>

        {/* Video Player Frame for VSL */}
        <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px] bg-neutral-950 aspect-video w-full max-w-4xl mx-auto border border-gray-200 shadow-xl">
          {activeVslTab === 'wistia' ? (
            <div className="w-full h-full flex items-center justify-center">
              {React.createElement('wistia-player', {
                'media-id': 'oz5ajtksfm',
                aspect: '1.7777777777777777',
                style: { width: '100%', height: '100%', display: 'block' },
              })}
            </div>
          ) : (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/72VcmlY66XE?si=-BjuBpfDgoy96xob"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2 px-2">
          <span>We handle scriptwriting, objection handling, slides, and pacing for your VSL</span>
          <span className="font-semibold text-purple-700">Ready to convert cold viewers into appointments</span>
        </div>
      </div>
    </section>
  );
};
