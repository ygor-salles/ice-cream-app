import { GestureResponderEvent } from 'react-native';

import { Feather } from '@expo/vector-icons';

interface IconProps {
  name: keyof typeof Feather.glyphMap;
  size?: number;
  color?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export function Icon({ name, size = 24, color, onPress, ...rest }: IconProps) {
  return <Feather name={name} size={size} color={color} onPress={onPress} {...rest} />;
}
