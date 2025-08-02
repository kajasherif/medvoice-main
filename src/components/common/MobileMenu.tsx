import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../../hooks/useNavigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { items } = useNavigation();
  const navigate = useNavigate();

  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className={`absolute left-0 top-0 bottom-0 w-64 bg-sidebar-1 text-global-3 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="mt-16" role="navigation" aria-label="Mobile menu">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                navigate(item.path);
                onClose();
              }}
              className="w-full text-left px-6 py-3 hover:bg-global-2 focus:outline-none"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default React.memo(MobileMenu);
