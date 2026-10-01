import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 mt-16 bg-[#FCFCFC] py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <img
          src="https://i.ibb.co/0yBPKq0Q/adways-logo-variation-01-geometric-interlock.png"
          alt="Ad-ways Logo"
          referrerPolicy="no-referrer"
          className="w-10 h-10 object-contain"
        />
        <p className="text-xs sm:text-sm font-mono text-gray-500">
          © 2026 Ad-ways. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
