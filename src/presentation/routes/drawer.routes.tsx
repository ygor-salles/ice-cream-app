import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawer } from '@components/CustomDrawer';
import { ProtectedLayout } from '@components/ProtectedLayout';

import { useThemeContext } from '@hooks/index';

import { colors } from '@styles/constants';

import { protectedRoutesLayout, unprotectedRoutes } from './constants';

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
      {unprotectedRoutes.map(item => (
        <Drawer.Screen key={item.name} name={item.name} component={item.component} />
      ))}

      {protectedRoutesLayout.map(item => (
        <Drawer.Screen
          name={item.label}
          options={{
            drawerIcon: ({ size, color }) => <Feather name={item.icon} color={color} size={size} />,
            drawerLabel: item.label,
          }}
          key={item.label}
        >
          {({ navigation }) => (
            <ProtectedLayout accessUser={item.access}>
              {item.component(navigation.toggleDrawer)}
            </ProtectedLayout>
          )}
        </Drawer.Screen>
      ))}
    </Drawer.Navigator>
  );
}
