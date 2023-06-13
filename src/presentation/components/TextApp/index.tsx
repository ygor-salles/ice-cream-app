import { ReactNode } from 'react';

import { useThemeContext } from '@hooks/index';

import { SText } from './styles';

interface TextAppProps {
  children: ReactNode;
}

export function TextApp({ children, ...rest }: TextAppProps) {
  const { themeName } = useThemeContext();

  return (
    <SText themeName={themeName} {...rest}>
      {children}
    </SText>
  );
}
