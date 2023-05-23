import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface ButtonProps {
  children: React.ReactNode;
  theme?: string;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactElement;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  onPress: () => void;
}
