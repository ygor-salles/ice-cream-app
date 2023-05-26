import { Text, TouchableWithoutFeedback } from 'react-native';
import Animated, { FadeIn, FadeInLeft, FadeInRight, FadeOut } from 'react-native-reanimated';

import { Row } from '@components/Row';

import { WrapperTop, WrapperFooter, FullScreenOverlay, styles, Container } from './styles';

interface SidebarProps {
  onPress: () => void;
}

export function Sidebar({ onPress }: SidebarProps) {
  return (
    <>
      <Container>
        <WrapperTop>
          <Row>
            <Text>Título</Text>
            <Text onPress={onPress}>X</Text>
          </Row>
          <Text>Texto</Text>
          <Text>Texto</Text>
          <Text>Texto</Text>
          <Text>Texto</Text>
          <Text>Texto</Text>
        </WrapperTop>
        <WrapperFooter>
          <Text>Texto</Text>
        </WrapperFooter>
      </Container>

      {/* <TouchableWithoutFeedback onPress={onPress}>
        <FullScreenOverlay />
      </TouchableWithoutFeedback> */}
    </>
  );
}
