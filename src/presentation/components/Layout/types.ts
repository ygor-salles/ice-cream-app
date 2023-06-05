import { ReactNode } from 'react';

export interface LayoutProps {
  title: string;
  children: React.ReactNode;
  noScrollView?: boolean;
  noFooter?: boolean;
  renderRightHeader?: ReactNode;
  textButton?: string;
  renderLeftFooter?: ReactNode;
  renderRightFooter?: ReactNode;
  onToggleSidebar: () => void;
  onPress?: () => void;
}
