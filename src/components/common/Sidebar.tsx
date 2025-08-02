import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: '/images/img_mynauihome.svg', label: 'Home', path: '/', active: true },
    { icon: '/images/img_magedashboard.svg', label: 'Dashboard', path: '/dashboard', active: false },
    { icon: '/images/img_image_8.png', label: 'Calender', path: '/calendar', active: false },
    { icon: '/images/img_image_9.png', label: 'Profile', path: '/profile', active: false },
    { icon: '/images/img_image_9.png', label: 'Extra', path: '/extra', active: false },
    { icon: '/images/img_image_9.png', label: 'Extra', path: '/extra-2', active: false },
    { icon: '/images/img_image_9.png', label: 'Extra', path: '/extra-3', active: false }
  ];

  return (
    <div className="absolute top-0 left-0 w-[310px] h-[841px] bg-sidebar-1 flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center justify-between mt-[37px] ml-[22px] mr-[27px]">
        <img 
          src="/images/img_sidebarlogo.png" 
          alt="Logo"
          className="w-[112px] h-[47px]"
        />
        <div className="w-[40px] h-[40px] bg-global-4 rounded-[20px] flex items-center justify-center shadow-sm cursor-pointer hover:opacity-80">
          <img 
            src="/images/img_materialsymbolslightarrowback.svg" 
            alt="Collapse"
            className="w-[27px] h-[27px]"
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col mt-[66px] gap-[22px]">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className={`
              flex items-center mx-[22px] px-[29px] py-[16px] rounded-[15px] cursor-pointer transition-all duration-200
              ${item.active ? 'bg-global-4' : 'hover:bg-global-2'}
            `}
          >
            <img 
              src={item.icon} 
              alt={item.label}
              className="w-[27px] h-[27px] mr-[11px]"
            />
            <span className={`
              text-[20px] font-raleway leading-[24px]
              ${item.active ? 'font-medium text-global-1' : 'font-normal text-global-3'}
            `}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;