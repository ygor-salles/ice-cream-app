import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Description = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.textPrimary};
`;

export const Icon = styled(Feather)`
  color: ${props => props.theme.iconPrimary};
  font-size: 16px;
`;

export const Img = styled.Image`
  margin-top: 16px;
  width: 300px;
  height: 300px;
  position: relative;
`;

export const Close = styled(Feather)`
  color: ${props => props.theme.iconPrimary};
  font-size: 26px;

  top: 10px;
  right: 10px;
  position: absolute;
  z-index: 1;
`;
