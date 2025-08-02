export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon: string;
  active?: boolean;
  badge?: number;
  disabled?: boolean;
}

export interface NavigationContextType {
  items: NavigationItem[];
  activePath: string;
  setActivePath: (path: string) => void;
}
