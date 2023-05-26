import { useState } from 'react';
import { Button, StatusBar } from 'react-native';

import { SidebarTest } from '@components/SidebarTest';

import { colors } from '@styles/constants';

import { Container } from './styles';

export function LayoutTest() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Container>
      <StatusBar
        backgroundColor={colors.PURPLE_PRIMARY}
        barStyle="default"
        showHideTransition="fade"
      />
      {showSidebar && <SidebarTest />}
      <Button onPress={() => setShowSidebar(prev => !prev)} title="click" />
    </Container>
  );
}
