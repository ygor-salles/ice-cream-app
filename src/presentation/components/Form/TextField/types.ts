/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';
import { Control, UseFormSetValue } from 'react-hook-form';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface TextFieldProps {
  label?: string;
  disabled?: boolean;
  required?: boolean;
  viewOnly?: boolean;
  placeholder?: string;
  customOnBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  mask?: (unmaskedValue: string) => string;
  renderRight?: ReactElement;
  renderLeft?: ReactElement;
  maxLength?: number;
  name: string;
  keyboardType?: KeyboardTypeOptions;
  control: Control<any>;
  autoComplete?: {
    listItems: Array<string>;
    renderLeft?: React.ReactElement;
    textLeft?: boolean;
    valueTextLeft?: string;
    fieldTextLeft?: string;
    setValue?: UseFormSetValue<any>;
  };
  customWrapperStyle?: StyleProp<ViewStyle>;
  styleTextInput?: StyleProp<TextStyle>;
  variant?: 'filled' | 'standard';
}
