import { ReactNode } from 'react';

export interface LayoutProps {
  title: string;
  children: React.ReactNode;
  noScrollView?: boolean;
  noFooter?: boolean;
  renderRightHeader?: ReactNode;
  onPress?: () => void;
  textButton?: string;
  renderLeftFooter?: ReactNode;
  renderRightFooter?: ReactNode;
}
