import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Icon = styled(Feather)`
  font-size: 16px;
  color: ${props => props.theme.iconGray};
`;
