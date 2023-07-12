import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

interface WrapperProps {
  disabled: boolean;
  variant: 'filled' | 'standard';
  error: boolean;
}

interface WrapperFieldProps {
  secondInput?: boolean;
}

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  flex-direction: row;
  flex: 1;
  padding: 12px;
  background-color: ${props => props.theme.bg};

  ${({ variant }) =>
    variant === 'filled'
      ? css`
          padding: 12px;
          border-bottom-width: 1px;
          border-bottom-color: ${props => props.theme.border};
        `
      : css`
          border-bottom-width: 1px;
          padding: 6px 0;
          background-color: transparent;
          border-color: ${props => props.theme.border};
        `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${props => props.theme.disabled};
    `}

  ${({ error }) =>
    error &&
    css`
      border-color: ${props => props.theme.textError};
    `}
`;

export const WrapperField = styled.View<WrapperFieldProps>`
  width: 50%;

  ${({ secondInput }) =>
    secondInput
      ? css`
          padding-left: 10px;
          border-left-width: 0.5px;
          border-left-color: ${props => props.theme.border};
        `
      : css`
          padding-right: 10px;
          border-right-width: 0.5px;
          border-right-color: ${props => props.theme.border};
        `}
`;

export const Icon = styled(Feather)`
  font-size: 16px;
  color: ${props => props.theme.iconGray};
`;
