import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { colors } from '@styles/constants';

import { DrawerRoutes } from './drawer.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.DARK_200} barStyle="default" showHideTransition="fade" />
      <DrawerRoutes />
    </NavigationContainer>
  );
}
