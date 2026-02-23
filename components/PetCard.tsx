
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
      <div className="flex items-center justify-between w-full mb-1.5 px-0.5">
        <div className="flex items-center gap-1.5 truncate mr-1">
          <img 
            src={listing.ownerAvatars[0]} 
            className="w-4 h-4 md:w-5 md:h-5 rounded-full object-cover border border-[#E9E9E7] grayscale group-hover:grayscale-0 transition-all" 
            alt={listing.ownerName}
          />
          <span className="text-[10px] md:text-[12px] font-bold text-[#1C1C1B] tracking-tight truncate">
            {listing.ownerName}
          </span>
        </div>
        <div className="flex items-center gap-0.5 opacity-60">
          <StarIcon />
          <span className="text-[9px] md:text-[11px] font-bold text-[#1C1C1B]">{listing.rating.toFixed(1)}</span>
        </div>
      </div>

      <div className="relative w-full h-[150px] md:h-[240px] rounded-[20px] md:rounded-[32px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-700 bg-[#F5F5F4] mb-2.5">
        <img 
          src={listing.image} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-[3000ms] ease-out grayscale-[0.1] group-hover:grayscale-0" 
          alt={listing.petName} 
        />
        
        <div className="absolute top-2.5 left-2.5 z-10">
          <div className="px-1.5 py-0.5 bg-white/95 backdrop-blur-md border border-white/40 rounded-lg shadow-sm">
            <span className="text-[7px] md:text-[9px] font-bold text-[#1C1C1B] uppercase tracking-[0.05em] whitespace-nowrap">
              {getServiceLabel(listing.serviceType)}
            </span>
          </div>
        </div>

        {/* Overlay gradient plus sombre pour le texte blanc */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none"></div>
        
        <div className="absolute bottom-2.5 left-2.5 md:bottom-5 md:left-5 z-10">
          <h3 className="text-[16px] md:text-[22px] font-bold text-white leading-tight tracking-tighter drop-shadow-md">
            {listing.petName}
          </h3>
        </div>
      </div>

      <div className="flex flex-col px-0.5 space-y-1">
        <div className="flex items-center gap-1">
          <span className="text-[#1C1C1B] text-[11px] md:text-[14px] font-bold tracking-tight flex items-center gap-1 truncate">
            <PinIcon /> {listing.location}
          </span>
        </div>
        <div className="text-[#37352F]/50 text-[10px] md:text-[13px] font-medium tracking-tight leading-tight truncate">
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
              <div className="h-3.5 w-3.5 md:h-5 md:w-5 rounded-full ring-2 ring-white bg-[#F0F0EF] flex items-center justify-center text-[6px] md:text-[8px] font-bold text-[#1C1C1B]/40">
                +{listing.responsesCount - 4}
              </div>
            )}
          </div>
          <span className="text-[8px] md:text-[10px] font-bold text-[#37352F]/30 uppercase tracking-widest">
            {listing.responsesCount} applied
          </span>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
