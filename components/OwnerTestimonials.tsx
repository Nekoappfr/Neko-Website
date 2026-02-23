import React from 'react';

const QuoteDoodle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10 mb-4 group-hover:opacity-30 transition-opacity">
    <path d="M8 10C8 10 7 12 7 14M16 10C16 10 15 12 15 14" stroke="#1C1C1B" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="6" cy="10" r="4" stroke="#1C1C1B" strokeWidth="1.2" strokeDasharray="2 2" />
    <circle cx="18" cy="10" r="4" stroke="#1C1C1B" strokeWidth="1.2" strokeDasharray="2 2" />
  </svg>
);

const HeartDoodle = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="30" width="40" height="45" rx="4" stroke="#1C1C1B" strokeWidth="1.2" strokeDasharray="3 3" />
    <path d="M30 75V85L45 75" stroke="#1C1C1B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 50C40 47 43 45 45 45C47 45 50 47 50 50C50 55 40 60 40 60C40 60 30 55 30 50C30 47 33 45 35 45C37 45 40 47 40 50Z" fill="#C25E72" fillOpacity="0.05" stroke="#C25E72" strokeWidth="1.2" strokeOpacity="0.3" />
    <path d="M35 55L37 57L45 53" stroke="#1C1C1B" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
  </svg>
);

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Neko changed how I travel. Knowing Luna is with a neighbor who truly cares makes all the difference.",
    author: "Sarah L.",
    cat: "Luna",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    quote: "Found the perfect sitter in 5 minutes. The meet & greet was so reassuring for my anxious Charlie.",
    author: "Thomas D.",
    cat: "Charlie",
    avatar: "https://i.pravatar.cc/150?u=thomas"
  },
  {
    id: 3,
    quote: "Professional, safe and so easy. My cat Oscar was so relaxed when I came back home.",
    author: "Elena R.",
    cat: "Oscar",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    id: 4,
    quote: "The best community in Paris. Verified neighbors who are actual cat lovers, not just sitters.",
    author: "Marc A.",
    cat: "Max",
    avatar: "https://i.pravatar.cc/150?u=marc"
  }
];

const OwnerTestimonials: React.FC = () => {
  return (
    <div className="space-y-32 py-8">
      {/* Minimalist Testimonials Section */}
      <div className="flex flex-col">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[20px] md:text-[24px] font-bold text-[#1C1C1B] tracking-tight">
            What the community says
          </h2>
          <div className="h-[1px] flex-1 bg-[#E9E9E7] opacity-50"></div>
        </div>
        
        <div className="horizontal-scroll-container no-scrollbar -mx-6 px-6 gap-12 md:gap-16">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="flex-shrink-0 w-[240px] md:w-[300px] flex flex-col group transition-all"
            >
              <div className="flex-1">
                <QuoteDoodle />
                <p className="text-[13px] md:text-[14px] italic text-[#37352F] font-medium leading-relaxed mb-6 group-hover:text-[#1C1C1B] transition-colors">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-3 pt-6 border-t border-[#F3F3F2]/50">
                <img 
                  src={t.avatar} 
                  className="w-8 h-8 rounded-full border border-[#E9E9E7] object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                  alt={t.author} 
                />
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-[#1C1C1B]">{t.author}</span>
                  <span className="text-[10px] font-bold text-[#37352F]/30 uppercase tracking-widest">Owner of {t.cat}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="min-w-[10px] md:min-w-[40px] h-full flex-shrink-0"></div>
        </div>
      </div>

      {/* Advisor Section Style */}
      <div className="pt-12">
        <h2 className="text-[20px] md:text-[24px] font-bold text-[#1C1C1B] mb-12 tracking-tight">
          Still have a question?
        </h2>
        
        <div className="flex items-start gap-10">
          <div className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <HeartDoodle />
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-[15px] md:text-[17px] text-[#37352F] font-medium leading-relaxed max-w-[480px]">
              Our team responds within a few hours. <br className="hidden md:block" />
              We're real people.
            </p>
            <button className="bg-white border border-[#E9E9E7] hover:border-[#1C1C1B] text-[#1C1C1B] text-[13px] font-bold px-8 py-2.5 rounded-full transition-all active:scale-95 shadow-sm">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerTestimonials;