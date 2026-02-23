
import React from 'react';
import { PricingTabType } from '../types';

const MicroBoarding = () => (
  <svg width="12" height="12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current transition-transform duration-500 group-active:scale-110">
    <path d="M20 80H80M40 80V65H60V80M40 65C40 60 45 58 50 58C55 58 60 60 60 65" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MicroVisits = () => (
  <svg width="12" height="12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current transition-transform duration-500 group-active:scale-110">
    <path d="M35 85V30C35 30 40 25 65 30V85" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="42" cy="58" r="5" fill="currentColor"/>
  </svg>
);

const MicroSitting = () => (
  <svg width="12" height="12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current transition-transform duration-500 group-active:scale-110">
    <path d="M30 80V20H70V80M30 50H70" stroke="currentColor" strokeWidth="10" strokeLinecap="round" opacity="0.6"/>
    <path d="M50 20V80" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
  </svg>
);

interface ServicesNavProps {
  onServiceClick: (tab: PricingTabType) => void;
  activeTab: PricingTabType;
}

const ServicesNav: React.FC<ServicesNavProps> = ({ onServiceClick, activeTab }) => {
  const services = [
    { id: 'boarding', label: 'Boarding', icon: <MicroBoarding /> },
    { id: 'visit', label: 'Visits', icon: <MicroVisits /> },
    { id: 'housesitting', label: 'Sitting', icon: <MicroSitting /> },
  ];

  return (
    <div className="w-full py-4">
      <div className="flex flex-row items-center justify-center gap-1.5 md:gap-3 max-w-sm mx-auto px-4">
        {services.map((service) => {
          const isActive = activeTab === service.id;
          return (
            <button
              key={service.id}
              onClick={() => onServiceClick(service.id as PricingTabType)}
              className={`relative flex items-center gap-2 py-1.5 px-3.5 rounded-full border transition-all duration-500 group overflow-hidden ${
                isActive 
                  ? 'bg-white border-[#C25E72]/40 text-[#C25E72] shadow-[0_4px_12px_rgba(194,94,114,0.12)] ring-1 ring-[#C25E72]/5' 
                  : 'bg-white/40 backdrop-blur-sm border-[#E9E9E7] text-[#1C1C1B]/25 hover:text-[#1C1C1B]/50 hover:border-[#1C1C1B]/10 shadow-sm'
              }`}
            >
              {/* Active Background Glow Effect */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-tr from-[#C25E72]/10 via-transparent to-transparent pointer-events-none" />
              )}
              
              <div className={`flex-shrink-0 transition-all duration-500 ${isActive ? '-translate-y-[0.5px] scale-110' : 'opacity-60 scale-100'}`}>
                {service.icon}
              </div>
              
              <span className={`text-[9px] font-black uppercase tracking-[0.15em] leading-none transition-colors duration-500`}>
                {service.label}
              </span>

              {/* Interaction line */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-[#C25E72] transition-all duration-700 rounded-full ${isActive ? 'w-1/3 opacity-100' : 'w-0 opacity-0'}`} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesNav;
