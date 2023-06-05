import styled from 'styled-components/native';

import { colors } from '@styles/constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.WHITE};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;
