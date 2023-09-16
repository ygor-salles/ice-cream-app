import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

import { Icon as IconComp } from '../Icon';

const { width } = Dimensions.get('window');

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
  gap: ${width * 0.03}px;
`;

export const ArrowButton = styled.TouchableOpacity``;

export const Page = styled.TouchableOpacity<ActiveProps>`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, isActive }) => (isActive ? theme.iconPrimary : theme.iconWhite)};
  border-color: ${({ theme }) => theme.primary};
  width: ${width * 0.085}px;
  height: ${width * 0.085}px;
  border-radius: ${width * 0.085}px;
`;

export const Number = styled.Text<ActiveProps>`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme, isActive }) => (isActive ? theme.textWhite : theme.textPrimary)};
`;

export const Icon = styled(IconComp)<IconProps>`
  color: ${({ isDisabled, theme }) => (isDisabled ? theme.textDisabled : theme.textPrimary)};
`;
