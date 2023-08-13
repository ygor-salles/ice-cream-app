import { Feather } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type IconName = React.ComponentProps<typeof Feather>['name'];

export type NavDrawer = DrawerNavigationProp<ParamListBase>;

export type NavStack = NativeStackNavigationProp<ParamListBase>;

export interface IDates {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

export interface IParamsOnSelectedDates {
  initialDate: IDates;
  finalDate?: IDates;
}

export interface ThemeNameProps {
  themeName: 'light' | 'dark';
}

export interface IFile {
  name: string;
  type: string;
  uri: string;
}
