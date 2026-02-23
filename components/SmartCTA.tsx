
import React, { useState, useRef, useEffect } from 'react';
import BookingDropdown from './BookingDropdown';

interface SmartCTAProps {
  onTrigger: () => void;
  onSearchStateChange?: (isOpen: boolean) => void;
}

const SmartCTA: React.FC<SmartCTAProps> = ({ onTrigger, onSearchStateChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState('');

  const handleDatesSelected = (start: string, end: string) => {
    setSelectedDates(`${start} → ${end}`);
  };

  const toggleSearch = (open: boolean) => {
    setIsOpen(open);
    if (onSearchStateChange) {
      onSearchStateChange(open);
    }
  };

  return (
    <div className="w-full relative">
      {!isOpen ? (
        <div 
          className="relative group cursor-pointer max-w-[540px]"
          onClick={() => toggleSearch(true)}
        >
          <div className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-[#37352F]/30 z-10 transition-colors group-hover:text-[#C25E72]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          
          <input
            type="text"
            readOnly
            value={selectedDates}
            placeholder={selectedDates || "When are you going away?"}
            className="w-full h-12 md:h-16 pl-14 md:pl-16 pr-8 rounded-xl md:rounded-2xl bg-white/95 backdrop-blur-xl border border-transparent text-[#1C1C1B] text-[13px] md:text-[15px] font-bold shadow-2xl group-hover:shadow-xl group-hover:border-[#C25E72]/20 outline-none transition-all placeholder:text-[#37352F]/30 cursor-pointer"
          />
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleSearch(true);
            }}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-[#1C1C1B] text-white px-6 py-2 md:py-3 rounded-xl text-[12px] md:text-[13px] font-bold hidden md:flex items-center gap-2 hover:bg-[#C25E72] transition-all shadow-lg active:scale-95"
          >
            Search
          </button>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleSearch(true);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#C25E72] rounded-xl flex md:hidden items-center justify-center text-white shadow-md active:scale-90"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      ) : (
        <BookingDropdown 
          onClose={() => toggleSearch(false)} 
          onDatesSelected={handleDatesSelected}
        />
      )}
    </div>
  );
};

export default SmartCTA;
