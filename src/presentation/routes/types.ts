/* eslint-disable @typescript-eslint/no-explicit-any */
import { Feather } from '@expo/vector-icons';

import { EnumRoleUser } from '~contexts/types';

type MaterialIconName = React.ComponentProps<typeof Feather>['name'];

export interface IDrawerRoutes {
  name: string;
  label: string;
  icon: MaterialIconName;
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
