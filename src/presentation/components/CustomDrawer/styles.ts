import styled from 'styled-components/native';

import { colors } from '~styles/constants';
import { ThemeNameProps } from '~types/index';

export const Container = styled.View<ThemeNameProps>`
  flex: 1;
  background-color: ${props => (props.themeName === 'light' ? colors.WHITE : colors.DARK_200)};
`;

export const Header = styled.View`
  gap: 10px;
  padding: 14px 0 18px 0;
  background-color: ${colors.PURPLE_PRIMARY};
  margin-bottom: 10px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Img = styled.Image`
  width: 32px;
  height: 32px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.WHITE};
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.WHITE};
  text-align: center;
`;

export const ContentNav = styled.View<ThemeNameProps>`
  flex: 1;
  background-color: ${props => (props.themeName === 'light' ? colors.WHITE : colors.DARK_200)};
`;

export const Footer = styled.View<ThemeNameProps>`
  padding: 16px;
  background-color: ${props => (props.themeName === 'light' ? colors.WHITE : colors.DARK_200)};
  border-top-width: 1px;
  border-color: ${colors.GRAY_300};
  gap: 10px;
`;

export const Row = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 40px;
  padding: 8px;
`;
