import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { TextApp, Layout } from '@components/index';

import { BaseDrawerProps } from '@routes/types';

import { NavDrawer, routesNames } from '@constants/RoutesNames';

export function Dashboard({ onToggleDrawer }: BaseDrawerProps) {
  const { navigate } = useNavigation<NavDrawer>();

  return (
    <Layout title="Dashboard" noScrollView alignCenter onToggleDrawer={onToggleDrawer}>
      <TouchableOpacity onPress={() => navigate(routesNames.PRODUCTS)}>
        <TextApp>Dashboard</TextApp>
      </TouchableOpacity>
    </Layout>
  );
}
