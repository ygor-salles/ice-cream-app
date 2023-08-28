import { Modal, View } from 'react-native';

import { colors } from '~styles/constants';

import { Container, Description, Spinner } from './styles';

export interface LoadingProps {
  open: boolean;
  message?: string;
}

export function Loading({ open, message }: LoadingProps) {
  if (open) {
    return (
      <Modal transparent visible={open}>
        <Container>
          <View>
            <Spinner size="large" color={colors.WHITE} />
            <Description>{message ?? 'Carregando...'}</Description>
          </View>
        </Container>
      </Modal>
    );
  }

  return null;
}
