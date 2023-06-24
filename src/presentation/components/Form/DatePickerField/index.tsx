import React, { useCallback, useState } from 'react';
import { useController } from 'react-hook-form';
import { Keyboard } from 'react-native';

import { format, parseISO } from 'date-fns';

import { DatePicker } from './components/DatePicker';
import { Label, Wrapper, ValueText, WrapperField } from './styles';
import { DatePickerFieldProps } from './types';

export function DatePickerField({
  onSelectedDates,
  valueInit,
  valueFinal,
  customStyle,
  minDate,
  title,
  name,
  control,
  placeholder,
  labelText1,
  labelText2,
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
        onSelectedDates={onSelectedDates}
        minDate={minDate}
        title={title}
        labelText1={labelText1}
        labelText2={labelText2}
      />
      <Wrapper style={customStyle}>
        <WrapperField onPress={toggleShowDatePicker}>
          <Label>{labelText1}</Label>
          <ValueText isValue={!!valueInit}>
            {valueInit
              ? format(parseISO(valueInit?.dateString), 'd MMM yyyy')
              : placeholder ?? 'Selecione'}
          </ValueText>
        </WrapperField>
        <WrapperField onPress={toggleShowDatePicker} secondInput>
          <Label>{labelText2}</Label>
          <ValueText isValue={!!valueFinal}>
            {valueFinal
              ? format(parseISO(valueFinal?.dateString), 'd MMM yyyy')
              : placeholder ?? 'Selecione'}
          </ValueText>
        </WrapperField>
      </Wrapper>
    </>
  );
}
