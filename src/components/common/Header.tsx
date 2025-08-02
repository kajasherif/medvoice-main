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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'default' : 'dark');
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-20 bg-global-4 h-16 flex items-center justify-between px-4 shadow md:pl-72"
      role="banner"
    >
      {isMobile && (
        <button
          onClick={onMenuToggle}
          className="p-2 rounded focus:outline-none focus:ring"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}
      <h1 className="text-lg font-raleway font-medium text-global-1">MedVoice</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-8 h-8 flex items-center justify-center rounded hover:opacity-80"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m8.66-9H21m-17 0H3m15.36 6.36l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l.7-.7M6.34 17.66l.7-.7M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
        <img
          src="/images/img_ellipse_1.png"
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer"
          onClick={() => navigate('/profile')}
        />
      </div>
    </header>
  );
};

export default React.memo(Header);
