import { Text } from 'react-native';

import { Row } from '@components/Row';

import { Container, WrapperTop, WrapperFooter } from './styles';

interface SidebarProps {
  onPress: () => void;
}

export function Sidebar({ onPress }: SidebarProps) {
  return (
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
  );
}
