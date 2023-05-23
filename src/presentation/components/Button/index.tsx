import { Touchable, Text } from './styles';
import { ButtonProps } from './types';

export function Button({ style, children, onPress }: ButtonProps) {
  return (
    <Touchable onPress={onPress} style={style}>
      <Text>{children}</Text>
    </Touchable>
  );
}
