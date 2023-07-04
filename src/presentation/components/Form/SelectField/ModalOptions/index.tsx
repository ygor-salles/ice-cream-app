import { Modal, TouchableWithoutFeedback } from 'react-native';

import { Overlay, Description, Dialog, Header, Item, Title } from './styles';

interface ModalOptionProps {
  themeName: 'light' | 'dark';
  show: boolean;
  onClose: () => void;
}

export function ModalOption({ themeName, show, onClose }: ModalOptionProps) {
  return (
    <Modal visible={show} transparent onRequestClose={onClose}>
      <Overlay activeOpacity={1} onPress={onClose}>
        <TouchableWithoutFeedback>
          <Dialog>
            <Header>
              <Title onPress={onClose}>Título</Title>
            </Header>
            <Item themeName={themeName}>
              <Description themeName={themeName}>Item 1</Description>
            </Item>
            <Item themeName={themeName}>
              <Description themeName={themeName}>Item 1</Description>
            </Item>
            <Item themeName={themeName}>
              <Description themeName={themeName}>Item 1</Description>
            </Item>
            <Item themeName={themeName}>
              <Description themeName={themeName}>Item 1</Description>
            </Item>
            <Item themeName={themeName}>
              <Description themeName={themeName}>Item 1</Description>
            </Item>
            <Item themeName={themeName} lastItem>
              <Description themeName={themeName}>Item 1</Description>
            </Item>
          </Dialog>
        </TouchableWithoutFeedback>
      </Overlay>
    </Modal>
  );
}
