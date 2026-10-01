import React from 'react';
import { ZoomIn } from 'lucide-react';
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

// Rearranged according to user instructions:
// 1. Old Win #2 moved to Client Win #1
// 2. Old Win #3 as Client Win #2
// 3. Campaign Result #8 moved as Client Win #3
// 4. Old Win #4 as Client Win #4
// 5. Old Win #5 as Client Win #5
// 6. Campaign Result #9 moved as Client Win #6
// 7. Old Win #1 moved to Client Win #7
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
  return (
    <section id="case-studies" className="py-12 sm:py-20 px-3 sm:px-6 max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
          Real results once the system goes live.
        </h2>
      </div>

      {/* SECTION 1: CLIENT WINS */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] tracking-tight">
            Client Wins
          </h3>
        </div>

        {/* Compact Mobile-Friendly Grid with less space */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {REORDERED_CLIENT_WINS.map((win) => (
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
                  loading="lazy"
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

      {/* SECTION 2: CAMPAIGN RESULTS */}
      <div>
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] tracking-tight">
            Campaign Results
          </h3>
        </div>

        {/* Tight grid with NO descriptions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
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
              className="group cursor-pointer bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-1.5 sm:p-2 shadow-xs hover:shadow-md transition-all duration-200"
            >
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-gray-50 aspect-[4/3] flex items-center justify-center border border-gray-100">
                <img
                  src={url}
                  alt={`Campaign Result ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 text-white text-[11px] font-medium">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Inspect</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
