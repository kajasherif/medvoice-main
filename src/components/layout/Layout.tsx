import React from 'react';
import { LayoutProps } from '../../types/layout.types';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import BottomNavigation from '../common/BottomNavigation';
import MobileMenu from '../common/MobileMenu';
import { useResponsive } from '../../hooks/useResponsive';
import { useMobileMenu } from '../../hooks/useMobileMenu';

const Layout: React.FC<LayoutProps> = ({
  children,
  showHeader = true,
  showSidebar = true,
  showBottomNav = true,
}) => {
  const { isMobile, isDesktop } = useResponsive();
  const mobileMenu = useMobileMenu();

  return (
    <div className="flex min-h-screen bg-global-3">
      {showSidebar && isDesktop && <Sidebar />}
      <div className="flex-1 flex flex-col min-h-screen">
        {showHeader && <Header onMenuToggle={mobileMenu.toggle} />}
        <main className="flex-1 overflow-y-auto mt-16 md:mt-0 p-4">{children}</main>
        {showBottomNav && isMobile && <BottomNavigation />}
      </div>
      <MobileMenu isOpen={mobileMenu.isOpen} onClose={mobileMenu.close} />
    </div>
  );
};

export default Layout;
