/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from 'react-hook-form';

import { IDates } from '~types/index';

export interface DatePickerFieldProps {
  control: Control<any>;
  minDate?: Date;
  placeholder?: string;
  onChangeNextEvent?: () => void;
  disabled?: boolean;
  name: string;
  value: IDates;
  label: string;
  required?: boolean;
  variant?: 'filled' | 'standard';
}
