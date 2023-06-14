import styled from 'styled-components/native';

import { colors, globalStyles } from '@styles/constants';

interface ThemeAppProps {
  themeName: 'light' | 'dark';
}

export const Container = styled.View<ThemeAppProps>`
  padding: 16px;
  background-color: ${props => (props.themeName === 'light' ? colors.WHITE : colors.DARK_200)};
  border-radius: 4px;

  ${globalStyles.SHADOW}
`;
