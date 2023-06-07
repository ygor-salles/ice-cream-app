import styled from 'styled-components/native';

import { colors } from '@styles/constants';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  gap: 10px;
  padding: 14px 0 18px 0;
  background-color: ${colors.PURPLE_PRIMARY};
  margin-bottom: 10px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Img = styled.Image``;

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

export const ContentNav = styled.View`
  flex: 1;
  background-color: ${colors.WHITE};
`;

export const Footer = styled.View`
  padding: 16px;
  background-color: ${colors.WHITE};
  border-top-width: 1px;
  border-color: ${colors.GRAY_500};
  gap: 10px;
`;

export const TextNav = styled.Text`
  font-size: 14px;
  font-weight: 400;
`;

export const Row = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 40px;
  padding: 8px;
`;
