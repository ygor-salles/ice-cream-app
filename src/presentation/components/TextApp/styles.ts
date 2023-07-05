import styled from 'styled-components/native';

import { colors } from '~styles/constants';
import { ThemeNameProps } from '~types/index';

export const SText = styled.Text<ThemeNameProps>`
  font-weight: 400;
  font-size: 14px;
  color: ${({ themeName }) => (themeName === 'dark' ? colors.WHITE : colors.TEXT)};
`;
