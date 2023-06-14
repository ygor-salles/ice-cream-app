import { ReactNode } from 'react';

import { useThemeContext } from '@hooks/useThemeContext';

import { Container } from './styles';

interface CardProps {
  children: ReactNode;
}

export function Card({ children, ...rest }: CardProps) {
  const { themeName } = useThemeContext();

  return (
    <Container themeName={themeName} {...rest}>
      {children}
    </Container>
  );
}
