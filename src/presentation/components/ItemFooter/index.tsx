import { GestureResponderEvent } from 'react-native';

import { IconName } from '~types/index';

import { Column } from '../Column';
import { TextFoot, Icon } from './styles';

interface ItemFooterProps {
  text: string;
  iconName: IconName;
  onPress: (event: GestureResponderEvent) => void;
}

export function ItemFooter({ text, iconName, onPress }: ItemFooterProps) {
  return (
    <Column isButton onPress={onPress}>
      <Icon name={iconName} />
      <TextFoot>{text}</TextFoot>
    </Column>
  );
}
