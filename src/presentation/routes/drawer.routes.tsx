import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Layout } from '@components/index';

import { Dashboard, Products } from '@flows/index';

import { colors } from '@styles/constants';

import { styles } from './styles';
import { ILinkDrawerLayout } from './types';

const Drawer = createDrawerNavigator();

const linksDrawerLayout: Array<ILinkDrawerLayout> = [
  {
    label: 'Home',
    icon: 'home',
    component: <Dashboard />,
    propsLayout: { alignCenter: true, noScrollView: true },
  },
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
      {linksDrawerLayout.map(item => (
        <Drawer.Screen
          name={item.label}
          options={{
            drawerIcon: ({ size }) => <Feather name={item.icon} color={colors.WHITE} size={size} />,
            drawerLabel: item.label,
          }}
          key={item.label}
        >
          {({ navigation }) => (
            <Layout
              title={item.label}
              onToggleSidebar={navigation.toggleDrawer}
              {...item.propsLayout}
            >
              {item.component}
            </Layout>
          )}
        </Drawer.Screen>
      ))}
    </Drawer.Navigator>
  );
}
