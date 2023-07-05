/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components/native';

import { colors } from '~styles/constants';
import { ThemeNameProps } from '~types/index';

interface LabelProps extends ThemeNameProps {
  disabled: boolean;
  error: boolean;
}

type InputFieldProps = ThemeNameProps;

interface ValueTextProps extends ThemeNameProps {
  isValue?: boolean;
}

interface WrapperProps extends ThemeNameProps {
  disabled: boolean;
  variant: 'filled' | 'standard';
  error: boolean;
}

export const Wrapper = styled.View<WrapperProps>`
  width: 100%;
  background-color: ${props => (props.themeName === 'light' ? colors.WHITE : colors.DARK_200)};

  ${({ variant }) =>
    variant === 'filled'
      ? css`
          padding: 12px;
          border-bottom-width: 1px;
          border-bottom-color: ${colors.GRAY_400};
        `
      : css`
          border-bottom-width: 1px;
          padding: 4px 0;
          background-color: transparent;
          border-color: ${colors.GRAY_300};
        `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${colors.GRAY_400};
    `}

  ${({ error }) =>
    error &&
    css`
      border-color: ${colors.RED_ERROR};
    `}
`;

export const WrapperTouch = styled.TouchableOpacity<WrapperProps>`
  width: 100%;
  background-color: ${props => (props.themeName === 'light' ? colors.WHITE : colors.DARK_200)};

  ${({ variant }) =>
    variant === 'filled'
      ? css`
          padding: 12px;
          border-bottom-width: 1px;
          border-bottom-color: ${colors.GRAY_400};
        `
      : css`
          border-bottom-width: 1px;
          padding: 4px 0;
          background-color: transparent;
          border-color: ${colors.GRAY_300};
        `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${colors.GRAY_400};
    `}

  ${({ error }) =>
    error &&
    css`
      border-color: ${colors.RED_ERROR};
    `}
`;

export const Label = styled.Text<LabelProps>`
  font-weight: 400;
  font-size: 12px;
  color: ${({ themeName }) =>
    themeName === 'light' ? colors.PURPLE_PRIMARY : colors.PURPLE_PRIMARY_DARK};
  margin-bottom: 4px;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${colors.GRAY_700};
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
