import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { New } from '@flows/index';

import { colors } from '@styles/constants';

import { styles } from './styles';
import { TabRoutes } from './tab.routes';

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerStyle: styles.drawer,
        drawerLabelStyle: styles.label,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerLeft: () => (
          <Feather
            name="menu"
            color={colors.WHITE}
            size={24}
            style={styles.headerIconLeft}
            onPress={navigation.toggleDrawer}
          />
        ),
        headerRight: () => (
          <Feather name="menu" color={colors.WHITE} size={24} style={styles.headerIconRight} />
        ),
      })}
    >
      <Drawer.Screen
        name="home"
        component={TabRoutes}
        options={{
          drawerIcon: ({ size }) => <Feather name="home" color={colors.WHITE} size={size} />,
          drawerLabel: 'Início',
        }}
      />

      <Drawer.Screen
        name="new"
        options={{
          drawerIcon: ({ size }) => <Feather name="user" color={colors.WHITE} size={size} />,
          drawerLabel: 'New',
        }}
      >
        {() => <New teste="teste" />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
