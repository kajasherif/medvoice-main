import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  sidebarCollapsed?: boolean;
  onMobileMenuToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  sidebarCollapsed = false,
  onMobileMenuToggle
}) => {
  const navigate = useNavigate();

  // Get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    const dateOptions: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'long' 
    };
    const timeOptions: Intl.DateTimeFormatOptions = { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    };
    
    return {
      date: now.toLocaleDateString('en-US', dateOptions),
      time: now.toLocaleDateString('en-US', timeOptions)
    };
  };

  const { date, time } = getCurrentDateTime();

  return (
    <div className="fixed top-0 left-0 right-0 z-30 lg:relative lg:top-auto lg:left-auto lg:right-auto">
      <div className="bg-global-4 shadow-sm lg:rounded-lg mx-3 mt-3 lg:mx-0 lg:mt-0">
        <div className="flex items-center justify-between h-14 lg:h-16 px-4 lg:px-6">
          {/* Left Section */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Mobile Menu Button */}
            <button
              onClick={onMobileMenuToggle}
              className="lg:hidden w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Date and Time */}
            <div className="flex items-center gap-3 lg:gap-6">
              <span className="text-sm lg:text-base xl:text-lg font-raleway font-medium text-global-1 hidden sm:block">
                {date}
              </span>
              <span className="text-sm lg:text-base xl:text-lg font-raleway font-medium text-global-1">
                {time}
              </span>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Notifications - Hidden on mobile */}
            <button className="hidden sm:flex p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <img 
                src="/images/img_famiconsnotificationsoutline.svg" 
                alt="Notifications"
                className="w-5 h-5 lg:w-6 lg:h-6"
              />
            </button>
            
            {/* Settings - Hidden on mobile */}
            <button className="hidden sm:flex p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <img 
                src="/images/img_weuisettingoutlined.svg" 
                alt="Settings"
                className="w-5 h-5 lg:w-6 lg:h-6"
              />
            </button>
            
            {/* Divider - Hidden on mobile */}
            <div className="hidden sm:block w-px h-6 lg:h-8 bg-global-1 opacity-30"></div>
            
            {/* Profile Section */}
            <div className="flex items-center gap-2 lg:gap-3">
              <img 
                src="/images/img_ellipse_1.png" 
                alt="Profile"
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => navigate('/profile')}
              />
              
              {/* User Info - Hidden on small mobile */}
              <div className="hidden xs:flex flex-col min-w-0">
                <span className="text-sm lg:text-base font-raleway font-semibold text-global-1 truncate">
                  Dr. Jhon Doe
                </span>
                <span className="text-xs lg:text-sm font-raleway text-header-1 truncate">
                  Doctor
                </span>
              </div>
              
              {/* Logout */}
              <button className="p-1 lg:p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <img 
                  src="/images/img_iconoirlogout.svg" 
                  alt="Logout"
                  className="w-5 h-5 lg:w-6 lg:h-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;