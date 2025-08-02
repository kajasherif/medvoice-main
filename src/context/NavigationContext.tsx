import React, { createContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { NavigationItem } from '../types/navigation.types';

interface NavigationContextType {
  items: NavigationItem[];
  activePath: string;
}

export const NavigationContext = createContext<NavigationContextType>({
  items: [],
  activePath: '/',
});

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const items = useMemo<NavigationItem[]>(
    () => [
      { id: 'home', label: 'Home', path: '/', icon: '/images/img_mynauihome.svg' },
      { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: '/images/img_magedashboard.svg' },
      { id: 'calendar', label: 'Calendar', path: '/calendar', icon: '/images/img_image_8.png' },
      { id: 'profile', label: 'Profile', path: '/profile', icon: '/images/img_image_9.png' },
      { id: 'extra', label: 'Extra', path: '/extra', icon: '/images/img_image_9.png' },
    ],
    [],
  );

  return (
    <NavigationContext.Provider value={{ items, activePath: location.pathname }}>
      {children}
    </NavigationContext.Provider>
  );
};

