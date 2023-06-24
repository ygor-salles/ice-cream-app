/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from 'react-hook-form';

import { IDates, IParamsOnSelectedDates } from '~types/index';

export interface DatePickerFieldProps {
  name: string;
  control: Control<any>;
  placeholder?: string;
  label?: string;
  onSelectedDates: (dates: IParamsOnSelectedDates) => void;
  value?: IDates;
  customStyle?: object;
  minDate?: Date;
  title: string;
  buttonText1: string;
  buttonText2?: string;
  labelText1: string;
  labelText2: string;
}
