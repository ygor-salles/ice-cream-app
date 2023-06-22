import { GestureResponderEvent } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { colors } from '~styles/constants';
import { IconName } from '~types/index';

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
