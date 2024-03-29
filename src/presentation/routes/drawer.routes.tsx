import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawer } from '~components/CustomDrawer';
import { Icon } from '~components/Icon';
import { useThemeContext } from '~hooks/useThemeContext';
import { colors } from '~styles/constants';

import { drawerRoutes } from './constants';

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  const { themeName } = useThemeContext();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer propsDrawer={props} />}
      screenOptions={() => ({
        headerShown: false,
        drawerActiveBackgroundColor: colors.PURPLE_PRIMARY,
        drawerActiveTintColor: colors.WHITE,
        drawerInactiveTintColor: themeName === 'light' ? colors.GRAY_800 : colors.WHITE,
      })}
    >
      {drawerRoutes.map(item => (
        <Drawer.Screen
          name={item.name}
          options={{
            drawerIcon: ({ size, color }) => <Icon name={item.icon} color={color} size={size} />,
            drawerLabel: item.label,
          }}
          key={item.name}
        >
          {({ navigation }) => item.component(navigation.toggleDrawer)}
        </Drawer.Screen>
      ))}
    </Drawer.Navigator>
  );
}
