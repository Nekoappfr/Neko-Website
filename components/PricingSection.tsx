
import React from 'react';
import { PricingTabType } from '../types';

const PriceIconDropIn = () => (
  <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 70C30 70 35 45 50 45C65 45 70 70 70 70" stroke="#1C1C1B" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="20" stroke="#1C1C1B" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
    <path d="M45 55L50 60L60 50" stroke="#C25E72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PriceIconBoarding = () => (
  <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 75V45L50 30L70 45V75" stroke="#1C1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="45" y="60" width="10" height="15" stroke="#1C1C1B" strokeWidth="1" strokeDasharray="2 1" />
  </svg>
);

const PriceIconSitting = () => (
  <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 50C40 47 43 45 45 45C47 45 50 47 50 50C50 55 40 60 40 60" fill="#C25E72" fillOpacity="0.05" stroke="#C25E72" strokeWidth="1.5" strokeOpacity="0.6" />
    <circle cx="70" cy="30" r="4" stroke="#1C1C1B" strokeWidth="1" />
  </svg>
);

interface Plan {
  tabLabel: string;
  title: string;
  price: string;
  unit: string;
  desc: string;
  icon: React.ReactNode;
  cta: string;
  popular?: boolean;
}

interface PricingSectionProps {
  activeTab: PricingTabType;
  setActiveTab: (tab: PricingTabType) => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ activeTab, setActiveTab }) => {
  const plans: Record<PricingTabType, Plan> = {
    visit: { 
      tabLabel: "Drop-in Visit",
      title: "Drop-in Visits", 
      price: "13€", 
      unit: "visit", 
      desc: "A neighbor comes to play, feed, and cuddle your cat directly at your home. Ideal for cats who prefer staying in their familiar environment.",
      icon: <PriceIconDropIn />,
      cta: "Select Visits"
    },
    boarding: { 
      tabLabel: "Pet Boarding",
      title: "Host Family", 
      price: "13€", 
      unit: "night", 
      desc: "Your cat stays with a passionate neighbor. A warm and family atmosphere for a completely peaceful vacation.",
      icon: <PriceIconBoarding />,
      cta: "Select Boarding",
      popular: true
    },
    housesitting: { 
      tabLabel: "House sitting",
      title: "House Sitting", 
      price: "Free*", 
      unit: "day", 
      desc: "The sitter moves into your home while you're away. Your cat keeps their habits and your house is monitored.",
      icon: <PriceIconSitting />,
      cta: "Select House Sitting"
    }
  };

  const currentPlan = plans[activeTab];

  return (
    <section id="pricing" className="py-4 scroll-mt-24">
      <div className="text-center mb-8">
        <h2 className="text-[18px] md:text-[22px] font-bold text-[#1C1C1B] tracking-tight">
          Transparent pricing
        </h2>
        <p className="text-[10px] font-bold text-[#37352F]/40 uppercase tracking-widest mt-1">
          No hidden fees
        </p>
      </div>

      <div className="flex p-1 bg-[#F0F0EF] rounded-xl mb-8 max-w-fit mx-auto">
        {(Object.keys(plans) as PricingTabType[]).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 md:px-6 py-2 rounded-lg text-[12px] font-bold transition-all duration-300 ${
              activeTab === key 
                ? 'bg-white text-[#1C1C1B] shadow-sm' 
                : 'text-[#37352F]/40 hover:text-[#37352F]/70'
            }`}
          >
            {plans[key].tabLabel}
          </button>
        ))}
      </div>
      
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 w-20 h-20 bg-white rounded-2xl border border-[#E9E9E7] shadow-sm flex items-center justify-center">
            {currentPlan.icon}
          </div>
          
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#1C1C1B]">
                {currentPlan.title} — {currentPlan.price}
              </h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[12px] text-[#37352F]/40 font-medium">/{currentPlan.unit}</span>
                {currentPlan.popular && (
                  <span className="text-[9px] font-bold text-[#C25E72] uppercase tracking-widest bg-[#C25E72]/8 px-2 py-0.5 rounded-full border border-[#C25E72]/20">Recommended</span>
                )}
              </div>
            </div>
            
            <p className="text-[13px] md:text-[14px] text-[#37352F]/70 font-medium leading-relaxed max-w-[480px]">
              {currentPlan.desc}
            </p>
            
            <div className="pt-2 flex justify-center">
              <button className="btn-primary px-8 py-3 text-[13px] shadow-md hover:scale-[1.02] transition-transform mx-auto">
                {currentPlan.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
