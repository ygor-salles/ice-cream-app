import { routesNames } from '~constants/RoutesNames';
import { Dashboard, Login, Products, Teste } from '~screens/index';
import { EnumRoleUser } from '~types/index';

import { IDrawerRoutes, IStackRoutes } from './types';

export const stackRoutes: Array<IStackRoutes> = [{ name: routesNames.LOGIN, component: Login }];

export const drawerRoutes: Array<IDrawerRoutes> = [
  {
    name: routesNames.DASHBOARD,
    label: 'Dashboard',
    icon: 'home',
    component: onToggleDrawer => <Dashboard onToggleDrawer={onToggleDrawer} />,
    access: [EnumRoleUser.SUPER],
  },
  {
    name: routesNames.PRODUCTS,
    label: 'Produtos',
    icon: 'book',
    component: onToggleDrawer => <Products onToggleDrawer={onToggleDrawer} />,
    access: [EnumRoleUser.EMPLOYEE],
  },
  {
    name: routesNames.TESTE,
    label: 'Teste',
    icon: 'alert-circle',
    component: onToggleDrawer => <Teste onToggleDrawer={onToggleDrawer} />,
    access: [EnumRoleUser.EMPLOYEE],
  },
];
