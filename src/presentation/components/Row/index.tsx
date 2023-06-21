import { ReactNode } from 'react';
import { GestureResponderEvent } from 'react-native';

import { SRow, SRowButton } from './styles';

interface RowProps {
  gap?: number;
  isButton?: boolean;
  children: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

export function Row({ gap, isButton, children, onPress, ...rest }: RowProps) {
  if (isButton) {
    return (
      <SRowButton gap={gap} onPress={onPress} {...rest}>
        {children}
      </SRowButton>
    );
  }

  return (
    <SRow gap={gap} {...rest}>
      {children}
    </SRow>
  );
}
