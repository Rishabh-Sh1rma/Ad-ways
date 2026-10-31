import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { CaseStudyItem } from '../types';

interface ImageModalProps {
  item: CaseStudyItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  item,
  onClose,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    setActiveIdx(0);
  }, [item?.id]);

  const allImages = item ? (item.images && item.images.length > 0 ? item.images : [item.imageUrl]) : [];
  const currentImageUrl = allImages[activeIdx] || item?.imageUrl || '';

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (allImages.length > 1) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, allImages.length]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity">
      <div 
        className="relative max-w-5xl w-full bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-gray-200 flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-gray-100 bg-[#FCFCFC]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#0A0A0A] tracking-tight">{item.title}</h4>
              <p className="text-xs text-gray-500 font-mono">
                {item.client} · Verified Result {allImages.length > 1 ? `(${activeIdx + 1} of ${allImages.length} Proofs)` : ''}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Preview Box with Prev/Next Controls */}
        <div className="relative flex-1 overflow-auto bg-neutral-950 p-2 sm:p-4 flex items-center justify-center min-h-[300px]">
          {allImages.length > 1 && (
            <button
              onClick={handlePrev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg transition-all active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <img
            src={currentImageUrl}
            alt={`${item.title} proof screenshot ${activeIdx + 1}`}
            referrerPolicy="no-referrer"
            className="max-h-[64vh] sm:max-h-[68vh] w-auto max-w-full object-contain rounded-xl shadow-md border border-white/10"
            loading="eager"
          />

          {allImages.length > 1 && (
            <button
              onClick={handleNext}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg transition-all active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Multi-image thumbnail switcher if more than 1 image */}
        {allImages.length > 1 && (
          <div className="bg-neutral-900 px-4 py-2 flex items-center justify-center gap-2 overflow-x-auto border-t border-neutral-800">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`relative rounded-md overflow-hidden border-2 transition-all shrink-0 ${
                  activeIdx === idx
                    ? 'border-purple-500 scale-105 shadow-md'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Proof thumbnail ${idx + 1}`}
                  className="w-12 h-8 sm:w-16 sm:h-10 object-cover bg-black"
                />
              </button>
            ))}
          </div>
        )}

        {/* Footer info bar */}
        <div className="px-5 sm:px-6 py-3.5 bg-white border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
            <span className="font-medium">{item.caption}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#0A0A0A] text-white text-xs font-semibold hover:bg-gray-800 transition-colors shadow-xs"
            >
              Done Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
