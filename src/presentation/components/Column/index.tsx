import { ReactNode } from 'react';
import { GestureResponderEvent } from 'react-native';

import { SColumn, SColumnButton } from './styles';

interface ColumnProps {
  gap?: number;
  isButton?: boolean;
  children: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

export function Column({ gap, children, isButton, onPress, ...rest }: ColumnProps) {
  if (isButton) {
    return (
      <SColumnButton gap={gap} onPress={onPress} {...rest}>
        {children}
      </SColumnButton>
    );
  }

  return (
    <SColumn gap={gap} {...rest}>
      {children}
    </SColumn>
  );
}
