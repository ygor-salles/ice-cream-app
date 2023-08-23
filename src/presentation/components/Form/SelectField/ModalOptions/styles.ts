import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

interface IconProps {
  isPosition: 'left' | 'right';
}

interface ItemProps {
  selected: boolean;
}

export const Item = styled.TouchableOpacity<ItemProps>`
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme, selected }) => (selected ? theme.bgOpacity : theme.bg)};
  border-bottom-width: 0.5px;
  border-bottom-color: ${props => props.theme.borderGray};
`;

export const Description = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.theme.text};
`;

export const HeaderSearch = styled.View`
  padding: 8px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.borderGray};
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;

  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-width: 1.5px;
  border-color: ${props => props.theme.borderGray};
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${props => props.theme.text};
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: 22px;
  ${({ isPosition, theme }) =>
    isPosition === 'left'
      ? css`
          margin: 8px 0 8px 8px;
          color: ${theme.iconInactive};
        `
      : css`
          color: ${theme.iconGray};
        `}
`;
