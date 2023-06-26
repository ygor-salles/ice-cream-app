import styled, { css } from 'styled-components/native';

import { colors } from '~styles/constants';

interface LabelProps {
  error?: boolean;
}

interface ValueTextProps {
  isValue?: boolean;
}

interface WrapperFieldProps {
  secondInput?: boolean;
}

export const WrapperField = styled.TouchableOpacity<WrapperFieldProps>`
  height: auto;
  width: 50%;
  padding: 8px 16px;
  background-color: ${colors.WHITE};

  ${({ secondInput }) =>
    secondInput &&
    css`
      border-left-width: 0.5px;
      border-left-color: ${colors.GRAY_300};
    `}
`;

export const Label = styled.Text<LabelProps>`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.PURPLE_PRIMARY};
  padding: 8px 0 0;

  ${({ error }) =>
    error &&
    css`
      color: ${colors.RED};
      font-weight: bold;
    `};
`;

export const ValueText = styled.Text<ValueTextProps>`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  padding: 4px 0 8px;

  color: ${props => (props.isValue ? colors.TEXT : colors.GRAY_300)};
`;
