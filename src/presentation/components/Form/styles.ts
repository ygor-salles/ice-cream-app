/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components/native';

import { colors } from '~styles/constants';

interface LabelProps {
  disabled: boolean;
  error: boolean;
}

interface InputFieldProps {
  themeName: 'light' | 'dark';
}

interface ValueTextProps {
  isValue?: boolean;
  themeName: 'light' | 'dark';
}

export const Label = styled.Text<LabelProps>`
  font-weight: 400;
  font-size: 12px;
  color: ${colors.PURPLE_PRIMARY};
  margin-bottom: 4px;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${colors.GRAY_300};
    `}

  ${({ error }) =>
    error &&
    css`
      color: ${colors.RED_ERROR};
      font-weight: bold;
    `}
`;

export const InputField = styled.TextInput<InputFieldProps>`
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.themeName === 'light' ? colors.TEXT : colors.WHITE)};
`;

export const ValueText = styled.Text<ValueTextProps>`
  font-weight: 400;
  font-size: 16px;
  flex: 1;
  padding: 4.25px 0;

  color: ${({ isValue, themeName }) =>
    isValue && themeName === 'light'
      ? colors.TEXT
      : isValue && themeName === 'dark'
      ? colors.WHITE
      : themeName === 'light'
      ? colors.GRAY_500
      : colors.GRAY_500};
`;
