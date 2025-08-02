import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between h-16 bg-global-4 px-4 shadow-md fixed top-0 left-0 right-0 lg:left-[280px] z-30">
      <div className="flex items-center gap-4">
        <button className="lg:hidden" onClick={onMenuClick} aria-label="Open sidebar">
          <img
            src="/images/img_materialsymbolslightarrowback.svg"
            alt="menu"
            className="w-6 h-6 rotate-180"
          />
        </button>
        <span className="hidden md:block text-[19px] font-raleway font-medium leading-[23px] text-global-1">
          Thu, 3 April
        </span>
        <span className="hidden md:block text-[19px] font-raleway font-medium leading-[23px] text-global-1">
          4:34 pm
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="w-8 h-8 rounded-full bg-button-1 text-global-3 flex items-center justify-center"
          aria-label="Toggle theme"
        >
          🌓
        </button>
        <img
          src="/images/img_ellipse_1.png"
          alt="Profile"
          className="w-[42px] h-[42px] rounded-[21px] cursor-pointer"
          onClick={() => navigate('/profile')}
        />

        <div className="hidden sm:flex flex-col">
          <span className="text-[16px] font-raleway font-semibold leading-[19px] text-global-1">
            Dr. Jhon Doe
          </span>
          <span className="text-[14px] font-raleway font-normal leading-[17px] text-header-1">
            Doctor
          </span>
        </div>

        <div className="w-[1px] h-[34px] bg-global-1 opacity-30" />

        <img
          src="/images/img_famiconsnotificationsoutline.svg"
          alt="Notifications"
          className="w-[31px] h-[31px] cursor-pointer hover:opacity-80"
        />

        <img
          src="/images/img_weuisettingoutlined.svg"
          alt="Settings"
          className="w-[31px] h-[31px] cursor-pointer hover:opacity-80"
        />

        <img
          src="/images/img_iconoirlogout.svg"
          alt="Logout"
          className="w-[28px] h-[28px] cursor-pointer hover:opacity-80"
        />
      </div>
    </header>
  );
};

export default Header;
