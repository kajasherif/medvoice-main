import React from 'react';

interface QuickAccessCardProps {
  title: string;
  image: string;
  background: string;
  gradient: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  printMode?: boolean;
}

const QuickAccessCard: React.FC<QuickAccessCardProps> = ({
  title,
  image,
  background,
  gradient,
  onClick,
  size = 'medium',
  className = '',
  printMode = false
}) => {
  const sizeClasses = {
    small: {
      container: 'h-20 sm:h-24',
      icon: 'w-6 h-6 sm:w-8 sm:h-8',
      text: 'text-xs sm:text-sm',
      padding: 'px-2 sm:px-3'
    },
    medium: {
      container: 'h-32 sm:h-36 md:h-40 lg:h-44',
      icon: 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14',
      text: 'text-sm sm:text-base md:text-lg lg:text-xl',
      padding: 'px-3 sm:px-4 md:px-6'
    },
    large: {
      container: 'h-40 sm:h-48 lg:h-56',
      icon: 'w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20',
      text: 'text-base sm:text-lg lg:text-xl xl:text-2xl',
      padding: 'px-4 sm:px-6 lg:px-8'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div
      onClick={onClick}
      className={`
        relative ${currentSize.container} rounded-lg cursor-pointer hover:opacity-90 hover:scale-105 
        transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden 
        bg-gradient-to-r ${gradient} ${className}
        ${printMode ? 'print:bg-blue-600 print:shadow-none' : ''}
      `}
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'soft-light',
          opacity: 0.3
        }}
      />
      
      {/* Content */}
      <div className={`relative z-10 flex flex-col items-center justify-center h-full text-center ${currentSize.padding}`}>
        <img 
          src={image} 
          alt={title}
          className={`${currentSize.icon} mb-2 sm:mb-3 flex-shrink-0`}
        />
        <h3 className={`${currentSize.text} font-raleway font-semibold leading-tight text-white`}>
          {title}
        </h3>
      </div>
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300 transform -skew-x-12 translate-x-full hover:translate-x-[-100%] transition-transform duration-700"></div>
    </div>
  );
};

export default QuickAccessCard;