import React, { useCallback, useState } from 'react';
import { useController } from 'react-hook-form';
import { Keyboard } from 'react-native';

import { format, parseISO } from 'date-fns';

import { DatePicker } from '~components/DatePicker';
import { useThemeContext } from '~hooks/useThemeContext';

import { Label, ValueText, Wrapper, WrapperField } from './styles';
import { DateRangePickerFieldProps } from './types';

export function DateRangePickerField({
  onChangeNextEvent,
  valueInit,
  valueFinal,
  customStyle,
  minDate,
  nameInit,
  nameFinal,
  control,
  placeholder,
  labelInit,
  labelFinal,
}: DateRangePickerFieldProps) {
  const {
    field: { onChange: onChangeInit },
    fieldState: { error: errorInit },
  } = useController({
    name: nameInit,
    control,
  });

  const {
    field: { onChange: onChangeFinal },
    fieldState: { error: errorFinal },
  } = useController({
    name: nameFinal,
    control,
  });

  const { themeName } = useThemeContext();

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
        onChangeInit={onChangeInit}
        onChangeFinal={onChangeFinal}
        onChangeNextEvent={onChangeNextEvent}
        minDate={minDate}
        labelInit={labelInit}
        labelFinal={labelFinal}
      />
      <Wrapper style={customStyle} onPress={toggleShowDatePicker}>
        <WrapperField themeName={themeName}>
          <Label error={!!errorInit}>{labelInit}</Label>
          <ValueText isValue={!!valueInit} themeName={themeName}>
            {valueInit
              ? format(parseISO(valueInit?.dateString), 'd MMM yyyy')
              : placeholder ?? 'Selecione'}
          </ValueText>
        </WrapperField>
        <WrapperField themeName={themeName} secondInput>
          <Label error={!!errorFinal}>{labelFinal}</Label>
          <ValueText isValue={!!valueFinal} themeName={themeName}>
            {valueFinal
              ? format(parseISO(valueFinal?.dateString), 'd MMM yyyy')
              : placeholder ?? 'Selecione'}
          </ValueText>
        </WrapperField>
      </Wrapper>
    </>
  );
}
