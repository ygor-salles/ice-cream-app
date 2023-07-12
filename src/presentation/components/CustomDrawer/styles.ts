import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.bg};
`;

export const Header = styled.View`
  gap: 10px;
  padding: 14px 0 18px 0;
  background-color: ${props => props.theme.primary};
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
  color: ${props => props.theme.textWhite};
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.textWhite};
  text-align: center;
`;

export const ContentNav = styled.View`
  flex: 1;
  background-color: ${props => props.theme.bg};
`;

export const Footer = styled.View`
  padding: 16px;
  background-color: ${props => props.theme.bg};
  border-top-width: 1px;
  border-color: ${props => props.theme.border};
  gap: 10px;
`;

export const Row = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 40px;
  padding: 8px;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.iconText};
`;
