/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from 'react-hook-form';
import { StyleProp, TextStyle } from 'react-native';

export interface SelectMultipleFieldProps {
  label: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  options: string[];
  name: string;
  control: Control<any>;
  styleTextLabel?: StyleProp<TextStyle>;
  variant?: 'filled' | 'standard';
}
