import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col md:ml-[280px]">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Header onOpenSidebar={() => setSidebarOpen(true)} />
      <main className="flex-1 overflow-y-auto p-4 bg-global-3">{children}</main>
    </div>
  );
};

export default Layout;
