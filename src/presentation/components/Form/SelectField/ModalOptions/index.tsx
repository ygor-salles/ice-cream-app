import { Modal } from 'react-native';

import { Container, Description, Dialog, Header, Item, Title } from './styles';

interface ModalOptionProps {
  themeName: 'light' | 'dark';
  show: boolean;
  onClose: () => void;
}

export function ModalOption({ themeName, show, onClose }: ModalOptionProps) {
  return (
    <Modal visible={show} transparent onRequestClose={onClose}>
      <Container>
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
          <Item themeName={themeName} lastItem>
            <Description themeName={themeName}>Item 1</Description>
          </Item>
        </Dialog>
      </Container>
    </Modal>
  );
}
