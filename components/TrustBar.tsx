import React from 'react';

const GuaranteeDoodle1 = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
    <path d="M50 20L80 35V65L50 80L20 65V35L50 20Z" stroke="#1C1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3"/>
    <path d="M40 50L47 57L60 43" stroke="#1C1C1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GuaranteeDoodle2 = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
    <circle cx="35" cy="50" r="15" stroke="#1C1C1B" strokeWidth="1.5" strokeDasharray="4 2"/>
    <circle cx="65" cy="50" r="15" stroke="#C25E72" strokeWidth="1.5" strokeOpacity="0.4"/>
    <path d="M45 50H55" stroke="#1C1C1B" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const GuaranteeDoodle3 = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
    <path d="M25 40C25 40 30 25 50 25C70 25 75 40 75 40V65" stroke="#1C1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="42" y="45" width="16" height="12" rx="2" fill="#C25E72" fillOpacity="0.05" stroke="#C25E72" strokeWidth="1" strokeOpacity="0.4"/>
  </svg>
);

const TrustBar: React.FC = () => {
  const guarantees = [
    { 
      Illustration: GuaranteeDoodle1,
      title: 'Certified Profiles',
      desc: 'Each sitter is manually verified (ID, residency, and background).'
    },
    { 
      Illustration: GuaranteeDoodle2,
      title: 'Free Meet & Greet',
      desc: 'Meet your sitter for free before confirming your booking.'
    },
    { 
      Illustration: GuaranteeDoodle3,
      title: 'Full Refund',
      desc: 'Full reimbursement in case of last-minute cancellation.'
    }
  ];

  return (
    <div className="py-8">
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="text-[19px] md:text-[22px] font-semibold text-[#222222] leading-[1.25] tracking-tight">
          The Serenity Guarantee
        </h2>
        <p className="text-[13px] text-[#717171] font-normal mt-1">
          Trust & Safety above all
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {guarantees.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="mb-3 relative flex items-center justify-center w-12 h-12 rounded-[20px] bg-white border border-[#E9E9E7] shadow-sm group-hover:border-[#C25E72]/30 transition-all duration-500">
               <item.Illustration />
            </div>
            
            <div className="space-y-1 px-4">
              <h3 className="text-[14px] md:text-[15px] font-semibold text-[#222222] leading-[1.333] tracking-tight group-hover:text-[#C25E72] transition-colors">
                {item.title}
              </h3>
              <p className="text-[14px] text-[#222222] leading-[1.5] font-normal">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;