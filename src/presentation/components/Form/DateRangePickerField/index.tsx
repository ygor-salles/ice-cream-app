import React, { useCallback, useState } from 'react';
import { useController } from 'react-hook-form';
import { Keyboard } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { format, parseISO } from 'date-fns';

import { DatePicker } from '~components/DatePicker';
import { Row } from '~components/Row';
import { useThemeContext } from '~hooks/useThemeContext';
import { colors } from '~styles/constants';

import { Label, ValueText } from '../styles';
import { Wrapper, WrapperField } from './styles';
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
  disabled,
  requiredInit,
  requiredFinal,
  variant = 'filled',
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
      <Wrapper
        themeName={themeName}
        disabled={disabled}
        error={!!errorInit || !!errorFinal}
        variant={variant}
        style={customStyle}
        onPress={toggleShowDatePicker}
      >
        <WrapperField themeName={themeName}>
          <Label disabled={disabled} error={!!errorInit}>
            {requiredInit ? `${labelInit} *` : labelInit}
          </Label>
          <Row>
            <ValueText isValue={!!valueInit} themeName={themeName}>
              {valueInit
                ? format(parseISO(valueInit?.dateString), 'd MMM yyyy')
                : placeholder ?? 'Selecione'}
            </ValueText>
            <Feather name="calendar" size={16} color={colors.GRAY_500} />
          </Row>
        </WrapperField>
        <WrapperField themeName={themeName} secondInput>
          <Label disabled={disabled} error={!!errorFinal}>
            {requiredFinal ? `${labelFinal} *` : labelFinal}
          </Label>
          <Row>
            <ValueText isValue={!!valueFinal} themeName={themeName}>
              {valueFinal
                ? format(parseISO(valueFinal?.dateString), 'd MMM yyyy')
                : placeholder ?? 'Selecione'}
            </ValueText>
            <Feather name="calendar" size={16} color={colors.GRAY_500} />
          </Row>
        </WrapperField>
      </Wrapper>
    </>
  );
}
