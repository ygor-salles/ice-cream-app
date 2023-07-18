import { useCallback, useState } from 'react';
import { useController } from 'react-hook-form';
import { Keyboard, View } from 'react-native';

import { format, parseISO } from 'date-fns';

import { DatePicker } from '~components/DatePicker';
import { Row } from '~components/Row';

import { WrapperTouch, Label, ValueText, Error } from '../styles';
import { Icon } from './styles';
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
      <View>
        <WrapperTouch
          disabled={disabled}
          error={!!error}
          variant={variant}
          onPress={toggleShowDatePicker}
          {...rest}
        >
          <Label disabled={disabled} error={!!error}>
            {required ? `${label} *` : label}
          </Label>
          <Row>
            <ValueText isValue={!!value}>{valueField()}</ValueText>
            <Icon name="calendar" />
          </Row>
        </WrapperTouch>
        {!!error && <Error>{error.message}</Error>}
      </View>
    </>
  );
}
