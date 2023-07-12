import { ReactNode } from 'react';

import { Container } from './styles';

interface CardProps {
  children: ReactNode;
  bgColor?: string;
}

export function Card({ children, bgColor, ...rest }: CardProps) {
  return (
    <Container bgColor={bgColor} {...rest}>
      {children}
    </Container>
  );
}
