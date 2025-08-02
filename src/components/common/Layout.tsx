import React from 'react';
import { LayoutProps } from '../../types/layout.types';
import Sidebar from './Sidebar';
import Header from './Header';
import BottomNavigation from './BottomNavigation';
import MobileMenu from './MobileMenu';
import { useResponsive } from '../../hooks/useResponsive';
import { useMobileMenu } from '../../hooks/useMobileMenu';

const Layout: React.FC<LayoutProps> = ({
  children,
  showHeader = true,
  showSidebar = true,
  showBottomNav = true,
}) => {
  const { isMobile } = useResponsive();
  const mobileMenu = useMobileMenu();

  return (
    <div className="flex min-h-screen bg-global-3">
      {showSidebar && !isMobile && <Sidebar />}
      <MobileMenu open={mobileMenu.open} onClose={mobileMenu.closeMenu} />
      <div className="flex flex-1 flex-col">
        {showHeader && <Header onMenuToggle={mobileMenu.openMenu} />}
        <main className="flex-1 p-4">{children}</main>
        {showBottomNav && isMobile && <BottomNavigation />}
      </div>
    </div>
  );
};

export default Layout;

