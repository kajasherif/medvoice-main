import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const menuItems = [
    { icon: '/images/img_mynauihome.svg', label: 'Home', path: '/' },
    { icon: '/images/img_magedashboard.svg', label: 'Dashboard', path: '/dashboard' },
    { icon: '/images/img_image_8.png', label: 'Calendar', path: '/calendar' },
    { icon: '/images/img_image_9.png', label: 'Profile', path: '/profile' },
    { icon: '/images/img_image_9.png', label: 'Extra', path: '/extra' },
    { icon: '/images/img_image_9.png', label: 'Extra', path: '/extra-2' },
    { icon: '/images/img_image_9.png', label: 'Extra', path: '/extra-3' },
  ];

  const activeClass = (path: string) =>
    location.pathname === path
      ? 'bg-global-4 text-global-1 font-medium'
      : 'hover:bg-global-2 text-global-3';

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={onClose}
      />
      {/* Sidebar content */}
      <nav
        className={`fixed top-0 left-0 z-50 w-[280px] h-full bg-sidebar-1 flex flex-col transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:block`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between mt-[37px] ml-[22px] mr-[27px]">
          <img src="/images/img_sidebarlogo.png" alt="Logo" className="w-[112px] h-[47px]" />
          <button
            className="w-[40px] h-[40px] bg-global-4 rounded-[20px] flex items-center justify-center shadow-sm cursor-pointer hover:opacity-80"
            onClick={onClose}
            aria-label="Collapse sidebar"
          >
            <img
              src="/images/img_materialsymbolslightarrowback.svg"
              alt="Collapse"
              className="w-[27px] h-[27px]"
            />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col mt-[66px] gap-[22px]">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(item.path);
                onClose();
              }}
              className={`flex items-center mx-[22px] px-[29px] py-[16px] rounded-[15px] cursor-pointer transition-all duration-200 ${activeClass(item.path)}`}
            >
              <img src={item.icon} alt={item.label} className="w-[27px] h-[27px] mr-[11px]" />
              <span className="text-[20px] font-raleway leading-[24px]">{item.label}</span>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
