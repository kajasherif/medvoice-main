import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showHeader?: boolean;
  showSidebar?: boolean;
  showBottomNav?: boolean;
}

