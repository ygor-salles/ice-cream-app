import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Button } from '@components/Button';

import { useThemeContext } from '@hooks/useThemeContext';

import { colors } from '@styles/constants';

import { Container, Header, Main, Footer, Title, Row } from './styles';
import { LayoutProps } from './types';

export function Layout({
  title,
  children,
  noScrollView,
  noFooter,
  renderRightHeader,
  renderLeftFooter,
  renderRightFooter,
  textButton,
  alignCenter,
  onPress,
  onToggleDrawer,
}: LayoutProps) {
  const { themeName } = useThemeContext();

  return (
    <Container>
      <Header>
        <Row>
          <Icon name="menu" size={28} color={colors.WHITE} onPress={onToggleDrawer} />
          <Title>{title}</Title>
        </Row>
        {renderRightHeader && renderRightHeader}
        {textButton && onPress && <Button onPress={onPress}>{textButton}</Button>}
      </Header>

      <Main alignCenter={alignCenter && noScrollView} themeName={themeName}>
        {noScrollView ? children : <ScrollView>{children}</ScrollView>}
      </Main>

      {!noFooter && (
        <Footer>
          {renderLeftFooter && renderLeftFooter}
          {renderRightFooter && renderRightFooter}
        </Footer>
      )}
    </Container>
  );
}
