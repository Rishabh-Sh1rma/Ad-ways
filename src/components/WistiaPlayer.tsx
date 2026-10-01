import React, { useEffect, useState } from 'react';
import { Play, Sparkles } from 'lucide-react';

export const WistiaPlayer: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure Wistia player scripts are injected
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
    ensureScript('https://fast.wistia.com/embed/woewjdnv5v.js', true);

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full">
      {/* Glow highlight around VSL */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600/20 via-neutral-300/30 to-purple-600/20 rounded-[32px] md:rounded-[40px] blur-xl opacity-75 -z-10" />

      {/* Video Container Card */}
      <div className="bg-white rounded-[24px] md:rounded-[34px] border border-gray-200/90 shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-2 md:p-3 transition-all duration-300 hover:shadow-xl">
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] bg-neutral-900 aspect-video flex items-center justify-center">
          {/* Custom Wistia element */}
          {React.createElement('wistia-player', {
            'media-id': 'woewjdnv5v',
            aspect: '1.7777777777777777',
            style: { width: '100%', height: '100%', display: 'block' },
          })}

          {!isLoaded && (
            <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center text-white p-6 z-10">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-3 animate-pulse">
                <Play className="w-7 h-7 text-white fill-white translate-x-0.5" />
              </div>
              <p className="text-sm font-medium text-gray-300">Loading High-Ticket Scaling Breakdown...</p>
            </div>
          )}
        </div>

        {/* Video Subtitle & Key Points */}
        <div className="pt-3 pb-1 px-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm text-gray-600 border-t border-gray-100 mt-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-50 text-purple-700">
              <Sparkles className="w-3 h-3 text-purple-600" />
            </span>
            <span className="font-medium text-gray-800">
              Free 12-Min Breakdown:
            </span>
            <span className="text-gray-500 hidden sm:inline">
              The exact paid ads mechanism to hit $20K-$100K/mo
            </span>
          </div>
          <div className="text-[12px] font-mono text-gray-400 uppercase tracking-wider">
            Ad-ways Core Protocol
          </div>
        </div>
      </div>
    </div>
  );
};
