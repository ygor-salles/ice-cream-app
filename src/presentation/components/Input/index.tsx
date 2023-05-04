import { TextInput } from 'react-native';

import { InputProps } from './types';

export function Input({ value }: InputProps) {
  return <TextInput>{value}</TextInput>;
}
