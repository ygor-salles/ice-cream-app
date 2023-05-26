import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';

import { colors } from '@styles/constants';

export const Container = styled(Animated.View)`
  width: 224px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${colors.PURPLE_PRIMARY};
`;

export const WrapperTop = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const WrapperFooter = styled.View`
  height: 30px;
`;

export const FullScreenOverlay = styled.View`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.SHADOW};
`;

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: 0,
    bottom: 0,

    backgroundColor: colors.PURPLE_PRIMARY,
    width: 224,
  },
});
