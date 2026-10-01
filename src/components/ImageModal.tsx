import React, { useEffect } from 'react';
import { X, ExternalLink, ZoomIn, CheckCircle2 } from 'lucide-react';
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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity">
      <div 
        className="relative max-w-5xl w-full bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-gray-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#FCFCFC]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#0A0A0A] tracking-tight">{item.title}</h4>
              <p className="text-xs text-gray-500 font-mono">{item.client} · Verified Result</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Preview Box */}
        <div className="flex-1 overflow-auto bg-neutral-900/5 p-4 flex items-center justify-center min-h-[300px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl shadow-md border border-gray-200/50"
            loading="eager"
          />
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3.5 bg-white border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
            <span>{item.caption}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={item.imageUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-black transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open Original
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-full bg-[#0A0A0A] text-white text-xs font-medium hover:bg-gray-800 transition-colors"
            >
              Done Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
