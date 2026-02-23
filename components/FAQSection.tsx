
import React, { useState } from 'react';

const FAQDoodle = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
    <circle cx="50" cy="45" r="18" stroke="#1C1C1B" strokeWidth="1.2" strokeDasharray="4 2" />
    <path d="M65 60L80 75" stroke="#1C1C1B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M45 40L55 50" stroke="#C25E72" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    <path d="M55 40L45 50" stroke="#C25E72" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
  </svg>
);

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E9E9E7] last:border-0">
      <button 
        onClick={() => setOpen(!open)} 
        className="w-full py-5 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-[14px] md:text-[16px] font-bold text-[#1C1C1B] group-hover:text-[#C25E72] transition-colors tracking-tight">
          {q}
        </span>
        <div className={`flex items-center justify-center w-6 h-6 rounded-full bg-[#F0F0EF] transition-all duration-300 ${open ? 'rotate-45 bg-[#C25E72]/10' : ''}`}>
          <span className={`text-[16px] font-light leading-none ${open ? 'text-[#C25E72]' : 'text-[#1C1C1B]'}`}>+</span>
        </div>
      </button>
      {open && (
        <div className="pb-6 animate-in fade-in slide-in-from-top-2 duration-400">
          <p className="text-[13px] md:text-[14px] text-[#37352F]/70 leading-relaxed font-medium max-w-[620px]">
            {a}
          </p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section className="pt-12 pb-0 border-t border-[#E9E9E7]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="w-full md:w-1/3">
          <FAQDoodle />
          <h2 className="text-[18px] md:text-[22px] font-bold text-[#1C1C1B] mb-3 tracking-tight leading-tight">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-[12px] md:text-[13px] text-[#37352F]/50 font-medium leading-relaxed">
            Everything you need to know about <br /> Neko's community and safety.
          </p>
        </div>
        
        <div className="flex-1">
          <div className="space-y-0">
            <FAQItem 
              q="How does Neko work?" 
              a="Neko works by letting you post a detailed listing of your cat's specific needs. Verified local sitters apply directly, allowing you to choose the perfect match through our secure platform." 
            />
            <FAQItem 
              q="How are sitters verified?" 
              a="Our rigorous process includes identity verification, a personal interview, and mandatory home visits to ensure every sitter residence meets our high safety standards." 
            />
            <FAQItem 
              q="What if something happens to my cat?" 
              a="Every sitter follows your specific emergency protocol. We provide a 24/7 vet assistance line and advance any medical fees if needed, protected by our 1M€ safety guarantee." 
            />
            <FAQItem 
              q="Is the meet and greet mandatory?" 
              a="Yes, we strongly recommend it. It's free and allows you to see how your cat reacts to the sitter before confirming any booking." 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
