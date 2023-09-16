/* eslint-disable @typescript-eslint/no-explicit-any */
import { EnumRoleUser, IconName } from '~types/index';

export interface IDrawerRoutes {
  name: string;
  label: string;
  icon: IconName;
  component: (navigation: any) => JSX.Element;
  access: EnumRoleUser[];
}

export interface IStackRoutes {
  name: string;
  component: () => JSX.Element;
}

export interface BaseDrawerProps {
  onToggleDrawer: () => void;
}
