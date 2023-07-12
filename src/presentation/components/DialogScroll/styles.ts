import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';

import { colors, globalStyles } from '~styles/constants';

const windowHeight = Dimensions.get('window').height;

interface DialogProps {
  noHeaderDefault: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  ${globalStyles.OVERLAY}
`;

export const Dialog = styled(Animated.View)<DialogProps>`
  max-height: ${({ noHeaderDefault }) =>
    noHeaderDefault ? windowHeight * 0.8 : windowHeight * 0.6}px;
  width: 85%;
  position: absolute;
  align-self: center;
  top: ${({ noHeaderDefault }) => (noHeaderDefault ? windowHeight * 0.1 : windowHeight * 0.2)}px;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 4px;
`;

export const Header = styled.View`
  padding: 14px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.PURPLE_PRIMARY};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Scroll = styled.ScrollView`
  background-color: ${props => props.theme.bg};
`;

export const Title = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: ${colors.WHITE};
`;

export const Footer = styled.View`
  padding: 8px;
  background-color: ${colors.PURPLE_PRIMARY};
`;
