import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useNavigation } from '../../hooks/useNavigation';
import { useResponsive } from '../../hooks/useResponsive';

const Sidebar: React.FC = () => {
  const { items } = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useResponsive();
  const [collapsed, setCollapsed] = useState(false);

  if (isMobile) return null;

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-sidebar-1 text-global-3 transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-72'
      }`}
      aria-label="Sidebar"
    >
      <div className="flex items-center justify-between h-16 px-4">
        <img src="/images/img_sidebarlogo.png" alt="Logo" className="h-8" />
        <button
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Collapse sidebar"
          className="p-2 rounded hover:bg-global-2 focus:outline-none"
        >
          <svg
            className={`w-5 h-5 text-global-3 transition-transform ${collapsed ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <nav className="mt-4" role="navigation" aria-label="Main menu">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`flex items-center w-full px-4 py-3 text-left rounded transition-colors focus:outline-none ${
              location.pathname === item.path ? 'bg-global-4 text-global-1' : 'hover:bg-global-2'
            }`}
            aria-current={location.pathname === item.path ? 'page' : undefined}
          >
            <img src={item.icon} alt="" className="w-6 h-6 mr-3" />
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default React.memo(Sidebar);
