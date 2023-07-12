import React, { useCallback, useState } from 'react';
import { useController } from 'react-hook-form';
import { Keyboard } from 'react-native';

import { format, parseISO } from 'date-fns';

import { DatePicker } from '~components/DatePicker';
import { Row } from '~components/Row';

import { Label, ValueText } from '../styles';
import { Icon, Wrapper, WrapperField } from './styles';
import { DateRangePickerFieldProps } from './types';

export function DateRangePickerField({
  onChangeNextEvent,
  valueInit,
  valueFinal,
  minDate,
  nameInit,
  nameFinal,
  control,
  placeholder,
  labelInit,
  labelFinal,
  disabled,
  requiredInit,
  requiredFinal,
  variant = 'filled',
  ...rest
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
      <Wrapper
        disabled={disabled}
        error={!!errorInit || !!errorFinal}
        variant={variant}
        onPress={toggleShowDatePicker}
        {...rest}
      >
        <WrapperField>
          <Label disabled={disabled} error={!!errorInit}>
            {requiredInit ? `${labelInit} *` : labelInit}
          </Label>
          <Row>
            <ValueText isValue={!!valueInit}>
              {valueInit
                ? format(parseISO(valueInit?.dateString), 'd MMM yyyy')
                : placeholder ?? 'Selecione'}
            </ValueText>
            <Icon name="calendar" />
          </Row>
        </WrapperField>
        <WrapperField secondInput>
          <Label disabled={disabled} error={!!errorFinal}>
            {requiredFinal ? `${labelFinal} *` : labelFinal}
          </Label>
          <Row>
            <ValueText isValue={!!valueFinal}>
              {valueFinal
                ? format(parseISO(valueFinal?.dateString), 'd MMM yyyy')
                : placeholder ?? 'Selecione'}
            </ValueText>
            <Icon name="calendar" />
          </Row>
        </WrapperField>
      </Wrapper>
    </>
  );
}
