import styled, { css } from 'styled-components/native';

import { colors, globalStyles } from '~styles/constants';

interface ThemeNameProps {
  themeName: 'light' | 'dark';
}

interface ItemProps extends ThemeNameProps {
  lastItem?: boolean;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  ${globalStyles.OVERLAY}
`;

export const Dialog = styled.View`
  width: 80%;
`;

export const Header = styled.View`
  padding: 16px;
  background-color: ${colors.PURPLE_PRIMARY};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Title = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: ${colors.WHITE};
`;

export const Item = styled.View<ItemProps>`
  padding: 16px;
  background-color: ${props => (props.themeName === 'light' ? colors.WHITE : colors.DARK_200)};

  ${({ lastItem }) =>
    lastItem &&
    css`
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    `}
`;

export const Description = styled.Text<ThemeNameProps>`
  font-weight: 400;
  font-size: 16px;
  color: ${props => (props.themeName === 'light' ? colors.TEXT : colors.WHITE)};
`;
