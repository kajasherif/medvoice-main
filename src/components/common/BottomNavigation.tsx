import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useNavigation } from '../../hooks/useNavigation';

const BottomNavigation: React.FC = () => {
  const { items } = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-global-4 border-t border-global-1 md:hidden"
      role="navigation"
      aria-label="Bottom navigation"
    >
      <ul className="flex justify-around">
        {items.map((item) => (
          <li key={item.id} className="flex-1">
            <button
              onClick={() => navigate(item.path)}
              className={`w-full flex flex-col items-center py-2 focus:outline-none ${location.pathname === item.path ? 'text-header-1' : 'text-global-1'}`}
              aria-current={location.pathname === item.path ? 'page' : undefined}
            >
              <img src={item.icon} alt="" className="w-6 h-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default React.memo(BottomNavigation);
