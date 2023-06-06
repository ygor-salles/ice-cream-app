import { ReactElement } from 'react';

import { Feather } from '@expo/vector-icons';

import { LayoutProps } from '@components/Layout/types';

type MaterialIconName = React.ComponentProps<typeof Feather>['name'];

export interface ILinkDrawerLayout {
  label: string;
  icon: MaterialIconName;
  component: ReactElement;
  propsLayout?: LayoutProps;
}
