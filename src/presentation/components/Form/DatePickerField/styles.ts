import styled, { css } from 'styled-components/native';

import { colors } from '~styles/constants';

interface WrapperProps {
  themeName: 'light' | 'dark';
  disabled: boolean;
  variant: 'filled' | 'standard';
  error: boolean;
}

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  width: 100%;
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
