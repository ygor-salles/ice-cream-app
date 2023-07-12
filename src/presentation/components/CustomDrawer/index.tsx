import { DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import { routesNames } from '~constants/RoutesNames';
import { useThemeContext } from '~hooks/useThemeContext';
import { images } from '~images/index';
import { NavStack } from '~types/index';

import { Column } from '../Column';
import { TextApp } from '../TextApp';
import { Container, ContentNav, Footer, Img, Header, SubTitle, Title, Row, Icon } from './styles';

interface CustomDrawerProps {
  propsDrawer: DrawerContentComponentProps;
}

export function CustomDrawer({ propsDrawer }: CustomDrawerProps) {
  const { navigate } = useNavigation<NavStack>();

  const { toggleTheme, themeName } = useThemeContext();

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
        <Row onPress={toggleTheme}>
          <Icon name={themeName === 'dark' ? 'sun' : 'moon'} />
          <TextApp>Alterar tema</TextApp>
        </Row>
        <Row onPress={() => navigate(routesNames.LOGIN)}>
          <Icon name="skip-back" />
          <TextApp>Sair</TextApp>
        </Row>
      </Footer>
    </Container>
  );
}
