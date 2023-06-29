import styled from 'styled-components/native';

import { colors } from '~styles/constants';

interface TitleProps {
  color: string;
}

interface ThemeNameProps {
  themeName: 'light' | 'dark';
}

export const Title = styled.Text<TitleProps>`
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.color && props.color};
`;

export const SubTitle = styled.Text<ThemeNameProps>`
  font-weight: 400;
  font-size: 16px;
  color: ${props => (props.themeName === 'dark' ? colors.WHITE : colors.GRAY_700)};
`;

export const Value = styled.Text<ThemeNameProps>`
  font-weight: 400;
  font-size: 24px;
  color: ${props => (props.themeName === 'dark' ? colors.WHITE : colors.TEXT)};

  margin-top: 30px;
`;
