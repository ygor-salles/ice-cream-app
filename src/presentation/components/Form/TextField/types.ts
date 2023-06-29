/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';
import { Control, UseFormSetValue } from 'react-hook-form';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
  TextStyle,
  ColorValue,
} from 'react-native';

export interface TextFieldProps {
  label: string;
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
  typePassword?: boolean;
  control: Control<any>;
  lightEyeIcon?: boolean;
  autoComplete?: {
    listItems: Array<string>;
    renderLeft?: React.ReactElement;
    textLeft?: boolean;
    valueTextLeft?: string;
    fieldTextLeft?: string;
    setValue?: UseFormSetValue<any>;
  };
  styleTextLabel?: StyleProp<TextStyle>;
  styleTextInput?: StyleProp<TextStyle>;
  placeholderTextColor?: ColorValue;
  variant?: 'filled' | 'standard';
}
