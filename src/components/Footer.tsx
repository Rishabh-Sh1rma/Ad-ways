import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 mt-16 bg-[#FCFCFC] py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <img
          src="/images/adways-logo.webp"
          alt="Ad-ways - High-Ticket Client Acquisition Agency"
          className="w-10 h-10 object-contain"
          width="40"
          height="40"
        />
        <p className="text-xs sm:text-sm font-mono text-gray-500">
          © 2026 Ad-ways. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
