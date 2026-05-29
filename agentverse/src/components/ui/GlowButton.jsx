import React from 'react';
import { cn } from '../../utils/cn';

export const GlowButton = ({ 
  children, 
  variant = 'primary', 
  className, 
  as: Component = 'button',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 font-bold uppercase tracking-wide transition-all duration-300 text-sm";
  
  const variants = {
    primary: "bg-neon-sky/10 text-neon-sky border border-neon-sky/50 hover:bg-neon-sky hover:text-cyber-darker hover:shadow-[0_0_20px_rgba(0,200,255,0.4)]",
    secondary: "bg-transparent text-white border border-white/20 hover:border-neon-sky/50 hover:text-neon-sky",
  };

  return (
    <Component 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};