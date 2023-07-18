import styled from 'styled-components/native';

import { globalStyles } from '~styles/constants';

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
    variant === 'filled' ? globalStyles.WRAP_FIELD_FILLED : globalStyles.WRAP_FIELD_STD}

  ${({ disabled }) => disabled && globalStyles.FIELD_DISABLED}

  ${({ error }) => error && globalStyles.FIELD_ERROR}
`;

export const WrapperTouch = styled.TouchableOpacity<WrapperProps>`
  width: 100%;
  background-color: ${props => props.theme.bg};

  ${({ variant }) =>
    variant === 'filled' ? globalStyles.WRAP_FIELD_FILLED : globalStyles.WRAP_FIELD_STD}

  ${({ disabled }) => disabled && globalStyles.FIELD_DISABLED}

  ${({ error }) => error && globalStyles.FIELD_ERROR}
`;

export const Label = styled.Text<LabelProps>`
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: 4px;

  ${({ disabled }) => disabled && globalStyles.LABEL_DISABLED}

  ${({ error }) => error && globalStyles.LABEL_ERROR}
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
  margin-bottom: 4px;
`;
