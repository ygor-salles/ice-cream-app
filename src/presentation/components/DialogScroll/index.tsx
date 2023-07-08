import { ReactElement, ReactNode } from 'react';
import { Modal } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useThemeContext } from '~hooks/useThemeContext';
import { colors, globalKeyFrames } from '~styles/constants';

import { Container, Dialog, Header, Overlay, Scroll, Title } from './styles';

interface DialogScrollProps {
  show: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  noHeader?: boolean;
  headerElement: ReactElement;
}

export function DialogScroll({
  children,
  title,
  noHeader,
  headerElement,
  show,
  onClose,
}: DialogScrollProps) {
  const { themeName } = useThemeContext();

  return (
    <Modal visible={show} animationType="fade" transparent onRequestClose={onClose}>
      <Container>
        <Overlay activeOpacity={1} onPress={onClose} />
        <Dialog
          noHeader={noHeader}
          entering={globalKeyFrames.ENTER_TOP_SLOW}
          exiting={globalKeyFrames.EXIT_BOTTOM_SLOW}
        >
          {noHeader ? (
            headerElement
          ) : (
            <Header>
              <Title>{title}</Title>
              <Feather name="x" size={22} color={colors.WHITE} onPress={onClose} />
            </Header>
          )}
          <Scroll themeName={themeName}>{children}</Scroll>
        </Dialog>
      </Container>
    </Modal>
  );
}
