import { ReactNode } from 'react';

import { EnumRoleUser, ThemeNameProps, ToastEnum } from '~types/index';

export interface AppProviderProps {
  children: ReactNode;
}

export interface IThemeContextData extends ThemeNameProps {
  toggleTheme: () => void;
}

export interface ToastProps {
  open: boolean;
  message: string;
  type: ToastEnum;
}

export interface IToastContextData extends ToastProps {
  addToast: (message: string, type: ToastEnum) => void;
  removeToast: () => void;
}

export interface ILoadingContextData {
  addLoading: (message?: string) => void;
  removeLoading: () => void;
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
