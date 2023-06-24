import React from 'react';

import { format, parseISO } from 'date-fns';

import { colors } from '~styles/constants';

import { SelectedDateFieldProps } from '../../types';
import { ClearIcon, Label, SelectedDateContent, SelectedDateText, Wrapper } from './styles';

export function SelectedDateField({ label, isFocus, date, clearDate }: SelectedDateFieldProps) {
  return (
    <Wrapper isFocus={isFocus}>
      <Label>{label}</Label>
      <SelectedDateContent>
        <SelectedDateText isValue={date}>
          {date ? format(parseISO(date?.dateString), 'd MMM yyyy') : 'Selecione'}
        </SelectedDateText>
        {clearDate && date && (
          <ClearIcon name="x-circle" size={24} color={colors.GRAY_600} onPress={clearDate} />
        )}
      </SelectedDateContent>
    </Wrapper>
  );
}
