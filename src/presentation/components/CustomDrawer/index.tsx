import { Feather } from '@expo/vector-icons';
import { DrawerItemList } from '@react-navigation/drawer';

import { Column } from '@components/index';

import { images } from '@images/index';

import {
  Container,
  ContentNav,
  Footer,
  Img,
  Header,
  SubTitle,
  TextNav,
  Title,
  Row,
} from './styles';
import { CustomDrawerProps } from './types';

export function CustomDrawer({ propsDrawer }: CustomDrawerProps) {
  return (
    <Container>
      <Header>
        <Column>
          <Img source={images.iceCreamLogo} />
          <Title>Sorveteria da Vilma</Title>
        </Column>
        <SubTitle>Ygor Carvalho - admin</SubTitle>
      </Header>
      <ContentNav>
        <DrawerItemList {...propsDrawer} />
      </ContentNav>
      <Footer>
        <Row>
          <Feather name="moon" size={24} />
          <TextNav>Alterar tema</TextNav>
        </Row>
        <Row>
          <Feather name="skip-back" size={24} />
          <TextNav>Sair</TextNav>
        </Row>
      </Footer>
    </Container>
  );
}
