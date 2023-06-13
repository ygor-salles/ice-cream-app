import { ReactNode } from 'react';

export enum EnumRoleUser {
  SUPER = 'SUPER',
  NORMAL = 'NORMAL',
  EMPLOYEE = 'EMPLOYEE',
}

export interface AppProviderProps {
  children: ReactNode;
}

export interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface IDescribedUser {
  email: string;
  name: string;
  role: EnumRoleUser;
  iat: number;
  exp: number;
  sub: string;
}

export interface IAuthContextData extends IDescribedUser {
  authenticate: (email: string, password: string) => Promise<IDescribedUser | null>;
  logout: () => void;
}
