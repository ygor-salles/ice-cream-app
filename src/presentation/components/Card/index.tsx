import { ReactNode } from 'react';

import { useThemeContext } from '~hooks/useThemeContext';

import { Container } from './styles';

interface CardProps {
  children: ReactNode;
  bgColor?: string;
}

export function Card({ children, bgColor, ...rest }: CardProps) {
  const { themeName } = useThemeContext();

  return (
    <Container themeName={themeName} bgColor={bgColor} {...rest}>
      {children}
    </Container>
  );
}
