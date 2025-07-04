import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  loading = false,
  onClick,
  className = '',
  type = 'button'
}) => {
  const baseClasses = "font-bold rounded-full transition-all duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-[#F07167] to-[#FED9B7] text-white hover:shadow-lg focus:ring-[#F07167]/50",
    secondary: "bg-gradient-to-r from-[#00AFB9] to-[#0081A7] text-white hover:shadow-lg focus:ring-[#00AFB9]/50",
    outline: "border-2 border-[#00AFB9] text-[#00AFB9] hover:bg-[#00AFB9] hover:text-white focus:ring-[#00AFB9]/50",
    ghost: "text-[#0081A7] hover:bg-[#0081A7]/10 focus:ring-[#0081A7]/50"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const disabledClasses = disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  return (
    <motion.button
      whileHover={!disabled && !loading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
      type={type}
      onClick={!disabled && !loading ? onClick : undefined}
      className={classes}
      disabled={disabled || loading}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      
      {Icon && iconPosition === 'left' && !loading && (
        <Icon className="w-5 h-5" />
      )}
      
      <span>{children}</span>
      
      {Icon && iconPosition === 'right' && !loading && (
        <Icon className="w-5 h-5" />
      )}
    </motion.button>
  );
};

export default Button;