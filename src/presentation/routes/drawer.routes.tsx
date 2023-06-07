import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawer } from '@components/CustomDrawer';

import { Dashboard, Products } from '@flows/index';

import { colors } from '@styles/constants';

import { ILinkDrawerLayout } from './types';

const Drawer = createDrawerNavigator();

const linksDrawerLayout: Array<ILinkDrawerLayout> = [
  {
    label: 'Home',
    icon: 'home',
    component: onToggleDrawer => <Dashboard onToggleDrawer={onToggleDrawer} />,
  },
  {
    label: 'Produtos',
    icon: 'book',
    component: onToggleDrawer => <Products onToggleDrawer={onToggleDrawer} />,
  },
];

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer propsDrawer={props} />}
      screenOptions={() => ({
        headerShown: false,
        drawerActiveBackgroundColor: colors.PURPLE_PRIMARY,
        drawerActiveTintColor: colors.WHITE,
        drawerInactiveTintColor: colors.GRAY_800,
      })}
    >
      {linksDrawerLayout.map(item => (
        <Drawer.Screen
          name={item.label}
          options={{
            drawerIcon: ({ size, color }) => <Feather name={item.icon} color={color} size={size} />,
            drawerLabel: item.label,
          }}
          key={item.label}
        >
          {({ navigation }) => item.component(navigation.toggleDrawer)}
        </Drawer.Screen>
      ))}
    </Drawer.Navigator>
  );
}
