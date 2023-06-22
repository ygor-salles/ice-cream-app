import styled from 'styled-components/native';

import { colors, globalStyles } from '~styles/constants';

export const Touchable = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px;
  background-color: ${colors.WHITE};

  border-radius: 2px;

  ${globalStyles.SHADOW}
`;

export const Text = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: ${colors.PURPLE_PRIMARY};
`;
