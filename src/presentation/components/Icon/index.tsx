import { GestureResponderEvent } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { SFeather } from './styles';

interface IconProps {
  name: keyof typeof Feather.glyphMap;
  size?: number;
  color?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export function Icon({ name, size = 24, color, onPress, ...rest }: IconProps) {
  return <SFeather name={name} size={size} color={color} onPress={onPress} {...rest} />;
}
