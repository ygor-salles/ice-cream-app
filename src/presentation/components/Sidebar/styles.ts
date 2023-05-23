import styled from 'styled-components/native';

import { colors } from '@styles/constants';

export const Container = styled.View`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;

  background-color: ${colors.PURPLE_PRIMARY};
  width: 224px;
`;

export const WrapperTop = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const WrapperFooter = styled.View`
  height: 30px;
`;
