import { useCallback, useState } from 'react';
import { useController } from 'react-hook-form';
import { Keyboard } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { format, parseISO } from 'date-fns';

import { DatePicker } from '~components/DatePicker';
import { Row } from '~components/Row';
import { useThemeContext } from '~hooks/useThemeContext';
import { colors } from '~styles/constants';

import { Label, ValueText } from '../styles';
import { WrapperField } from './styles';
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
  disabled,
  required,
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
      <WrapperField themeName={themeName} style={customStyle} onPress={toggleShowDatePicker}>
        <Label disabled={disabled} error={!!error}>
          {required ? `${label} *` : label}
        </Label>
        <Row>
          <ValueText isValue={!!value} themeName={themeName}>
            {value ? format(parseISO(value?.dateString), 'd MMM yyyy') : placeholder ?? 'Selecione'}
          </ValueText>
          <Feather name="calendar" size={16} color={colors.GRAY_500} />
        </Row>
      </WrapperField>
    </>
  );
}
