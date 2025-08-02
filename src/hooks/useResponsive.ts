import { useEffect, useState } from 'react';

const MOBILE_MAX = 768;
const TABLET_MAX = 1024;

export const useResponsive = () => {
  const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : MOBILE_MAX);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return {
    width,
    isMobile: width < MOBILE_MAX,
    isTablet: width >= MOBILE_MAX && width < TABLET_MAX,
    isDesktop: width >= TABLET_MAX,
  };
};

