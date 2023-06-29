/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';

import { IDates } from '~types/index';

export interface DateRangePickerFieldProps {
  control: Control<any>;
  minDate?: Date;
  placeholder?: string;
  onChangeNextEvent?: () => void;
  customStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  nameInit: string;
  nameFinal?: string;
  valueInit: IDates;
  valueFinal?: IDates;
  labelInit: string;
  labelFinal?: string;
  requiredInit?: boolean;
  requiredFinal?: boolean;
  variant?: 'filled' | 'standard';
}
