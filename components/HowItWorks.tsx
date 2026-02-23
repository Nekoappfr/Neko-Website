import React from 'react';

const CatDoodle1 = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
    <path d="M30 70C30 70 35 40 50 40C65 40 70 70 70 70" stroke="#1C1C1B" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M40 42L35 30L45 38" stroke="#1C1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M60 42L65 30L55 38" stroke="#1C1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="43" cy="55" r="1.5" fill="#1C1C1B"/>
    <circle cx="57" cy="55" r="1.5" fill="#1C1C1B"/>
    <rect x="25" y="75" width="50" height="15" rx="2" stroke="#1C1C1B" strokeWidth="1" strokeDasharray="3 3"/>
  </svg>
);

const CatDoodle2 = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
    <circle cx="55" cy="45" r="20" stroke="#1C1C1B" strokeWidth="1.5" strokeDasharray="4 2"/>
    <path d="M70 60L85 75" stroke="#1C1C1B" strokeWidth="2" strokeLinecap="round"/>
    <path d="M30 65C30 65 32 45 42 45" stroke="#1C1C1B" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CatDoodle3 = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
    <path d="M20 70C20 70 25 45 40 45C55 45 60 70 60 70" stroke="#1C1C1B" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="35" y="25" width="30" height="30" rx="6" stroke="#1C1C1B" strokeWidth="1.2" strokeDasharray="3 3"/>
  </svg>
);

const HowItWorks: React.FC = () => {
  const steps = [
    { 
      Illustration: CatDoodle1,
      title: 'List my ad for free',
      desc: 'Post your request for free. Dates, habits, and cat preferences.'
    },
    { 
      Illustration: CatDoodle2,
      title: 'Review applications',
      desc: 'Receive messages from verified neighbors in your area.'
    },
    { 
      Illustration: CatDoodle3,
      title: 'Meet and book',
      desc: 'Choose your match and enjoy a stress-free vacation.'
    }
  ];

  return (
    <div className="w-full py-4">
      <h2 className="text-[18px] md:text-[24px] font-bold text-[#1C1C1B] mb-12 tracking-tight text-center">
        How it works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="mb-6 relative flex items-center justify-center w-16 h-16 rounded-[28px] bg-[#F3F3F2] group-hover:bg-[#E9E9E7] transition-colors shadow-sm">
               <step.Illustration />
               <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border border-[#E9E9E7] flex items-center justify-center text-[11px] font-bold text-[#1C1C1B]/40 shadow-sm">
                 0{i+1}
               </div>
            </div>
            
            <div className="space-y-2 px-4 lg:px-8">
              <h3 className="text-[15px] md:text-[17px] font-bold text-[#1C1C1B] tracking-tight group-hover:text-[#C25E72] transition-colors">
                {step.title}
              </h3>
              <p className="text-[13px] text-[#37352F]/60 leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;