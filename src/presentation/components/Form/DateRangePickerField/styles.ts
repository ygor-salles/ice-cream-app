import styled, { css } from 'styled-components/native';

import { colors } from '~styles/constants';

interface WrapperProps {
  themeName: 'light' | 'dark';
  disabled: boolean;
  variant: 'filled' | 'standard';
  error: boolean;
}

interface WrapperFieldProps {
  secondInput?: boolean;
  themeName: 'light' | 'dark';
}

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  flex-direction: row;
  flex: 1;
  padding: 12px;
  background-color: ${props => (props.themeName === 'dark' ? colors.DARK_200 : colors.WHITE)};

  ${({ variant }) =>
    variant === 'filled'
      ? css`
          padding: 12px;
          border-bottom-width: 1px;
          border-bottom-color: ${colors.GRAY_400};
        `
      : css`
          border-bottom-width: 1px;
          padding: 6px 0;
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

export const WrapperField = styled.View<WrapperFieldProps>`
  width: 50%;

  ${({ secondInput, themeName }) =>
    secondInput
      ? css`
          padding-left: 10px;
          border-left-width: 0.5px;
          border-left-color: ${themeName === 'light' ? colors.GRAY_500 : colors.GRAY_500};
        `
      : css`
          padding-right: 10px;
          border-right-width: 0.5px;
          border-right-color: ${themeName === 'light' ? colors.GRAY_500 : colors.GRAY_500};
        `}
`;
