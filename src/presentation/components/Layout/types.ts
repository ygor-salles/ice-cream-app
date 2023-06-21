import { ReactNode } from 'react';

export interface LayoutProps {
  title: string;
  children: ReactNode;
  noScrollView?: boolean;
  noFooter?: boolean;
  renderRightHeader?: ReactNode;
  textButton?: string;
  renderLeftFooter?: ReactNode;
  renderRightFooter?: ReactNode;
  alignCenter?: boolean;
  renderFooter?: ReactNode;
  onToggleDrawer: () => void;
  onPress?: () => void;
}
