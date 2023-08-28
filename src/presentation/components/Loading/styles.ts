import styled from 'styled-components/native';

import { globalStyles } from '~styles/constants';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${globalStyles.OVERLAY}
`;

export const Spinner = styled.ActivityIndicator``;

export const Description = styled.Text`
  margin-top: 8px;

  font-weight: 400;
  font-size: 26px;
  text-align: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.textWhite};
`;
