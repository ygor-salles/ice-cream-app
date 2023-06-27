import React from 'react';

import { Feather } from '@expo/vector-icons';
import { format, parseISO } from 'date-fns';

import { Row } from '~components/Row';
import { colors } from '~styles/constants';

import { SelectedDateFieldProps } from '../../types';
import { Label, SelectedDateText, Wrapper } from './styles';

export function SelectedDateField({
  label,
  isFocus,
  date,
  themeName,
  hasTwoInput,
  clearDate,
}: SelectedDateFieldProps) {
  return (
    <Wrapper isFocus={isFocus} hasTwoInput={hasTwoInput}>
      <Label themeName={themeName}>{label}</Label>
      <Row>
        <SelectedDateText isValue={date} themeName={themeName}>
          {date ? format(parseISO(date?.dateString), 'd MMM yyyy') : 'Selecione'}
        </SelectedDateText>
        {clearDate && date ? (
          <Feather
            name="x-circle"
            size={24}
            color={themeName === 'light' ? colors.GRAY_600 : colors.GRAY_300}
            onPress={clearDate}
          />
        ) : (
          <Feather name="calendar" size={16} color={colors.GRAY_500} />
        )}
      </Row>
    </Wrapper>
  );
}
