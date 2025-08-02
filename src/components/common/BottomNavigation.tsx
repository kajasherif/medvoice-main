import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigation } from '../../hooks/useNavigation';

const BottomNavigation: React.FC = () => {
  const { items, activePath } = useNavigation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around bg-global-4 border-t md:hidden">
      {items.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className="flex flex-col items-center p-2"
        >
          <img src={item.icon} alt="" className="w-6 h-6" />
          <span
            className={`text-xs ${
              activePath === item.path ? 'text-header-1' : 'text-global-2'
            }`}
          >
            {item.label}
          </span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNavigation;

