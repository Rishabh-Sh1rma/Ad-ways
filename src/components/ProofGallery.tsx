import React, { useRef, useState, useEffect } from 'react';
import { ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { CaseStudyItem } from '../types';

interface ProofGalleryProps {
  onSelectImage: (item: CaseStudyItem) => void;
}

interface ClientWinItem {
  id: string;
  winNumber: number;
  imageUrl: string;
  caption: string;
}

const REORDERED_CLIENT_WINS: ClientWinItem[] = [
  {
    id: 'win-1',
    winNumber: 1,
    imageUrl: 'https://i.ibb.co/6JXfF0pG/upload-image-6.jpg',
    caption: 'converted 450$ into 3300$ for the client selling in dubai.',
  },
  {
    id: 'win-2',
    winNumber: 2,
    imageUrl: 'https://i.ibb.co/sdLMKTPz/upload-image-5.jpg',
    caption: 'consistent high quality leads from US market for an SEO agency.',
  },
  {
    id: 'win-3',
    winNumber: 3,
    imageUrl: 'https://i.ibb.co/B5KJYrb9/upload-image-4.png',
    caption: 'Consistent inbound bookings and high-intent client conversations.',
  },
  {
    id: 'win-4',
    winNumber: 4,
    imageUrl: 'https://i.ibb.co/DHyLZs2r/upload-image-1.jpg',
    caption: '3 jobs closed for US client',
  },
  {
    id: 'win-5',
    winNumber: 5,
    imageUrl: 'https://i.ibb.co/MxJZLsk7/Wilson-closed.png',
    caption: '~2000$ client closed with 12$ CPL',
  },
  {
    id: 'win-6',
    winNumber: 6,
    imageUrl: 'https://i.ibb.co/LD2rV9Dg/upload-image-2.jpg',
    caption: 'Daily automated lead generation flow and calendar bookings.',
  },
  {
    id: 'win-7',
    winNumber: 7,
    imageUrl: 'https://i.ibb.co/Y4GJ3hHt/upload-image-7.jpg',
    caption: 'closed a 2500$ deal in first 7 days of running campaign.',
  },
];

const REMAINING_CAMPAIGN_RESULTS: string[] = [
  'https://i.ibb.co/LX8ncVHp/cintra-1.jpg',
  'https://i.ibb.co/V08Vkps3/cintra-2.jpg',
  'https://i.ibb.co/Z6YphM8n/Whats-App-Image-2026-05-02-at-10-47-35-PM.jpg',
  'https://i.ibb.co/LD81nGM3/Whats-App-Image-2026-05-02-at-10-47-37-PM-1.jpg',
  'https://i.ibb.co/yKbnNRy/Whats-App-Image-2026-05-02-at-10-47-37-PM-2.jpg',
  'https://i.ibb.co/PvVBLwG7/Whats-App-Image-2026-05-02-at-10-47-38-PM.jpg',
  'https://i.ibb.co/QvZ13DL3/Whats-App-Image-2026-05-02-at-10-47-35-PM-1.jpg',
  'https://i.ibb.co/JWpZpGPn/u.jpg',
  'https://i.ibb.co/236Fk5q7/Whats-App-Image-2026-05-02-at-10-47-36-PM.jpg',
  'https://i.ibb.co/hxP7rMcF/Whats-App-Image-2026-05-02-at-10-47-36-PM-1.jpg',
  'https://i.ibb.co/Z78cLTH/Whats-App-Image-2026-05-02-at-10-47-37-PM.jpg',
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

    // Approximate active index based on scroll position
    const cardWidth = 280; // approximate snap card step
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
    <section id="case-studies" className="py-12 sm:py-20 px-3 sm:px-6 max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
          Real results once the system goes live.
        </h2>
      </div>

      {/* SECTION 1: CLIENT WINS */}
      <div className="mb-14 sm:mb-16">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] tracking-tight">
            Client Wins
          </h3>
        </div>

        {/* Compact Mobile-Friendly Grid with tight spacing & lazy images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
              className="group cursor-pointer bg-white rounded-2xl border border-gray-200/90 p-2.5 sm:p-3 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-50 aspect-[4/3] flex items-center justify-center border border-gray-100">
                <img
                  src={win.imageUrl}
                  alt={`Client Win #${win.winNumber}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                  loading={index < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className="absolute top-2 left-2 bg-black/75 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded-md">
                  Client Win #{win.winNumber}
                </div>
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-medium">
                  <ZoomIn className="w-4 h-4" />
                  <span>Inspect</span>
                </div>
              </div>
              <div className="mt-2.5 px-1 pb-1">
                <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug">
                  {win.caption}
                </p>
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
                  alt={`Campaign Result ${idx + 1}`}
                  referrerPolicy="no-referrer"
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
