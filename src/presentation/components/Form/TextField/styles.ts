import styled, { css } from 'styled-components/native';

import { colors } from '~styles/constants';

interface WrapperProps {
  themeName: 'light' | 'dark';
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
          border-radius: 2px;
          padding: 12px;
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
      background-color: ${colors.GRAY_900};
    `}

  ${({ error }) =>
    error &&
    css`
      border-color: ${colors.RED_ERROR};
    `}
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 2px;
  gap: 10px;
`;

export const Error = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: ${colors.RED_ERROR};
  margin-top: 4px;
`;
