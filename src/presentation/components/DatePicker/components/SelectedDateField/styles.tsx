/* eslint-disable no-nested-ternary */
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { colors } from '~styles/constants';

interface WrapperProps {
  isFocus: boolean;
  hasTwoInput: boolean;
}

interface ThemeNameProps {
  themeName: 'light' | 'dark';
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

export const SelectedDateContent = styled.View`
  flex-direction: row;
`;

interface SelectedDateTextProps {
  isValue: undefined | { dateString: string };
  themeName: 'light' | 'dark';
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
      ? colors.GRAY_300
      : colors.GRAY_300};
`;

export const ClearIcon = styled(Feather)`
  align-self: flex-end;
`;
