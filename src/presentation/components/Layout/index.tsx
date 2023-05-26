import { useState } from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Button } from '@components/Button';
import { Sidebar } from '@components/Sidebar';

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
}: LayoutProps) {
  const [showSidebar, setShowSidebar] = useState(false);
  const onToggleSideber = () => setShowSidebar(prev => !prev);

  return (
    <Container>
      <StatusBar
        backgroundColor={colors.PURPLE_PRIMARY}
        barStyle="default"
        showHideTransition="fade"
      />
      {showSidebar && <Sidebar onPress={onToggleSideber} />}

      <Header>
        <Row>
          <Icon name="menu" size={28} color={colors.WHITE} onPress={onToggleSideber} />
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
