import React from 'react';

import { format, parseISO } from 'date-fns';

import { Row } from '~components/Row';

import { SelectedDateFieldProps } from '../../types';
import { Label, SelectedDateText, Wrapper, IconClose, IconCalendar } from './styles';

export function SelectedDateField({
  label,
  isFocus,
  date,
  hasTwoInput,
  clearDate,
}: SelectedDateFieldProps) {
  return (
    <Wrapper isFocus={isFocus} hasTwoInput={hasTwoInput}>
      <Label>{label}</Label>
      <Row>
        <SelectedDateText isValue={date}>
          {date ? format(parseISO(date?.dateString), 'd MMM yyyy') : 'Selecione'}
        </SelectedDateText>
        {clearDate && date ? (
          <IconClose name="x-circle" onPress={clearDate} />
        ) : (
          <IconCalendar name="calendar" />
        )}
      </Row>
    </Wrapper>
  );
}
