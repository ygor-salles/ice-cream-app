import styled, { css } from 'styled-components/native';

import { colors } from '~styles/constants';

interface ThemeAppProps {
  themeName: 'light' | 'dark';
}

export const SText = styled.Text<ThemeAppProps>`
  font-weight: 400;
  font-size: 14px;
  ${({ themeName }) =>
    themeName === 'dark' &&
    css`
      color: ${colors.WHITE};
    `}
`;
