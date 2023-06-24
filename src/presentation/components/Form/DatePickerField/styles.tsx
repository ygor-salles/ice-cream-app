import styled, { css } from 'styled-components/native';

import { colors } from '~styles/constants';

interface LabelProps {
  error: boolean;
}

export const WrapperField = styled.TouchableOpacity`
  height: auto;
  width: 100%;
  padding: 8px 16px;
  background-color: ${colors.WHITE};
  border-width: 1px;
  border-color: ${colors.GRAY_500};
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

interface ValueTextProps {
  isValue?: boolean;
}

export const ValueText = styled.Text<ValueTextProps>`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  padding: 4px 0 8px;

  color: ${props => (props.isValue ? colors.TEXT : colors.GRAY_300)};
`;
