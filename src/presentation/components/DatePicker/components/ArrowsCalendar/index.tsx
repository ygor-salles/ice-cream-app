import React from 'react';

import { colors } from '~styles/constants';

import { ArrowsCalendarProps, DIRECTION } from '../../types';
import { LeftIcon, RightIcon } from './styles';

export function ArrowsCalendar({ direction, verifyDate }: ArrowsCalendarProps) {
  return (
    <>
      {direction === DIRECTION.LEFT && (
        <LeftIcon
          name="arrow-left"
          size={24}
          color={verifyDate ? colors.GRAY_300 : colors.GRAY_500}
        />
      )}
      {direction === DIRECTION.RIGHT && (
        <RightIcon name="arrow-right" size={24} color={colors.GRAY_500} />
      )}
    </>
  );
}
