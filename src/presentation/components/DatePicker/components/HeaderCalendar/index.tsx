import React from 'react';

import { monthNames } from '~utils/index';

import { HeaderCalendarProps } from '../../types';
import { HeaderText, HeaderWrapper } from './styles';

export function HeaderCalendar({ date, themeName }: HeaderCalendarProps) {
  return (
    <HeaderWrapper>
      <HeaderText themeName={themeName}>
        {monthNames[date.getMonth()]} / {date.getFullYear()}
      </HeaderText>
    </HeaderWrapper>
  );
}
