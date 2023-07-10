import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { colors } from '~styles/constants';
import { ThemeNameProps } from '~types/index';

export const Item = styled.TouchableOpacity<ThemeNameProps>`
  padding: 16px;
  background-color: ${props => (props.themeName === 'light' ? colors.WHITE : colors.DARK_200)};
  border-bottom-width: 0.5px;
  border-bottom-color: ${colors.GRAY_300};
`;

export const Description = styled.Text<ThemeNameProps>`
  font-weight: 400;
  font-size: 16px;
  color: ${props => (props.themeName === 'light' ? colors.TEXT : colors.WHITE)};
`;

export const HeaderSearch = styled.View`
  padding: 8px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.GRAY_300};
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;

  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-width: 1px;
  border-color: ${colors.GRAY_300};
`;

export const Input = styled.TextInput<ThemeNameProps>`
  flex: 1;
  font-size: 16px;
  color: ${props => (props.themeName === 'light' ? colors.TEXT : colors.WHITE)};
`;

export const Icon = styled(Feather)`
  font-size: 22px;
  color: ${colors.GRAY_300};
  margin: 8px 0 8px 8px;
`;
