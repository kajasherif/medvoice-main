import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigation } from '../../hooks/useNavigation';
import { useResponsive } from '../../hooks/useResponsive';

const Sidebar: React.FC = () => {
  const { items, activePath } = useNavigation();
  const { isDesktop } = useResponsive();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`hidden bg-sidebar-1 text-global-3 transition-all duration-300 md:flex md:flex-col ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <img src="/images/img_sidebarlogo.png" alt="Logo" className="h-8" />
        {isDesktop && (
          <button
            aria-label="Collapse sidebar"
            onClick={() => setCollapsed((v) => !v)}
            className="p-2 hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
      </div>
      <nav className="flex-1">
        {items.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2 hover:bg-global-2 transition-colors ${
              activePath === item.path ? 'bg-global-2' : ''
            }`}
          >
            <img src={item.icon} alt="" className="h-5 w-5" />
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

