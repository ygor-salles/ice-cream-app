import { FieldError } from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';

import { format, parseISO } from 'date-fns';

import { IDates } from '~types/index';

import { Label, ValueText, WrapperField } from './styles';

interface OneInputDatesProps {
  customStyle: StyleProp<ViewStyle>;
  toggleShowDatePicker: () => void;
  placeholder: string;
  error: FieldError;
  label: string;
  value: IDates;
}

export function OneInputDate({
  customStyle,
  error,
  label,
  placeholder,
  toggleShowDatePicker,
  value,
}: OneInputDatesProps) {
  return (
    <WrapperField style={customStyle} onPress={toggleShowDatePicker}>
      <Label error={!!error}>{label}</Label>
      <ValueText isValue={!!value}>
        {value ? format(parseISO(value?.dateString), 'd MMM yyyy') : placeholder ?? 'Selecione'}
      </ValueText>
    </WrapperField>
  );
}
