import { ThemeNameProps } from '~types/index';

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

export interface DatePickerProps {
  show: boolean;
  onDimiss: () => void;
  labelInit: string;
  labelFinal?: string;
  onChangeInit: (...event: any[]) => void;
  onChangeFinal?: (...event: any[]) => void;
  onChangeNextEvent?: () => void;
  minDate?: Date;
  maxDate?: Date;
  monthFormat?: string;
  hideArrows?: boolean;
  disableMonthChange?: boolean;
  hideDayNames?: boolean;
  disableArrowLeft?: boolean;
  disableArrowRight?: boolean;
  disableAllTouchEventsForDisabledDays?: boolean;
  callbackOnpressArrowLeft?: () => void;
  callbackOnpressArrowRight?: () => void;
}

export interface ArrowsCalendarProps extends ThemeNameProps {
  direction: string;
  verifyDate: boolean;
}

export interface HeaderCalendarProps extends ThemeNameProps {
  date: Date;
}

export interface SelectedDateFieldProps extends ThemeNameProps {
  label: string;
  isFocus: boolean;
  date: undefined | { dateString: string };
  hasTwoInput?: boolean;
  clearDate?: () => void;
}

export enum DIRECTION {
  LEFT = 'left',
  RIGHT = 'right',
}
