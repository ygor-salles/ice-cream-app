import React, { useCallback, useState } from 'react';
import { useController } from 'react-hook-form';
import { Keyboard } from 'react-native';

import { DatePicker } from './components/DatePicker';
import { OneInputDate } from './components/OneInputDate';
import { TwoInputDates } from './components/TwoInputDates';
import { DatePickerFieldProps } from './types';

export function DatePickerField({
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
}: DatePickerFieldProps) {
  const {
    field: { onChange: onChangeInit },
    fieldState: { error: errorInit },
  } = useController({
    name: nameInit,
    control,
  });

  const hasTwoInputDates = labelFinal && valueFinal !== undefined && nameFinal;

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
      {hasTwoInputDates ? (
        <TwoInputDates
          customStyle={customStyle}
          errorFinal={errorFinal}
          errorInit={errorInit}
          labelFinal={labelFinal}
          labelInit={labelInit}
          placeholder={placeholder}
          toggleShowDatePicker={toggleShowDatePicker}
          valueFinal={valueFinal}
          valueInit={valueInit}
        />
      ) : (
        <OneInputDate
          customStyle={customStyle}
          error={errorInit}
          label={labelInit}
          placeholder={placeholder}
          toggleShowDatePicker={toggleShowDatePicker}
          value={valueInit}
        />
      )}
    </>
  );
}
