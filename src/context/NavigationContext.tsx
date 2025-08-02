import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { NavigationContextType, NavigationItem } from '../types/navigation.types';
import { useLocation } from 'react-router-dom';

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const defaultItems: NavigationItem[] = [
  { id: 'home', label: 'Home', path: '/', icon: '/images/img_mynauihome.svg' },
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: '/images/img_magedashboard.svg',
  },
  { id: 'calendar', label: 'Calendar', path: '/calendar', icon: '/images/img_image_8.png' },
  { id: 'profile', label: 'Profile', path: '/profile', icon: '/images/img_image_9.png' },
  { id: 'extra', label: 'Extra', path: '/extra', icon: '/images/img_image_9.png' },
];

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const items = useMemo(() => defaultItems, []);
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <NavigationContext.Provider value={{ items, activePath, setActivePath }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('useNavigation must be used within NavigationProvider');
  return ctx;
};
