import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

interface ActiveProps {
  isActive: boolean;
}

interface IconProps {
  isDisabled: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ArrowButton = styled.TouchableOpacity``;

export const Page = styled.TouchableOpacity<ActiveProps>`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, isActive }) => (isActive ? theme.iconPrimary : theme.iconWhite)};
  border-color: ${({ theme }) => theme.primary};
  width: 32px;
  height: 32px;
  border-radius: 32px;
`;

export const Number = styled.Text<ActiveProps>`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme, isActive }) => (isActive ? theme.textWhite : theme.textPrimary)};
`;

export const Icon = styled(Feather)<IconProps>`
  color: ${({ isDisabled, theme }) => (isDisabled ? theme.textDisabled : theme.textPrimary)};
`;
