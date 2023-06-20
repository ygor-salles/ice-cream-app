import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { colors } from '@styles/constants';

import { StackRoutes } from './stack.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.DARK_200} barStyle="default" showHideTransition="fade" />
      <StackRoutes />
    </NavigationContainer>
  );
}
