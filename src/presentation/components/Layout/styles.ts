import styled, { css } from 'styled-components/native';

import { colors } from '~styles/constants';

interface MainProps {
  alignCenter: boolean;
  themeName: 'light' | 'dark';
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 60px;
  background-color: ${colors.PURPLE_PRIMARY};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
`;

export const Main = styled.View<MainProps>`
  flex: 1;
  background-color: ${props => (props.themeName === 'light' ? colors.GRAY_200 : colors.DARK_500)};

  ${({ alignCenter }) =>
    alignCenter &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

export const Footer = styled.View`
  height: 60px;
  background-color: ${colors.PURPLE_PRIMARY};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 20px;
  color: ${colors.WHITE};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
