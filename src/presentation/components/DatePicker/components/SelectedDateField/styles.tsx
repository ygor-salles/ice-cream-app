/* eslint-disable no-nested-ternary */
import styled from 'styled-components/native';

import { colors } from '~styles/constants';
import { ThemeNameProps } from '~types/index';

interface WrapperProps {
  isFocus: boolean;
  hasTwoInput: boolean;
}

export const Wrapper = styled.View<WrapperProps>`
  height: 56px;
  border: 1px;
  padding: 8px 8px 8px 16px;
  width: ${props => (props.hasTwoInput ? '50%' : '100%')};

  border-width: ${props => (props.isFocus ? '1px' : '2px')};
  border-color: ${props => (props.isFocus ? colors.GRAY_300 : colors.PURPLE_PRIMARY)};
`;

export const Label = styled.Text<ThemeNameProps>`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${props => (props.themeName === 'light' ? colors.PURPLE_PRIMARY : colors.WHITE)};
`;

interface SelectedDateTextProps extends ThemeNameProps {
  isValue: undefined | { dateString: string };
}

export const SelectedDateText = styled.Text<SelectedDateTextProps>`
  padding: 2px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  flex: 1;

  color: ${({ isValue, themeName }) =>
    isValue?.dateString && themeName === 'light'
      ? colors.TEXT
      : isValue?.dateString && themeName === 'dark'
      ? colors.WHITE
      : themeName === 'light'
      ? colors.GRAY_500
      : colors.GRAY_500};
`;
