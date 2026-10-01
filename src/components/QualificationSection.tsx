import React from 'react';
import { Check, X } from 'lucide-react';

const FOR_YOU_POINTS = [
  "You're an agency owner, coach, or B2B business selling services over Rs.50,000/month.",
  "You already have clients, case studies, and proof that your service works",
  "You're tired of relying on referrals, word-of-mouth, and inconsistent lead flow",
  "You want 3-5 qualified sales calls every week without cold outreach and burnout.",
  "You're ready to invest in building a real client acquisition system",
  "You want to scale to $20K-$50K/month+ without adding more complexity",
];

const NOT_FOR_YOU_POINTS = [
  "You're still trying to figure out what service or offer to sell",
  "You have no client results, testimonials, or proof of work",
  "You're looking for a done-for-you agency that does everything for you",
  "You're unwilling to invest in paid acquisition and growth",
  "You expect results without showing up to calls and implementing decisions",
  "You're looking for a shortcut, hack, or overnight success strategy",
];

export const QualificationSection: React.FC = () => {
  return (
    <section id="qualification" className="py-20 px-4 md:px-8 max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur-sm px-4 py-1.5 shadow-xs mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <span className="text-xs font-semibold tracking-wider uppercase text-gray-800">
            Eligibility & Alignment
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] leading-[1.1]">
          Is Ad-ways The Right Fit For You?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
          We operate as an elite growth partner, not a churn-and-burn agency. Please review our qualification criteria before booking a session.
        </p>
      </div>

      {/* Side-by-side Qualification Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* THIS IS FOR YOU IF */}
        <div className="bg-white rounded-[32px] border border-gray-200 p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0A0A0A] tracking-tight">
                  This Is For You If:
                </h3>
                <p className="text-xs font-mono text-green-700 uppercase tracking-wider mt-0.5">
                  Ideal Partner Profile
                </p>
              </div>
            </div>

            <ul className="space-y-6">
              {FOR_YOU_POINTS.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-[16px] md:text-[18px] text-gray-800 font-medium tracking-tight leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <a
              href="#calendly"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0A0A0A] hover:bg-gray-800 text-white py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            >
              <span>Yes, This Is Me — Book Strategy Call</span>
            </a>
          </div>
        </div>

        {/* THIS IS NOT FOR YOU IF */}
        <div className="bg-[#F9FAFB] rounded-[32px] border border-gray-200/80 p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <X className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0A0A0A] tracking-tight">
                  This Is NOT For You If:
                </h3>
                <p className="text-xs font-mono text-red-600 uppercase tracking-wider mt-0.5">
                  Disqualifying Factors
                </p>
              </div>
            </div>

            <ul className="space-y-6">
              {NOT_FOR_YOU_POINTS.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-[16px] md:text-[18px] text-gray-600 font-medium leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200/60">
            <p className="text-xs text-gray-500 text-center font-mono">
              We respect your time. If you do not meet the criteria, please hold off until you validate your core offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
