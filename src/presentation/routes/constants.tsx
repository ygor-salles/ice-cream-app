import { Dashboard, Products, Login } from '@flows/index';

import { EnumRoleUser } from '@contexts/types';

import { IDrawerRoutes, IStackRoutes } from './types';

export enum RoutesEnum {
  dashboard = 'dashboard',
  products = 'products',
}

export const stackRoutes: Array<IStackRoutes> = [{ name: 'Login', component: Login }];

export const drawerRoutes: Array<IDrawerRoutes> = [
  {
    label: 'Dashboard',
    icon: 'home',
    component: onToggleDrawer => <Dashboard onToggleDrawer={onToggleDrawer} />,
    access: [EnumRoleUser.SUPER],
  },
  {
    label: 'Produtos',
    icon: 'book',
    component: onToggleDrawer => <Products onToggleDrawer={onToggleDrawer} />,
    access: [EnumRoleUser.EMPLOYEE],
  },
];
