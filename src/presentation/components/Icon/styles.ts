import { Feather } from '@expo/vector-icons';
import styled from 'styled-components';

interface SFeatherProps {
  color: string;
}

export const SFeather = styled(Feather)<SFeatherProps>`
  color: ${({ theme, color }) => color || theme.iconGray};
`;
