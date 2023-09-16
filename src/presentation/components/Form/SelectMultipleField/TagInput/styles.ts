import styled from 'styled-components/native';

import { Icon as IconComp } from '~components/Icon';

export const Container = styled.View`
  padding: 8px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgOpacity};
`;

export const Label = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;

export const Icon = styled(IconComp)`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;
