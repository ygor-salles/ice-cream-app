import { ReactNode } from 'react';

import { SRow } from './styles';

interface RowProps {
  children: ReactNode
}

export function Row({ children, ...rest }: RowProps) {
  return (
    <SRow {...rest}>
      {children}
    </SRow>
  );
}
