import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard, New } from '@flows/index';

import { RoutesEnum } from './enums';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={RoutesEnum.dashboard}
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
          tabBarLabel: 'Início',
        }}
      />
      <Tab.Screen
        name={RoutesEnum.new}
        component={New}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />,
          tabBarLabel: 'Novo',
        }}
      />
    </Tab.Navigator>
  );
}
