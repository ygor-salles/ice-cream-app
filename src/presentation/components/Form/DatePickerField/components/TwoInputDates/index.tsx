import { FieldError } from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';

import { format, parseISO } from 'date-fns';

import { IDates } from '~types/index';

import { Label, ValueText, Wrapper, WrapperField } from './styles';

interface TwoInputDatesProps {
  customStyle: StyleProp<ViewStyle>;
  toggleShowDatePicker: () => void;
  placeholder: string;
  errorInit: FieldError;
  labelInit: string;
  valueInit: IDates;
  errorFinal: FieldError;
  labelFinal: string;
  valueFinal: IDates;
}

export function TwoInputDates({
  customStyle,
  errorInit,
  labelInit,
  placeholder,
  toggleShowDatePicker,
  valueInit,
  errorFinal,
  labelFinal,
  valueFinal,
}: TwoInputDatesProps) {
  return (
    <Wrapper style={customStyle}>
      <WrapperField onPress={toggleShowDatePicker}>
        <Label error={!!errorInit}>{labelInit}</Label>
        <ValueText isValue={!!valueInit}>
          {valueInit
            ? format(parseISO(valueInit?.dateString), 'd MMM yyyy')
            : placeholder ?? 'Selecione'}
        </ValueText>
      </WrapperField>
      <WrapperField onPress={toggleShowDatePicker} secondInput>
        <Label error={!!errorFinal}>{labelFinal}</Label>
        <ValueText isValue={!!valueFinal}>
          {valueFinal
            ? format(parseISO(valueFinal?.dateString), 'd MMM yyyy')
            : placeholder ?? 'Selecione'}
        </ValueText>
      </WrapperField>
    </Wrapper>
  );
}
