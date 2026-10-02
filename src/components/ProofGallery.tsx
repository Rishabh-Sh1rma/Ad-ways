import React, { useRef, useState, useEffect } from 'react';
import { ZoomIn, ChevronLeft, ChevronRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { CaseStudyItem } from '../types';

interface ProofGalleryProps {
  onSelectImage: (item: CaseStudyItem) => void;
}

interface ClientWinItem {
  id: string;
  winNumber: number;
  imageUrl: string;
  badge: string;
  metric: string;
  headline: string;
  caption: string;
}

const REORDERED_CLIENT_WINS: ClientWinItem[] = [
  {
    id: 'win-1',
    winNumber: 1,
    imageUrl: '/images/win-1.webp',
    badge: 'ROI Milestone',
    metric: '+$2,850 Profit',
    headline: '$450 ad spend converted into $3,300',
    caption: 'converted 450$ into 3300$ for the client selling in dubai.',
  },
  {
    id: 'win-2',
    winNumber: 2,
    imageUrl: '/images/win-2.webp',
    badge: 'High-Ticket Inbound',
    metric: 'US Market Scale',
    headline: 'High quality leads for an SEO agency',
    caption: 'consistent high quality leads from US market for an SEO agency.',
  },
  {
    id: 'win-3',
    winNumber: 3,
    imageUrl: '/images/win-3.webp',
    badge: 'Calendar Flow',
    metric: 'Daily Bookings',
    headline: 'Consistent inbound bookings & conversations',
    caption: 'Consistent inbound bookings and high-intent client conversations.',
  },
  {
    id: 'win-4',
    winNumber: 4,
    imageUrl: '/images/win-4.webp',
    badge: 'Client Retention',
    metric: '3 Deals Closed',
    headline: '3 high-ticket jobs closed for US client',
    caption: '3 jobs closed for US client',
  },
  {
    id: 'win-5',
    winNumber: 5,
    imageUrl: '/images/win-5.webp',
    badge: 'Micro-Budget Win',
    metric: '$12 CPL · ~$2K Deal',
    headline: 'Wilson deal closed with $12 cost-per-lead',
    caption: '~2000$ client closed with 12$ CPL',
  },
  {
    id: 'win-6',
    winNumber: 6,
    imageUrl: '/images/win-6.webp',
    badge: 'Automation',
    metric: 'Automated Pipeline',
    headline: 'Daily automated lead generation flow',
    caption: 'Daily automated lead generation flow and calendar bookings.',
  },
  {
    id: 'win-7',
    winNumber: 7,
    imageUrl: '/images/win-7.webp',
    badge: 'Fast Velocity',
    metric: '$2,500 in 7 Days',
    headline: 'Closed $2,500 deal in first 7 days of campaign',
    caption: 'closed a 2500$ deal in first 7 days of running campaign.',
  },
  {
    id: 'win-8',
    winNumber: 8,
    imageUrl: '/images/win-8.webp',
    badge: 'Quality Leads',
    metric: '$3,500 Deal Closed',
    headline: 'Generated big win for Josh closing deal worth $3,500',
    caption: 'generated big win for Josh closing deal worth 3500$',
  },
  {
    id: 'win-9',
    winNumber: 9,
    imageUrl: '/images/win-9.webp',
    badge: 'Revenue Scaling',
    metric: '5x Revenue in 6 Mo',
    headline: 'Helped Gavin almost 5x his revenue in span of 6 months',
    caption: 'Helped Gavin almost 5x his revenue in span of 6 months.',
  },
];

const REMAINING_CAMPAIGN_RESULTS: string[] = [
  '/images/camp-1.webp',
  '/images/camp-2.webp',
  '/images/camp-3.webp',
  '/images/camp-4.webp',
  '/images/camp-5.webp',
  '/images/camp-6.webp',
  '/images/camp-7.webp',
  '/images/camp-8.webp',
  '/images/camp-9.webp',
  '/images/camp-10.webp',
  '/images/camp-11.webp',
];

export const ProofGallery: React.FC<ProofGalleryProps> = ({ onSelectImage }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = 280;
    const index = Math.min(
      REMAINING_CAMPAIGN_RESULTS.length - 1,
      Math.max(0, Math.round(scrollLeft / cardWidth))
    );
    setCurrentIndex(index);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => slider.removeEventListener('scroll', updateScrollState);
  }, []);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.clientWidth > 640 ? 320 : 260;
    const amount = direction === 'left' ? -cardWidth : cardWidth;
    sliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.clientWidth > 640 ? 320 : 260;
    sliderRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };

  return (
    <section id="case-studies" className="py-14 sm:py-20 px-3 sm:px-6 max-w-[1240px] mx-auto">
      {/* Section Header with Semantic H2 */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-gray-800 shadow-xs mb-3">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Documented Acquisition Proof</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A0A0A] leading-tight">
          Real results once the system goes live.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
          Verified client milestones, WhatsApp win notifications, and campaign analytics from active partners.
        </p>
      </div>

      {/* SECTION 1: CLIENT WINS (SUPER PREMIUM MOBILE-ALIGNED CARDS) */}
      <div className="mb-16 sm:mb-20">
        <div className="flex items-center justify-between gap-3 mb-6 pb-3 border-b border-gray-200/80">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] tracking-tight">
              Client Wins
            </h3>
          </div>
          <span className="text-xs font-mono font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            9 Verified Results
          </span>
        </div>

        {/* Super Premium Card Grid - Perfectly balanced across mobile & desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {REORDERED_CLIENT_WINS.map((win, index) => (
            <div
              key={win.id}
              onClick={() =>
                onSelectImage({
                  id: win.id,
                  title: `Client Win #${win.winNumber}`,
                  client: 'Verified Client',
                  category: 'revenue',
                  imageUrl: win.imageUrl,
                  caption: win.caption,
                })
              }
              className="group cursor-pointer bg-white rounded-[24px] sm:rounded-[28px] border border-gray-200/80 p-4 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Metric Bar */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-gray-900 bg-gray-100 px-2.5 py-1 rounded-lg">
                      Win #{win.winNumber}
                    </span>
                    <span className="text-[11px] font-semibold text-purple-700 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-md">
                      {win.badge}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-green-700 bg-green-50 border border-green-200/70 px-2.5 py-1 rounded-full">
                    {win.metric}
                  </span>
                </div>

                {/* Premium Image Frame */}
                <div className="relative overflow-hidden rounded-[18px] bg-neutral-950 aspect-[16/11] flex items-center justify-center border border-gray-100 shadow-inner">
                  <img
                    src={win.imageUrl}
                    alt={`Client Win #${win.winNumber}: ${win.caption}`}
                    className="w-full h-full object-contain sm:object-cover bg-neutral-950 transition-transform duration-500 group-hover:scale-[1.03]"
                    loading={index < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-xs">
                    <ZoomIn className="w-4 h-4" />
                    <span>Click to inspect full screenshot</span>
                  </div>
                </div>

                {/* Outcome Statement */}
                <div className="mt-4">
                  <h4 className="text-base font-bold text-[#0A0A0A] tracking-tight group-hover:text-purple-700 transition-colors leading-snug">
                    {win.headline}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                    {win.caption}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="inline-flex items-center gap-1 text-green-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Case Evidence
                </span>
                <span className="font-semibold text-gray-900 group-hover:translate-x-0.5 transition-transform">
                  View proof →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: CAMPAIGN RESULTS (MOBILE-FIRST 9:16 SLIDER) */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-4 pb-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] tracking-tight">
              Campaign Results
            </h3>
            <span className="text-xs font-mono text-gray-500 hidden sm:inline ml-2">
              (9:16 Proof Gallery)
            </span>
          </div>

          {/* Navigation Controls: Slide counter & Back/Front buttons */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-gray-500 mr-1 select-none">
              {currentIndex + 1} / {REMAINING_CAMPAIGN_RESULTS.length}
            </span>
            <button
              onClick={() => scrollByAmount('left')}
              disabled={!canScrollLeft}
              aria-label="Previous Campaign Result"
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
                canScrollLeft
                  ? 'bg-white border-gray-300 text-gray-900 hover:bg-gray-100 shadow-xs cursor-pointer active:scale-95'
                  : 'bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollByAmount('right')}
              disabled={!canScrollRight}
              aria-label="Next Campaign Result"
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
                canScrollRight
                  ? 'bg-white border-gray-300 text-gray-900 hover:bg-gray-100 shadow-xs cursor-pointer active:scale-95'
                  : 'bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swipe prompt on mobile */}
        <div className="flex items-center justify-between text-[11px] text-gray-400 mb-2 sm:hidden px-1">
          <span>Swipe horizontally or use arrows to view proofs</span>
          <span>9:16 Format</span>
        </div>

        {/* 9:16 Smooth Horizontal Slider with touch snap */}
        <div
          ref={sliderRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-3 pt-1 px-1 -mx-1"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {REMAINING_CAMPAIGN_RESULTS.map((url, idx) => (
            <div
              key={idx}
              onClick={() =>
                onSelectImage({
                  id: `camp-${idx}`,
                  title: `Campaign Result #${idx + 1}`,
                  client: 'Ad-ways Client',
                  category: 'cintra',
                  imageUrl: url,
                  caption: 'Direct campaign screenshot and analytics proof.',
                })
              }
              className="w-[240px] sm:w-[280px] md:w-[310px] shrink-0 snap-start group cursor-pointer bg-white rounded-2xl sm:rounded-[26px] border border-gray-200 p-2 shadow-sm hover:shadow-lg transition-all duration-200"
            >
              {/* 9:16 vertical aspect ratio container */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-[20px] bg-neutral-950 aspect-[9/16] flex items-center justify-center border border-gray-100">
                <img
                  src={url}
                  alt={`Ad-ways Campaign Result ${idx + 1} proof of paid ads performance`}
                  className="w-full h-full object-cover sm:object-contain bg-neutral-950 transition-transform duration-300 group-hover:scale-[1.02]"
                  loading={idx < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                />

                {/* Badge at top */}
                <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-0.5 rounded-full z-10 border border-white/10">
                  Result #{idx + 1}
                </div>

                {/* Hover / Tap inspect prompt */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-medium backdrop-blur-xs">
                  <ZoomIn className="w-4 h-4" />
                  <span>Inspect Full Proof</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive slide indicator dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {REMAINING_CAMPAIGN_RESULTS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => scrollToSlide(dotIdx)}
              aria-label={`Go to result ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                dotIdx === currentIndex
                  ? 'w-6 bg-[#0A0A0A]'
                  : 'w-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
