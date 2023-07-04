import { useCallback, useState } from 'react';
import { useController } from 'react-hook-form';
import { Keyboard } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { format, parseISO } from 'date-fns';

import { DatePicker } from '~components/DatePicker';
import { Row } from '~components/Row';
import { useThemeContext } from '~hooks/useThemeContext';
import { colors } from '~styles/constants';

import { WrapperTouch, Label, ValueText } from '../styles';
import { DatePickerFieldProps } from './types';

export function DatePickerField({
  control,
  label,
  name,
  value,
  minDate,
  onChangeNextEvent,
  placeholder,
  disabled,
  required,
  variant = 'filled',
  ...rest
}: DatePickerFieldProps) {
  const {
    field: { onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const { themeName } = useThemeContext();

  const [showDatePickerState, setShowDatePickerState] = useState(false);

  const valueField = () => {
    if (value) return format(parseISO(value?.dateString), 'd MMM yyyy');
    if (disabled) return '';
    if (placeholder && !disabled) return placeholder;
    return 'Selecione';
  };

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
      <WrapperTouch
        themeName={themeName}
        disabled={disabled}
        error={!!error}
        variant={variant}
        onPress={toggleShowDatePicker}
        {...rest}
      >
        <Label themeName={themeName} disabled={disabled} error={!!error}>
          {required ? `${label} *` : label}
        </Label>
        <Row>
          <ValueText isValue={!!value} themeName={themeName}>
            {valueField()}
          </ValueText>
          <Feather name="calendar" size={16} color={colors.GRAY_500} />
        </Row>
      </WrapperTouch>
    </>
  );
}
