/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from 'react-hook-form';
import { ColorValue, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

export interface TextFieldCountProps {
  label: string;
  name: string;
  control: Control<any>;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  variant?: 'filled' | 'standard';
  placeholderTextColor?: ColorValue;
  customOnBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}
