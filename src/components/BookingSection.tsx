import React, { useEffect } from 'react';
import Cal, { getCalApi } from '@calid/react-embed';
import { ExternalLink } from 'lucide-react';

export const BookingSection: React.FC = () => {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({
          namespace: 'default',
          embedLibUrl: 'https://cal.id/embed-link/embed.js',
        });
        cal('ui', {
          cssVarsPerTheme: {
            light: { 'cal-brand': '#007ee5' },
            dark: { 'cal-brand': '#fafafa' },
          },
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      } catch (err) {
        console.error('Cal init error:', err);
      }
    })();
  }, []);

  return (
    <section id="calendly" className="py-12 sm:py-20 px-2 sm:px-6 max-w-[1080px] mx-auto scroll-mt-8 w-full">
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


      {/* Main Cal Embed Container - Full Width & Height */}
      <div className="bg-white rounded-[20px] sm:rounded-[36px] border border-gray-200 p-2 sm:p-5 shadow-xl w-full">
        <div className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden min-h-[680px] h-[750px] sm:h-[720px] bg-white">
          <Cal
            namespace="default"
            calLink="rishabh-sharma/growth-call"
            style={{ width: '100%', height: '100%', overflow: 'auto', border: 'none' }}
            config={{ layout: 'month_view' }}
            calOrigin="https://cal.id"
            embedJsUrl="https://cal.id/embed-link/embed.js"
          />
        </div>

        {/* Direct link option */}
        <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2 px-3 pb-1">
          <span>Need to open booking full screen?</span>
          <a
            href="https://cal.id/rishabh-sharma/growth-call"
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
