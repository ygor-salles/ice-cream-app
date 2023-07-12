import { ScrollView } from 'react-native';

import { buttonThemes } from '~constants/ButtonThemes';

import { Button } from '../Button';
import { Container, Header, Main, Footer, Title, Row, Icon } from './styles';
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
  renderFooter,
  onPress,
  onToggleDrawer,
}: LayoutProps) {
  return (
    <Container>
      <Header>
        <Row>
          <Icon name="menu" onPress={onToggleDrawer} />
          <Title>{title}</Title>
        </Row>
        {renderRightHeader && renderRightHeader}
        {textButton && onPress && (
          <Button themeButton={buttonThemes.OUTLINED_WHITE} onPress={onPress}>
            {textButton}
          </Button>
        )}
      </Header>

      <Main alignCenter={alignCenter && noScrollView}>
        {noScrollView ? children : <ScrollView>{children}</ScrollView>}
      </Main>

      {renderFooter && renderFooter}
      {!noFooter && (
        <Footer>
          {renderLeftFooter && renderLeftFooter}
          {renderRightFooter && renderRightFooter}
        </Footer>
      )}
    </Container>
  );
}
