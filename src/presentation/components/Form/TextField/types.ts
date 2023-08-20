/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';
import { Control } from 'react-hook-form';
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
  styleTextLabel?: StyleProp<TextStyle>;
  styleTextInput?: StyleProp<TextStyle>;
  placeholderTextColor?: ColorValue;
  variant?: 'filled' | 'standard';
  currency?: boolean;
}
