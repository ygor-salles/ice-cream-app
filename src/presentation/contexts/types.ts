import { ReactNode } from 'react';

import { ThemeNameProps } from '~types/index';

export enum EnumRoleUser {
  SUPER = 'SUPER',
  NORMAL = 'NORMAL',
  EMPLOYEE = 'EMPLOYEE',
}

export interface AppProviderProps {
  children: ReactNode;
}

export interface IThemeContextData extends ThemeNameProps {
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
