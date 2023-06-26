import { useCallback, useState } from 'react';
import { useController } from 'react-hook-form';
import { Keyboard } from 'react-native';

import { format, parseISO } from 'date-fns';

import { DatePicker } from '~components/DatePicker';

import { Label, ValueText, WrapperField } from './styles';
import { DatePickerFieldProps } from './types';

export function DatePickerField({
  control,
  label,
  name,
  value,
  customStyle,
  minDate,
  onChangeNextEvent,
  placeholder,
}: DatePickerFieldProps) {
  const {
    field: { onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const [showDatePickerState, setShowDatePickerState] = useState(false);

  const toggleShowDatePicker = useCallback(() => {
    Keyboard.dismiss();
    setShowDatePickerState(prev => !prev);
  }, []);

  return (
    <>
      <DatePicker
        show={showDatePickerState}
        onDimiss={toggleShowDatePicker}
        onChangeInit={onChange}
        onChangeNextEvent={onChangeNextEvent}
        minDate={minDate}
        labelInit={label}
      />
      <WrapperField style={customStyle} onPress={toggleShowDatePicker}>
        <Label error={!!error}>{label}</Label>
        <ValueText isValue={!!value}>
          {value ? format(parseISO(value?.dateString), 'd MMM yyyy') : placeholder ?? 'Selecione'}
        </ValueText>
      </WrapperField>
    </>
  );
}
