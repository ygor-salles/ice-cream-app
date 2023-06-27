import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

import { colors } from '~styles/constants';

const { width } = Dimensions.get('window');

interface ThemeNameProps {
  themeName: 'light' | 'dark';
}

export const HeaderWrapper = styled.View`
  position: absolute;
  justify-content: center;
  top: 0;
  height: 44px;
  right: ${width * 0.12}px;
  width: ${width * 0.775}px;
`;

export const HeaderText = styled.Text<ThemeNameProps>`
  padding-left: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${props => (props.themeName === 'dark' ? colors.WHITE : colors.TEXT)};
`;
