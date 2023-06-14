import { StyleProp, TextStyle } from 'react-native';

import { Touchable, Text } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  theme?: string;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactElement;
  styleText?: StyleProp<TextStyle>;
  onPress: () => void;
}

export function Button({ children, styleText, onPress, ...rest }: ButtonProps) {
  return (
    <Touchable onPress={onPress} {...rest}>
      <Text style={styleText}>{children}</Text>
    </Touchable>
  );
}
