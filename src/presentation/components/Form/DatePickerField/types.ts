/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from 'react-hook-form';

import { IDates } from '~types/index';

export interface DatePickerFieldProps {
  control: Control<any>;
  minDate?: Date;
  placeholder?: string;
  onChangeNextEvent?: () => void;
  customStyle?: object;
  nameInit: string;
  nameFinal?: string;
  valueInit: IDates;
  valueFinal?: IDates;
  labelInit: string;
  labelFinal?: string;
}
