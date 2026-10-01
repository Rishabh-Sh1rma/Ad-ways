import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

export const CalendlySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject and trigger Calendly widget script if needed
    const scriptSrc = 'https://assets.calendly.com/assets/external/widget.js';
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;
    
    if (!script) {
      script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="calendly" className="py-12 sm:py-20 px-2 sm:px-6 max-w-[1050px] mx-auto scroll-mt-8 w-full">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 px-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gray-800 shadow-xs mb-3">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Direct Calendar Booking</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
          Book Your 1-on-1 Paid Ads Strategy Call
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600">
          Pick a 30-minute time slot on the calendar below to map out your paid ads scaling blueprint.
        </p>
      </div>

      {/* Main Calendly Card Container - Full Width & Height */}
      <div className="bg-white rounded-[20px] sm:rounded-[36px] border border-gray-200 p-1 sm:p-4 shadow-xl w-full">
        {/* Responsive full-width direct embed */}
        <div className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden min-h-[700px] h-[750px] sm:h-[720px]">
          <iframe
            src="https://calendly.com/rishabhar1974/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
            title="Book a 30-minute consultation with Rishabh Sharma"
            loading="lazy"
            className="w-full h-full border-0 absolute inset-0"
            style={{ width: '100%', height: '100%', minHeight: '700px' }}
          />
        </div>

        {/* Direct link option */}
        <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2 px-3 pb-1">
          <span>Need to open full screen?</span>
          <a
            href="https://calendly.com/rishabhar1974/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-gray-900 hover:underline"
          >
            <span>Open booking page directly in new tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
