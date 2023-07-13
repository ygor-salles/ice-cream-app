import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Item = styled.TouchableOpacity`
  padding: 16px;
  background-color: ${props => props.theme.bg};
  border-bottom-width: 0.5px;
  border-bottom-color: ${props => props.theme.border};
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
  border-bottom-color: ${props => props.theme.border};
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;

  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-width: 1.5px;
  border-color: ${props => props.theme.border};
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${props => props.theme.text};
`;

export const Icon = styled(Feather)`
  font-size: 22px;
  color: ${props => props.theme.iconInactive};
  margin: 8px 0 8px 8px;
`;
