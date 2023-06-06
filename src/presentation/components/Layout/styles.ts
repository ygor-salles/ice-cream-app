import styled, { css } from 'styled-components/native';

import { colors } from '@styles/constants';

interface MainProps {
  alignCenter: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 50px;
  background-color: ${colors.PURPLE_PRIMARY};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 8px;
`;

export const Main = styled.View<MainProps>`
  flex: 1;
  background-color: ${colors.GRAY_200};

  ${({ alignCenter }) =>
    alignCenter &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

export const Footer = styled.View`
  height: 50px;
  background-color: ${colors.PURPLE_PRIMARY};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${colors.WHITE};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
