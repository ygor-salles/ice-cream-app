/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from 'react-hook-form';

import { IDates, IParamsOnSelectedDates } from '~types/index';

export interface DatePickerFieldProps {
  name: string;
  control: Control<any>;
  placeholder?: string;
  onSelectedDates: (dates: IParamsOnSelectedDates) => void;
  valueInit?: IDates;
  valueFinal?: IDates;
  customStyle?: object;
  minDate?: Date;
  labelText1: string;
  labelText2: string;
}
