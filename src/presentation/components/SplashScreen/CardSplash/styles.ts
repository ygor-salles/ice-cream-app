import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { Card } from '../../Card';

export const SCard = styled(Card)`
  justify-content: center;
  align-items: center;
  gap: 26px;
`;

export const Img = styled.Image`
  height: 250px;
  width: 100%;
`;

export const Footer = styled.View`
  width: 100%;
  gap: 8px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.borderGray};
  padding-top: 10px;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 20px;
  color: ${({ theme }) => theme.textPrimary};
`;

export const Description = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.iconGray};
  flex: 1;
  flex-wrap: wrap;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.iconPrimary};
`;
