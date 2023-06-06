/* eslint-disable @typescript-eslint/no-explicit-any */
import { Feather } from '@expo/vector-icons';

type MaterialIconName = React.ComponentProps<typeof Feather>['name'];

export interface ILinkDrawerLayout {
  label: string;
  icon: MaterialIconName;
  component: (navigation: any) => JSX.Element;
}

export interface BaseDrawerProps {
  onToggleDrawer: () => void;
}
