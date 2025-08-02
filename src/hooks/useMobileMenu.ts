import { useState } from 'react';

export const useMobileMenu = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);
  return { open, openMenu, closeMenu };
};

