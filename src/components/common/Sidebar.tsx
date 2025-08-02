import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isCollapsed?: boolean;
  onToggleCollapse?: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isCollapsed: externalCollapsed, 
  onToggleCollapse 
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

  const menuItems = [
    { icon: '/images/img_mynauihome.svg', label: 'Home', path: '/', active: true },
    { icon: '/images/img_magedashboard.svg', label: 'Dashboard', path: '/dashboard', active: false },
    { icon: '/images/img_image_8.png', label: 'Calendar', path: '/calendar', active: false },
    { icon: '/images/img_image_9.png', label: 'Profile', path: '/profile', active: false },
    { icon: '/images/img_image_9.png', label: 'Extra', path: '/extra', active: false },
    { icon: '/images/img_image_9.png', label: 'Extra', path: '/extra-2', active: false },
    { icon: '/images/img_image_9.png', label: 'Extra', path: '/extra-3', active: false }
  ];

  return (
    <div 
      className={`
        absolute top-0 left-0 h-[841px] bg-sidebar-1 flex flex-col transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-[90px]' : 'w-[310px]'}
      `}
    >
      {/* Logo Section */}
      <div className={`
        flex items-center mt-[37px] transition-all duration-300
        ${isCollapsed ? 'justify-center mx-[20px]' : 'justify-between ml-[22px] mr-[27px]'}
      `}>
        {!isCollapsed && (
          <img 
            src="/images/img_sidebarlogo.png" 
            alt="Logo"
            className="w-[112px] h-[47px]"
          />
        )}
        
        <div 
          onClick={handleToggleCollapse}
          className="w-[40px] h-[40px] bg-global-4 rounded-[20px] flex items-center justify-center shadow-sm cursor-pointer hover:opacity-80 transition-all duration-200"
        >
          <img 
            src="/images/img_materialsymbolslightarrowback.svg" 
            alt="Toggle Sidebar"
            className={`
              w-[27px] h-[27px] transition-transform duration-300
              ${isCollapsed ? 'rotate-180' : 'rotate-0'}
            `}
          />
        </div>
      </div>

      {/* Collapsed Logo Text */}
      {isCollapsed && (
        <div className="text-global-3 font-raleway font-bold text-sm text-center mt-2 mb-4">
          LOGO
        </div>
      )}

      {/* Menu Items */}
      <div className={`flex flex-col gap-[22px] ${isCollapsed ? 'mt-[40px]' : 'mt-[66px]'}`}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className={`
              flex items-center cursor-pointer transition-all duration-200 relative group
              ${isCollapsed 
                ? 'mx-[20px] px-[12px] py-[16px] justify-center' 
                : 'mx-[22px] px-[29px] py-[16px]'
              }
              ${item.active ? 'bg-global-4 rounded-[15px]' : 'hover:bg-global-2 rounded-[15px]'}
            `}
            title={isCollapsed ? item.label : ''}
          >
            <img 
              src={item.icon} 
              alt={item.label}
              className={`
                w-[27px] h-[27px] transition-all duration-200
                ${isCollapsed ? '' : 'mr-[11px]'}
              `}
            />
            
            {!isCollapsed && (
              <span className={`
                text-[20px] font-raleway leading-[24px] transition-all duration-200
                ${item.active ? 'font-medium text-global-1' : 'font-normal text-global-3'}
              `}>
                {item.label}
              </span>
            )}
            
            {/* Tooltip for collapsed state */}
            {isCollapsed && (
              <div className="absolute left-full ml-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                {item.label}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1 border-4 border-transparent border-r-gray-800"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;