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
  alignCenter?: boolean;
  onToggleDrawer: () => void;
  onPress?: () => void;
}
