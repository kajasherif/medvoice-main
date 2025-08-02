import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigation } from '../../hooks/useNavigation';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  const { items } = useNavigation();

  return (
    <div
      className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
      aria-hidden={!open}
    >
      <div
        className={`h-full w-64 bg-sidebar-1 text-global-3 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="mt-10">
          {items.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className="block px-4 py-3 hover:bg-global-2"
              onClick={onClose}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;

