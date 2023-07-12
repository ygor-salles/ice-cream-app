/* eslint-disable no-nested-ternary */
import React from 'react';

import { ArrowsCalendarProps, DIRECTION } from '../../types';
import { LeftIcon, RightIcon } from './styles';

export function ArrowsCalendar({ direction, verifyDate }: ArrowsCalendarProps) {
  return (
    <>
      {direction === DIRECTION.LEFT && <LeftIcon name="arrow-left" isActive={!verifyDate} />}
      {direction === DIRECTION.RIGHT && <RightIcon name="arrow-right" />}
    </>
  );
}
