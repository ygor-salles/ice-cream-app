import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';

import { globalStyles } from '~styles/constants';

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  ${globalStyles.OVERLAY}
`;

export const DialogAnimation = styled(Animated.View)`
  width: 80%;
`;
