/* eslint-disable @typescript-eslint/no-explicit-any */
import { View } from 'react-native';

import { DialogScroll } from '~components/DialogScroll';
import { ThemeNameProps } from '~types/index';

import { Description, Divider, Item } from './styles';

interface ModalOptionProps extends ThemeNameProps {
  show: boolean;
  title: string;
  options: string[];
  onClose: () => void;
  onSelect: (item: string) => void;
}

export function ModalOption({
  themeName,
  title,
  show,
  options,
  onClose,
  onSelect,
}: ModalOptionProps) {
  return (
    <DialogScroll show={show} onClose={onClose} title={title}>
      {options.map((item, index) => (
        <View key={item}>
          <Item themeName={themeName} onPress={() => onSelect(item)}>
            <Description themeName={themeName}>{item}</Description>
          </Item>
          {index < options.length - 1 && <Divider />}
        </View>
      ))}
    </DialogScroll>
  );
}
