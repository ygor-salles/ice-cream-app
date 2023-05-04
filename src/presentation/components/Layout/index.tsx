import { StatusBar } from 'react-native';

import { colors } from '@styles/constants';

import { Container, Header, Main, Footer, Title, ScrollMain } from './styles';

interface LayoutProps {
  children: React.ReactNode;
  noScrollView?: boolean;
}

export function Layout({ children, noScrollView }: LayoutProps) {
  return (
    <Container>
      <StatusBar
        backgroundColor={colors.PURPLE_PRIMARY}
        barStyle="default"
        showHideTransition="fade"
      />
      <Header>
        <Title>Esquerdo</Title>
        <Title>Direito</Title>
      </Header>
      {noScrollView ? <Main>{children}</Main> : <ScrollMain>{children}</ScrollMain>}

      <Footer>
        <Title>Esquerdo</Title>
        <Title>Direito</Title>
      </Footer>
    </Container>
  );
}
