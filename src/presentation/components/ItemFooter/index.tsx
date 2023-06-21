import { GestureResponderEvent } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { IconName } from 'presentation/types';

import { colors } from '@styles/constants';

import { Column } from '../Column';
import { TextFoot } from './styles';

interface ItemFooterProps {
  text: string;
  iconName: IconName;
  onPress: (event: GestureResponderEvent) => void;
}

export function ItemFooter({ text, iconName, onPress }: ItemFooterProps) {
  return (
    <Column isButton onPress={onPress}>
      <Feather name={iconName} size={24} color={colors.WHITE} />
      <TextFoot>{text}</TextFoot>
    </Column>
  );
}
