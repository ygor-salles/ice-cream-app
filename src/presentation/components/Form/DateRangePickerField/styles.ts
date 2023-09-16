import styled, { css } from 'styled-components/native';

import { Icon as IconComp } from '~components/Icon';
import { globalStyles } from '~styles/constants';

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
  width: 100%;
  background-color: ${props => props.theme.bg};

  ${({ variant }) =>
    variant === 'filled' ? globalStyles.WRAP_FIELD_FILLED : globalStyles.WRAP_FIELD_STD}

  ${({ disabled }) => disabled && globalStyles.FIELD_DISABLED}

  ${({ error }) => error && globalStyles.FIELD_ERROR}
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

export const Icon = styled(IconComp)`
  font-size: 16px;
  color: ${props => props.theme.iconGray};
`;
