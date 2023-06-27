/* eslint-disable no-nested-ternary */
import React from 'react';

import { colors } from '~styles/constants';

import { ArrowsCalendarProps, DIRECTION } from '../../types';
import { LeftIcon, RightIcon } from './styles';

export function ArrowsCalendar({ direction, verifyDate, themeName }: ArrowsCalendarProps) {
  const colorLeftIcon =
    verifyDate && themeName === 'light'
      ? colors.GRAY_300
      : verifyDate && themeName === 'dark'
      ? colors.GRAY_500
      : themeName === 'dark'
      ? colors.WHITE
      : colors.GRAY_500;

  return (
    <>
      {direction === DIRECTION.LEFT && (
        <LeftIcon name="arrow-left" size={24} color={colorLeftIcon} />
      )}
      {direction === DIRECTION.RIGHT && (
        <RightIcon
          name="arrow-right"
          size={24}
          color={themeName === 'light' ? colors.GRAY_500 : colors.WHITE}
        />
      )}
    </>
  );
}
