import { ReactNode } from 'react';

import { SRow } from './styles';

interface RowProps {
  gap?: number;
  children: ReactNode;
}

export function Row({ gap, children, ...rest }: RowProps) {
  return (
    <SRow gap={gap} {...rest}>
      {children}
    </SRow>
  );
}
