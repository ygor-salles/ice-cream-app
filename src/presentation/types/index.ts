import { Feather } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type IconName = React.ComponentProps<typeof Feather>['name'];

export type NavDrawer = DrawerNavigationProp<ParamListBase>;

export type NavStack = NativeStackNavigationProp<ParamListBase>;
