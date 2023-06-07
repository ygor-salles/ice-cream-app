import { ReactNode } from 'react';

import { SColumn } from './styles';

interface ColumnProps {
  gap?: number;
  children: ReactNode;
}

export function Column({ gap, children, ...rest }: ColumnProps) {
  return (
    <SColumn gap={gap} {...rest}>
      {children}
    </SColumn>
  );
}
