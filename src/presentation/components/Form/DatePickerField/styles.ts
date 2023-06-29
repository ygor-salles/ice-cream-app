import styled from 'styled-components/native';

import { colors } from '~styles/constants';

interface ThemeNameProps {
  themeName: 'light' | 'dark';
}

export const WrapperField = styled.TouchableOpacity<ThemeNameProps>`
  height: auto;
  width: 100%;
  padding: 12px;
  background-color: ${props => (props.themeName === 'dark' ? colors.DARK_200 : colors.WHITE)};
`;
