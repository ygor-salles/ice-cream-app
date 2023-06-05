import Icon from 'react-native-vector-icons/MaterialIcons';

import { Button } from '@components/Button';

import { colors } from '@styles/constants';

import { Container, Header, Main, Footer, Title, ScrollMain, Row } from './styles';
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
  onPress,
  onToggleSidebar,
}: LayoutProps) {
  return (
    <Container>
      <Header>
        <Row>
          <Icon name="menu" size={28} color={colors.WHITE} onPress={onToggleSidebar} />
          <Title>{title}</Title>
        </Row>
        {renderRightHeader && renderRightHeader}
        {textButton && onPress && <Button onPress={onPress}>{textButton}</Button>}
      </Header>

      {noScrollView ? <Main>{children}</Main> : <ScrollMain>{children}</ScrollMain>}

      {!noFooter && (
        <Footer>
          {renderLeftFooter && renderLeftFooter}
          {renderRightFooter && renderRightFooter}
        </Footer>
      )}
    </Container>
  );
}
