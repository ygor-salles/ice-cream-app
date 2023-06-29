/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';

import { IDates } from '~types/index';

export interface DatePickerFieldProps {
  control: Control<any>;
  minDate?: Date;
  placeholder?: string;
  onChangeNextEvent?: () => void;
  customStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  name: string;
  value: IDates;
  label: string;
  required?: boolean;
  variant?: 'filled' | 'standard';
}
