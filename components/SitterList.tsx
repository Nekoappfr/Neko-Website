
import React from 'react';
import { MOCK_SITTERS, StarIcon, PinIcon, ShieldIcon } from '../constants';

interface SitterListProps {
  onSitterClick?: (id: string) => void;
}

const SitterList: React.FC<SitterListProps> = ({ onSitterClick }) => {
  return (
    <div className="w-full">
      <div className="horizontal-scroll-container no-scrollbar py-2 gap-2.5 md:gap-8 lg:gap-10">
        {MOCK_SITTERS.map((sitter) => (
          <div 
            key={sitter.id} 
            onClick={() => onSitterClick?.(sitter.id)}
            className="flex-shrink-0 snap-start w-[180px] md:w-[240px] flex flex-col group cursor-pointer"
          >
            
            <div className="flex items-center gap-1.5 mb-2 px-3 md:px-4">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#1C1C1B]/5 flex items-center justify-center border border-[#1C1C1B]/10">
                <ShieldIcon />
              </div>
              <span className="text-[11px] md:text-[12px] font-bold text-[#1C1C1B] tracking-tight truncate">
                {sitter.isVerified ? 'Verified Profile' : 'Neighbor'}
              </span>
            </div>

            <div className="relative w-full h-[180px] md:h-[260px] rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 bg-[#F0F0EF] mb-3">
              <img 
                src={sitter.image} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out grayscale-[0.2] group-hover:grayscale-0" 
                alt={sitter.name} 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90"></div>
              
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-10 flex items-center justify-between gap-1.5">
                <h3 className="text-[14px] md:text-[15px] font-semibold text-white leading-[1.333] tracking-tighter truncate flex-1 drop-shadow-md">
                  {sitter.name}
                </h3>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-lg flex-shrink-0 border border-white/20">
                  <StarIcon />
                  <span className="text-[12px] font-semibold text-white leading-[1.33]">{sitter.rating}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col px-3 md:px-4 space-y-2">
              <div>
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-[#222222] text-[14px] font-bold leading-[1.5] tracking-tight flex items-center gap-1 truncate">
                    <PinIcon /> {sitter.location}
                  </span>
                  <span className="text-[#222222] text-[14px] font-semibold">
                    {sitter.priceFrom}€
                  </span>
                </div>
                <p className="text-[#717171] text-[13px] font-normal leading-tight italic line-clamp-2">
                  "{sitter.review.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-2 pt-2 border-t border-[#F3F3F2]">
                <div className="flex -space-x-1.5">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=rev${sitter.id}${i}`} className="w-4 h-4 rounded-full border border-white shadow-sm" />
                  ))}
                </div>
                <span className="text-[12px] font-semibold text-[#717171] leading-[1.33] uppercase tracking-wider">
                  {sitter.totalBookings} reviews
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="min-w-[20px] md:min-w-[60px] h-full flex-shrink-0"></div>
      </div>
    </div>
  );
};

export default SitterList;
