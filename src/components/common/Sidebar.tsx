import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isCollapsed?: boolean;
  onToggleCollapse?: (collapsed: boolean) => void;
  isMobile?: boolean;
  onMobileClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isCollapsed: externalCollapsed, 
  onToggleCollapse,
  isMobile = false,
  onMobileClose
}) => {
  const navigate = useNavigate();
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  
  // Use external state if provided, otherwise use internal state
  const isCollapsed = externalCollapsed !== undefined ? externalCollapsed : internalCollapsed;
  
  const handleToggleCollapse = () => {
    const newCollapsedState = !isCollapsed;
    if (onToggleCollapse) {
      onToggleCollapse(newCollapsedState);
    } else {
      setInternalCollapsed(newCollapsedState);
    }
  };

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    // Close mobile menu when item is clicked
    if (isMobile && onMobileClose) {
      onMobileClose();
    }
  };

  const menuItems = [
    { icon: '/images/img_mynauihome.svg', label: 'Home', path: '/', active: true },
    { icon: '/images/img_magedashboard.svg', label: 'Dashboard', path: '/dashboard', active: false },
    { icon: '/images/img_image_8.png', label: 'Calendar', path: '/calendar', active: false },
    { icon: '/images/img_image_9.png', label: 'Profile', path: '/profile', active: false },
    { icon: '/images/img_image_9.png', label: 'Consultations', path: '/consultations', active: false },
    { icon: '/images/img_image_9.png', label: 'Patients', path: '/patients', active: false },
    { icon: '/images/img_image_9.png', label: 'Reports', path: '/reports', active: false }
  ];

  return (
    <div 
      className={`
        h-full bg-sidebar-1 flex flex-col transition-all duration-300 ease-in-out
        ${isMobile ? 'w-64' : isCollapsed ? 'w-16 lg:w-20' : 'w-64 lg:w-72 xl:w-80'}
        ${isMobile ? 'min-h-screen' : 'min-h-screen lg:min-h-full'}
      `}
    >
      {/* Logo Section */}
      <div className={`
        flex items-center transition-all duration-300 py-4 px-4
        ${isCollapsed && !isMobile ? 'justify-center' : 'justify-between'}
      `}>
        {(!isCollapsed || isMobile) && (
          <div className="flex items-center">
            <img 
              src="/images/img_sidebarlogo.png" 
              alt="MedVoice Pro"
              className="w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12"
            />
            {/* <span className="ml-2 text-white font-raleway font-bold text-sm lg:text-base hidden sm:block">
              MedVoice Pro
            </span> */}
          </div>
        )}
        
        {/* Desktop Collapse Button */}
        {!isMobile && (
          <button 
            onClick={handleToggleCollapse}
            className="w-8 h-8 lg:w-10 lg:h-10 bg-global-4 rounded-full flex items-center justify-center shadow-sm hover:opacity-80 transition-all duration-200"
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <img 
              src="/images/img_materialsymbolslightarrowback.svg" 
              alt="Toggle Sidebar"
              className={`
                w-4 h-4 lg:w-6 lg:h-6 transition-transform duration-300
                ${isCollapsed ? 'rotate-180' : 'rotate-0'}
              `}
            />
          </button>
        )}

        {/* Mobile Close Button */}
        {isMobile && onMobileClose && (
          <button 
            onClick={onMobileClose}
            className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
            title="Close menu"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Collapsed Logo Text */}
      {isCollapsed && !isMobile && (
        <div className="text-global-3 font-raleway font-bold text-xs text-center mb-4 px-2">
          MVP
        </div>
      )}

      {/* Menu Items */}
      <div className={`flex flex-col gap-2 lg:gap-3 px-2 lg:px-4 ${isCollapsed && !isMobile ? 'mt-4' : 'mt-2'}`}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleMenuItemClick(item.path)}
            className={`
              flex items-center cursor-pointer transition-all duration-200 relative group rounded-lg
              ${isCollapsed && !isMobile
                ? 'px-2 py-3 justify-center' 
                : 'px-3 lg:px-4 py-3'
              }
              ${item.active ? 'bg-global-4 shadow-sm' : 'hover:bg-global-2 hover:bg-opacity-20'}
            `}
            title={isCollapsed && !isMobile ? item.label : ''}
          >
            <div className="flex-shrink-0">
              <img 
                src={item.icon} 
                alt={item.label}
                className={`
                  w-5 h-5 lg:w-6 lg:h-6 transition-all duration-200
                  ${isCollapsed && !isMobile ? '' : 'mr-3'}
                `}
              />
            </div>
            
            {(!isCollapsed || isMobile) && (
              <span className={`
                text-sm lg:text-base font-raleway leading-tight transition-all duration-200 truncate
                ${item.active ? 'font-medium text-global-1' : 'font-normal text-global-3'}
              `}>
                {item.label}
              </span>
            )}
            
            {/* Tooltip for collapsed state on desktop */}
            {isCollapsed && !isMobile && (
              <div className="absolute left-full ml-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                {item.label}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1 border-4 border-transparent border-r-gray-800"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-auto mb-4 px-2 lg:px-4">
        {(!isCollapsed || isMobile) && (
          <div className="text-center text-xs text-global-3 opacity-70">
            MedVoice Pro v1.0
          </div>
        )}
        
        {/* Settings and Logout */}
        <div className={`
          flex gap-2 mt-3
          ${isCollapsed && !isMobile ? 'justify-center' : 'justify-center'}
        `}>
          <button 
            className="p-2 rounded-lg hover:bg-global-2 hover:bg-opacity-20 transition-colors"
            title="Settings"
          >
            <img 
              src="/images/img_weuisettingoutlined.svg" 
              alt="Settings"
              className="w-5 h-5 lg:w-6 lg:h-6"
            />
          </button>
          
          <button 
            className="p-2 rounded-lg hover:bg-global-2 hover:bg-opacity-20 transition-colors"
            title="Logout"
          >
            <img 
              src="/images/img_iconoirlogout.svg" 
              alt="Logout"
              className="w-5 h-5 lg:w-6 lg:h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;