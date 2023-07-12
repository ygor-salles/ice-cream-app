import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

interface MainProps {
  alignCenter: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 60px;
  background-color: ${({ theme }) => theme.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
`;

export const Main = styled.View<MainProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.bgScreen};

  ${({ alignCenter }) =>
    alignCenter &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

export const Footer = styled.View`
  height: 60px;
  background-color: ${({ theme }) => theme.primary};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 20px;
  color: ${({ theme }) => theme.textWhite};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${props => props.theme.iconWhite};
`;
