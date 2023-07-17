import { ReactNode } from 'react';
import { Modal } from 'react-native';

import { globalKeyFrames } from '~styles/constants';

import { Container, DialogAnimation, Overlay } from './styles';

interface DialogProps {
  children: ReactNode;
  show: boolean;
  onClose: () => void;
}

export function Dialog({ show, children, onClose }: DialogProps) {
  return (
    <Modal visible={show} animationType="fade" transparent>
      <Overlay onPress={onClose}>
        <DialogAnimation entering={globalKeyFrames.ENTER_TOP_SLOW}>
          <Container>{children}</Container>
        </DialogAnimation>
      </Overlay>
    </Modal>
  );
}
