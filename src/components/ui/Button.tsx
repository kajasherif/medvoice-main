import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  className = '',
  fullWidth = false,
  type = 'button'
}) => {
  const variants = {
    primary: 'bg-button-1 text-global-3 hover:opacity-90 focus:ring-blue-500 active:bg-blue-700',
    secondary: 'bg-global-4 text-global-1 hover:bg-global-3 focus:ring-gray-500 border border-gray-300',
    outline: 'bg-transparent text-button-1 border border-button-1 hover:bg-button-1 hover:text-white focus:ring-blue-500'
  };

  const sizes = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm lg:text-base',
    lg: 'px-6 py-3 text-base lg:text-lg',
    xl: 'px-8 py-4 text-lg lg:text-xl'
  };

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        rounded-md font-raleway font-semibold transition-all duration-200 
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;