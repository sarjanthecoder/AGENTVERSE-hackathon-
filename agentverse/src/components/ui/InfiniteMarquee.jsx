import React from 'react';
import { cn } from '../../utils/cn';

export const InfiniteMarquee = ({ items, reverse = false, className }) => {
  return (
    <div className={cn("flex overflow-hidden w-full relative", className)}>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cyber-darker to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cyber-darker to-transparent z-10" />
      
      <div className={cn("flex min-w-full shrink-0 gap-16 py-4 px-8 items-center", reverse ? "animate-marquee-reverse" : "animate-marquee")}>
        {items.map((item, idx) => (
          <div key={idx} className="text-xl font-bold text-white/50 whitespace-nowrap">
            {item}
          </div>
        ))}
      </div>
      <div className={cn("flex min-w-full shrink-0 gap-16 py-4 px-8 items-center", reverse ? "animate-marquee-reverse" : "animate-marquee")} aria-hidden="true">
        {items.map((item, idx) => (
          <div key={`dup-${idx}`} className="text-xl font-bold text-white/50 whitespace-nowrap">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};