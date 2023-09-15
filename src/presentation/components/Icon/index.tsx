import { GestureResponderEvent } from 'react-native';

import { IconName } from '~types/index';

import { SFeather } from './styles';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export function Icon({ name, size = 24, color, onPress, ...rest }: IconProps) {
  return <SFeather name={name} size={size} color={color} onPress={onPress} {...rest} />;
}
