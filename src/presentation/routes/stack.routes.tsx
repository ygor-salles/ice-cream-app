import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard, New, Products } from '@flows/index';

import { RoutesEnum } from './enums';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={RoutesEnum.dashboard} component={Dashboard} />
      <Stack.Screen name={RoutesEnum.new} component={New} />
      <Stack.Screen name={RoutesEnum.products} component={Products} />
    </Stack.Navigator>
  );
}
