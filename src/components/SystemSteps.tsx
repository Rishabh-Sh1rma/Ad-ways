import React from 'react';

interface StepItem {
  tag: string;
  headline: string;
  description: string;
  image: string;
  youGet: string;
}

const STEPS_DATA: StepItem[] = [
  {
    tag: 'STEP 1: OFFER',
    headline: 'We Make Your Offer Impossible to Ignore',
    description:
      'We turn what you already sell into a clear, outcome-focused offer built for cold traffic so the right prospect immediately understands what you do, who it\'s for, and why they should care.',
    image: '/images/step-01.webp',
    youGet: 'Specific audience → Clear problem → Desired outcome → Strong promise',
  },
  {
    tag: 'STEP 2: MESSAGING',
    headline: 'We Make Your Ads Speak Directly to Your Buyer',
    description:
      'Your prospects should feel like the ad was written specifically for them. We build messaging around their problems, desires, objections, and language so the right people stop scrolling and pay attention.',
    image: '/images/step-02.webp',
    youGet: 'Right audience → Right pain point → Right message → More qualified leads',
  },
  {
    tag: 'STEP 3: FUNNEL',
    headline: 'We Turn Attention Into Qualified Appointments',
    description:
      'Getting someone to click is only the beginning. We build the right funnel to educate, build trust, qualify prospects, and move them toward a sales conversation.',
    image: '/images/step-03.webp',
    youGet: 'Ad → Landing Page → VSL/Content → Qualification → Booked Call',
  },
  {
    tag: 'STEP 4: CONVERSION',
    headline: 'We Turn Your Leads Into Paying Clients',
    description:
      'More booked calls mean nothing if they don\'t convert. We build the pre-call follow-up, qualification, and sales process needed to turn cold prospects into serious buying opportunities.',
    image: '/images/step-04.webp',
    youGet: 'Pre-call nurturing → Qualification → Sales process → Client conversion',
  },
];

export const SystemSteps: React.FC = () => {
  return (
    <section id="system" className="py-12 sm:py-20 px-3 sm:px-6 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
          The 4-Step Paid Ads High-Ticket Offer Scaling System
        </h2>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {STEPS_DATA.map((step, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[24px] sm:rounded-[32px] border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Perfectly framed square graphic container (never cut down) */}
              <div className="w-full aspect-square bg-[#F8F9FA] flex items-center justify-center p-3 sm:p-5 border-b border-gray-100 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.headline}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content area */}
              <div className="p-5 sm:p-7">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100 inline-block mb-3">
                  {step.tag}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] tracking-tight mb-3">
                  {step.headline}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* You get section with preserved arrows */}
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-900 block mb-2">
                    You get:
                  </span>
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/80 text-xs sm:text-sm font-medium text-gray-800 leading-relaxed">
                    {step.youGet}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
