import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { routesNames } from '@constants/RoutesNames';

import { stackRoutes } from './constants';
import { DrawerRoutes } from './drawer.routes';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {stackRoutes.map(item => (
        <Stack.Screen key={item.name} name={item.name} component={item.component} />
      ))}

      <Stack.Screen
        name={routesNames.DRAWER}
        component={DrawerRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
