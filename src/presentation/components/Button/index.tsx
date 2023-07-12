import { StyleProp, TextStyle } from 'react-native';

import { useThemeContext } from '~hooks/useThemeContext';

import { Touchable, Text } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  themeButton?: string;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactElement;
  styleText?: StyleProp<TextStyle>;
  onPress: () => void;
}

export function Button({ children, themeButton, styleText, onPress, ...rest }: ButtonProps) {
  const { themeName } = useThemeContext();

  return (
    <Touchable onPress={onPress} themeName={themeName} themeButton={themeButton} {...rest}>
      <Text themeName={themeName} themeButton={themeButton} style={styleText}>
        {children}
      </Text>
    </Touchable>
  );
}
