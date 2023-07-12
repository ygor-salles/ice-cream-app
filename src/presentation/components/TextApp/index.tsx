import { ReactNode } from 'react';

import { SText } from './styles';

interface TextAppProps {
  children: ReactNode;
}

export function TextApp({ children, ...rest }: TextAppProps) {
  return <SText {...rest}>{children}</SText>;
}
