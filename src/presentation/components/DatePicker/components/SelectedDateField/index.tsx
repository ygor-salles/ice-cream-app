import React from 'react';

import { format, parseISO } from 'date-fns';

import { colors } from '~styles/constants';

import { SelectedDateFieldProps } from '../../types';
import { ClearIcon, Label, SelectedDateContent, SelectedDateText, Wrapper } from './styles';

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
      <SelectedDateContent>
        <SelectedDateText isValue={date} themeName={themeName}>
          {date ? format(parseISO(date?.dateString), 'd MMM yyyy') : 'Selecione'}
        </SelectedDateText>
        {clearDate && date && (
          <ClearIcon
            name="x-circle"
            size={24}
            color={themeName === 'light' ? colors.GRAY_600 : colors.GRAY_300}
            onPress={clearDate}
          />
        )}
      </SelectedDateContent>
    </Wrapper>
  );
}
