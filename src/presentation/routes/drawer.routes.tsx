import { ReactElement } from 'react';

import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Layout } from '@components/index';

import { Dashboard, Products } from '@flows/index';

import { colors } from '@styles/constants';

import { styles } from './styles';

interface ILinkDrawer {
  label: string;
  icon: string;
  component: ReactElement;
}

const Drawer = createDrawerNavigator();

const linksDrawer: Array<ILinkDrawer> = [
  { label: 'Home', icon: 'home', component: <Dashboard /> },
  { label: 'Produtos', icon: 'book', component: <Products /> },
];

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={() => ({
        drawerStyle: styles.drawer,
        drawerLabelStyle: styles.label,
        headerShown: false,
      })}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerIcon: ({ size }) => <Feather name="home" color={colors.WHITE} size={size} />,
          drawerLabel: 'Home',
        }}
      >
        {({ navigation }) => (
          <Layout title="Home" noScrollView alignCenter onToggleSidebar={navigation.toggleDrawer}>
            <Dashboard />
          </Layout>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="Produtos"
        options={{
          drawerIcon: ({ size }) => <Feather name="book" color={colors.WHITE} size={size} />,
          drawerLabel: 'Produtos',
        }}
      >
        {({ navigation }) => (
          <Layout title="Produtos" onToggleSidebar={navigation.toggleDrawer}>
            <Products />
          </Layout>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
