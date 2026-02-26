
import React from 'react';
import { PetListing } from '../types';
import { PinIcon, StarIcon } from '../constants';

interface PetCardProps {
  listing: PetListing;
}

const PetCard: React.FC<PetCardProps> = ({ listing }) => {
  const getServiceLabel = (type: string) => {
    switch (type) {
      case 'BOARDING': return 'boarding';
      case 'house sitting': return 'house sitting';
      case 'drop in visits': return 'visits';
      default: return type.toLowerCase();
    }
  };

  const applicantAvatars = Array.from({ length: Math.min(listing.responsesCount, 4) }, (_, i) => 
    `https://i.pravatar.cc/150?u=applicant${listing.id}${i}`
  );

  return (
    <div className="flex-shrink-0 snap-start w-[150px] md:w-[220px] flex flex-col group cursor-pointer">
      <div className="relative w-full h-[150px] md:h-[240px] rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-700 bg-[#F5F5F4] mb-2.5">
        <img 
          src={listing.image} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-[3000ms] ease-out grayscale-[0.1] group-hover:grayscale-0" 
          alt={listing.petName} 
        />
        
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          <div className="px-2 py-1 bg-white/60 backdrop-blur-md border border-white/40 rounded-lg shadow-sm w-fit">
            <span className="text-[7px] md:text-[9px] font-bold text-[#1C1C1B] uppercase tracking-[0.05em] whitespace-nowrap">
              {getServiceLabel(listing.serviceType)}
            </span>
          </div>
          
          <div className="flex items-center gap-1.5 truncate">
            <img 
              src={listing.ownerAvatars[0]} 
              className="w-4 h-4 md:w-5 md:h-5 rounded-full object-cover border border-white/40 shadow-sm" 
              alt={listing.ownerName}
            />
            <span className="text-[11px] md:text-[12px] font-semibold text-white tracking-tight truncate drop-shadow-md">
              {listing.ownerName}
            </span>
          </div>
        </div>

        {/* Overlay gradient plus sombre pour le texte blanc */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none"></div>
        
        <div className="absolute bottom-2.5 left-2.5 md:bottom-5 md:left-5 z-10 flex items-center justify-between w-[calc(100%-20px)] md:w-[calc(100%-40px)]">
          <h3 className="text-[14px] md:text-[15px] font-semibold text-white leading-[1.333] tracking-tighter drop-shadow-md">
            {listing.petName}
          </h3>
          <div className="flex items-center gap-0.5 text-white/90">
            <StarIcon />
            <span className="text-[11px] md:text-[12px] font-semibold leading-[1.33]">{listing.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-3 md:px-4 space-y-1">
        <div className="flex items-center gap-1">
          <span className="text-[#222222] text-[14px] font-bold leading-[1.5] tracking-tight flex items-center gap-1 truncate">
            <PinIcon /> {listing.location}
          </span>
        </div>
        <div className="text-[#717171] text-[13px] font-bold tracking-tight leading-tight truncate">
          {listing.startDate.split('2026')[0]}
        </div>
        
        <div className="flex items-center justify-between pt-1.5 border-t border-[#F3F3F2]">
          <div className="flex -space-x-1.5 overflow-hidden">
            {applicantAvatars.map((avatar, i) => (
              <img 
                key={i}
                src={avatar} 
                className="inline-block h-3.5 w-3.5 md:h-5 md:w-5 rounded-full ring-2 ring-white object-cover grayscale-[0.5]" 
                alt="applicant" 
              />
            ))}
            {listing.responsesCount > 4 && (
              <div className="h-3.5 w-3.5 md:h-5 md:w-5 rounded-full ring-2 ring-white bg-[#F0F0EF] flex items-center justify-center text-[12px] font-semibold text-[#717171] leading-[1.33]">
                +{listing.responsesCount - 4}
              </div>
            )}
          </div>
          <span className="text-[12px] font-semibold text-[#717171] leading-[1.33] uppercase tracking-widest">
            {listing.responsesCount} applied
          </span>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
