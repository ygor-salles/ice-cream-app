import { Feather } from '@expo/vector-icons';
import { DrawerItemList } from '@react-navigation/drawer';

import { Column, TextApp } from '@components/index';

import { useThemeContext } from '@hooks/index';

import { images } from '@images/index';

import { colors } from '@styles/constants';

import { Container, ContentNav, Footer, Img, Header, SubTitle, Title, Row } from './styles';
import { CustomDrawerProps } from './types';

export function CustomDrawer({ propsDrawer }: CustomDrawerProps) {
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
        <Row>
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
