import styled from 'styled-components/native';

import { colors } from '@styles/constants';

export const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 5px 15px;
  background-color: ${colors.PURPLE_PRIMARY};

  border-radius: 4px;
  border: solid 1px ${colors.WHITE};
`;

export const Text = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: ${colors.WHITE};
`;
