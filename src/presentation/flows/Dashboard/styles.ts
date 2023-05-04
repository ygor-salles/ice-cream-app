import styled from 'styled-components/native';

import { colors } from '@styles/constants';

export const Description = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 12px;
`;

export const Block = styled.View`
  height: 200px;
  width: 100%;
  background-color: ${colors.WHITE};
  margin: 10px 0px;
`;
