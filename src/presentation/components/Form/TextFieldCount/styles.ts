import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

import { globalStyles } from '~styles/constants';

interface ButtonProps {
  isAdd?: boolean;
  error: boolean;
}

interface WrapperProps {
  disabled: boolean;
  variant: 'filled' | 'standard';
  error: boolean;
}

export const Wrapper = styled.View<WrapperProps>`
  flex: 1;
  background-color: ${props => props.theme.bg};

  ${({ variant }) =>
    variant === 'filled'
      ? css`
          border-top-width: 1px;
          border-bottom-width: 1px;
          padding: 8px;
          border-color: ${props => props.theme.border};
        `
      : globalStyles.WRAP_FIELD_STD}

  ${({ disabled }) => disabled && globalStyles.FIELD_DISABLED}

  ${({ error }) => error && globalStyles.FIELD_ERROR}
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  height: 66.5px;
  width: 50px;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: ${({ theme, error }) => (error ? theme.textError : theme.border)};

  ${({ isAdd, theme }) =>
    isAdd
      ? css`
          background-color: ${theme.success};
          border-right-width: 1px;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        `
      : css`
          background-color: ${theme.danger};
          border-left-width: 1px;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        `}
`;

export const Icon = styled(Feather)`
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.theme.textWhite};
`;

export const InputField = styled.TextInput`
  flex: 1;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: ${props => props.theme.text};
`;
