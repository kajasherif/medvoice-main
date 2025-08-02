import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: '/images/img_mynauihome.svg', label: 'Home', path: '/' },
  { icon: '/images/img_magedashboard.svg', label: 'Dashboard', path: '/dashboard' },
  { icon: '/images/img_image_8.png', label: 'Calendar', path: '/calendar' },
  { icon: '/images/img_ellipse_1.png', label: 'Profile', path: '/profile' },
  { icon: '/images/img_image_9.png', label: 'Extra', path: '/extra' },
  { icon: '/images/img_image_9.png', label: 'Extra 2', path: '/extra-2' },
  { icon: '/images/img_image_9.png', label: 'Extra 3', path: '/extra-3' },
];

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/50 z-20 md:hidden ${open ? 'block' : 'hidden'}`}
        onClick={onClose}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-30 w-[280px] bg-sidebar-1 transform transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4">
          <img src="/images/img_sidebarlogo.png" alt="Logo" className="h-12" />
          <button className="text-global-3 md:hidden" onClick={onClose} aria-label="Close sidebar">
            ✕
          </button>
        </div>

        <nav className="mt-6 flex flex-col gap-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-global-3 text-[20px] font-raleway transition-colors
                ${isActive ? 'bg-global-4 text-global-1 rounded-[15px]' : 'hover:bg-global-2 rounded-[15px]'}`
              }
            >
              <img src={item.icon} alt="" className="w-[27px] h-[27px] mr-3" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
