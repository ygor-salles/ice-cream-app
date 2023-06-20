import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum routesNames {
  LOGIN = 'login',

  DRAWER = 'drawer',
  DASHBOARD = 'dashboard',
  PRODUCTS = 'products',
}

export type NavDrawer = DrawerNavigationProp<ParamListBase>;

export type NavStack = NativeStackNavigationProp<ParamListBase>;
