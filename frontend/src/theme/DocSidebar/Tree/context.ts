import {createContext, useContext} from 'react';
import type {PropSidebarItem} from '@docusaurus/plugin-content-docs';

export type SidebarContextValue = {
  activePath: string;
  filter: string;
  onToggle: (id: string) => void;
  onItemClick?: (item: PropSidebarItem) => void;
  registerLink: (id: string, element: HTMLAnchorElement | null) => void;
};

export const SidebarContext = createContext<SidebarContextValue | null>(null);

export function useSidebarContext(): SidebarContextValue {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('SidebarContext is missing');
  }
  return context;
}
