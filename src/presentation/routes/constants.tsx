import { Dashboard, Products, Login } from '@flows/index';

import { EnumRoleUser } from '@contexts/types';

import { IProtectedRoutesLayout, IUnprotectedRoutes } from './types';

export enum RoutesEnum {
  dashboard = 'dashboard',
  products = 'products',
}

export const unprotectedRoutes: Array<IUnprotectedRoutes> = [{ name: 'Login', component: Login }];

export const protectedRoutesLayout: Array<IProtectedRoutesLayout> = [
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
