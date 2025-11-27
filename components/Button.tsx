import React from 'react';
import { COLORS } from '../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  href,
  ...props 
}) => {
  // Added cursor-pointer to ensure hover state is obvious
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-base font-medium transition-all duration-300 rounded-full focus:outline-none shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 tracking-wide cursor-pointer";
  
  const variants = {
    // Primary: Standard Red
    primary: `bg-[${COLORS.primaryRed}] text-white hover:bg-[${COLORS.darkRed}] border border-transparent`,
    // Secondary: Darker Red as requested for Secondary CTAs
    secondary: `bg-[${COLORS.darkRed}] text-white hover:bg-[${COLORS.primaryRed}] border border-transparent`,
    // Outline: Gold border
    outline: `bg-transparent border-2 border-[${COLORS.gold}] text-[${COLORS.gold}] hover:bg-[${COLORS.gold}] hover:text-white`,
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;