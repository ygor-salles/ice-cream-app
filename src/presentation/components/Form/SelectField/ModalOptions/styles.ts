import styled from 'styled-components/native';

import { colors } from '~styles/constants';
import { ThemeNameProps } from '~types/index';

export const Item = styled.TouchableOpacity<ThemeNameProps>`
  padding: 16px;
  background-color: ${props => (props.themeName === 'light' ? colors.WHITE : colors.DARK_200)};
`;

export const Description = styled.Text<ThemeNameProps>`
  font-weight: 400;
  font-size: 16px;
  color: ${props => (props.themeName === 'light' ? colors.TEXT : colors.WHITE)};
`;

export const Divider = styled.View`
  height: 0.5px;
  width: 100%;
  background-color: ${colors.GRAY_200};
`;
