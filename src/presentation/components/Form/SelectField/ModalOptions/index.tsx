import { Modal, ScrollView } from 'react-native';

import { globalKeyFrames } from '~styles/constants';
import { ThemeNameProps } from '~types/index';

import { Container, Overlay, Description, Dialog, Header, Item, Title, Scroll } from './styles';

interface ModalOptionProps extends ThemeNameProps {
  show: boolean;
  onClose: () => void;
}

// const array = [1];
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function ModalOption({ themeName, show, onClose }: ModalOptionProps) {
  return (
    <Modal visible={show} animationType="fade" transparent onRequestClose={onClose}>
      <Container>
        <Overlay activeOpacity={1} onPress={onClose} />
        <Dialog
          entering={globalKeyFrames.ENTER_TOP_SLOW}
          exiting={globalKeyFrames.EXIT_BOTTOM_SLOW}
        >
          <Header>
            <Title onPress={onClose}>Títuloooooo</Title>
          </Header>
          <Scroll>
            {array.map((item, index) => (
              <Item
                key={item.toString()}
                themeName={themeName}
                lastItem={index === array.length - 1}
                onPress={() => console.log('preess')}
              >
                <Description themeName={themeName}>Item 1</Description>
              </Item>
            ))}
          </Scroll>
        </Dialog>
      </Container>
    </Modal>
  );
}
