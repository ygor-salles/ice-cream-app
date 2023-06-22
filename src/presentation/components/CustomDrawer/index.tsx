import { Feather } from '@expo/vector-icons';
import { DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import { routesNames } from '~constants/RoutesNames';
import { useThemeContext } from '~hooks/useThemeContext';
import { images } from '~images/index';
import { colors } from '~styles/constants';
import { NavStack } from '~types/index';

import { Column } from '../Column';
import { TextApp } from '../TextApp';
import { Container, ContentNav, Footer, Img, Header, SubTitle, Title, Row } from './styles';

interface CustomDrawerProps {
  propsDrawer: DrawerContentComponentProps;
}

export function CustomDrawer({ propsDrawer }: CustomDrawerProps) {
  const { navigate } = useNavigation<NavStack>();

  const { toggleTheme, themeName } = useThemeContext();

  return (
    <Container themeName={themeName}>
      <Header>
        <Column>
          <Img source={images.iceCreamLogo} />
          <Title>Sorveteria da Vilma</Title>
        </Column>
        <SubTitle>Ygor Carvalho - admin</SubTitle>
      </Header>

      <ContentNav themeName={themeName}>
        <DrawerItemList {...propsDrawer} />
      </ContentNav>

      <Footer themeName={themeName}>
        <Row onPress={toggleTheme}>
          <Feather
            name={themeName === 'dark' ? 'sun' : 'moon'}
            size={24}
            color={themeName === 'dark' ? colors.WHITE : colors.TEXT}
          />
          <TextApp>Alterar tema</TextApp>
        </Row>
        <Row onPress={() => navigate(routesNames.LOGIN)}>
          <Feather
            name="skip-back"
            size={24}
            color={themeName === 'dark' ? colors.WHITE : colors.TEXT}
          />
          <TextApp>Sair</TextApp>
        </Row>
      </Footer>
    </Container>
  );
}
