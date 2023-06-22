import { routesNames } from '~constants/RoutesNames';
import { EnumRoleUser } from '~contexts/types';
import { Dashboard, Login, Products } from '~flows/index';

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
];
