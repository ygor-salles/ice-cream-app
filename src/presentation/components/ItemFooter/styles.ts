import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const TextFoot = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.theme.textWhite};
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${props => props.theme.iconWhite};
`;
