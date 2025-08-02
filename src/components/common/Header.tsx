import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useResponsive } from '../../hooks/useResponsive';
import { useTheme } from '../../hooks/useTheme';

interface HeaderProps {
  onMenuToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex h-16 items-center justify-between bg-global-4 px-4 shadow md:px-6">
      {isMobile && (
        <button
          aria-label="Open menu"
          onClick={onMenuToggle}
          className="p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}
      <div className="flex items-center gap-2">
        <span className="text-header-1 font-raleway text-lg font-semibold">MedVoice</span>
      </div>
      <div className="flex items-center gap-4">
        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === 'dark' ? 'default' : 'dark')}
          className="p-2 hover:opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m8.66-13.66l-.7.7M4.04 19.96l-.7.7M21 12h-1M4 12H3m16.66 7.66l-.7-.7M4.04 4.04l-.7-.7M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
        <img
          src="/images/img_ellipse_1.png"
          alt="Profile"
          className="h-8 w-8 rounded-full cursor-pointer"
          onClick={() => navigate('/profile')}
        />
      </div>
    </header>
  );
};

export default Header;

