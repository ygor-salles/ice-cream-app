import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';

import { colors } from '@styles/constants';

export const Container = styled(Animated.View)`
  width: 224px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${colors.PURPLE_PRIMARY};
`;
