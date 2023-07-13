import styled, { css } from 'styled-components/native';

interface LabelProps {
  disabled: boolean;
  error: boolean;
}

interface ValueTextProps {
  isValue?: boolean;
}

interface WrapperProps {
  disabled: boolean;
  variant: 'filled' | 'standard';
  error: boolean;
}

export const Wrapper = styled.View<WrapperProps>`
  width: 100%;
  background-color: ${props => props.theme.bg};

  ${({ variant }) =>
    variant === 'filled'
      ? css`
          padding: 8px 12px;
          border-bottom-width: 1px;
          border-bottom-color: ${props => props.theme.border};
        `
      : css`
          border-bottom-width: 1px;
          padding: 4px 0;
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

export const WrapperTouch = styled.TouchableOpacity<WrapperProps>`
  width: 100%;
  background-color: ${props => props.theme.bg};

  ${({ variant }) =>
    variant === 'filled'
      ? css`
          padding: 8px 12px;
          border-bottom-width: 1px;
          border-bottom-color: ${props => props.theme.border};
        `
      : css`
          border-bottom-width: 1px;
          padding: 4px 0;
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

export const Label = styled.Text<LabelProps>`
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: 4px;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${props => props.theme.textDisabled};
    `}

  ${({ error }) =>
    error &&
    css`
      color: ${props => props.theme.textError};
      font-weight: bold;
    `}
`;

export const InputField = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.text};
`;

export const ValueText = styled.Text<ValueTextProps>`
  font-weight: 400;
  font-size: 16px;
  flex: 1;
  padding: 4.25px 0;

  color: ${({ theme, isValue }) => (isValue ? theme.text : theme.textPlaceholder)};
`;

export const Error = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme.textError};
`;
