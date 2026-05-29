import React from 'react';
import { cn } from '../../utils/cn';

export const GlassCard = ({ children, className, hover = true, ...props }) => {
  return (
    <div
      className={cn(
        "glass-panel rounded-3xl p-6 transition-all duration-300",
        hover && "glass-panel-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};