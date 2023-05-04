import styled from 'styled-components/native';

import { colors } from '@styles/constants';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Header = styled.View`
  height: 50px;
  background-color: ${colors.PURPLE_PRIMARY};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 8px 16px;
`;

export const Main = styled.View`
  flex: 1;
  background-color: ${colors.GRAY_200};
`;

export const Footer = styled.View`
  height: 50px;
  background-color: ${colors.PURPLE_PRIMARY};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 12px;
  color: ${colors.WHITE};
`;

export const ScrollMain = styled.ScrollView`
  background-color: ${colors.GRAY_200};
`;
