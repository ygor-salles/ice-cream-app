import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';

import { colors, globalStyles } from '~styles/constants';
import { ThemeNameProps } from '~types/index';

const windowHeight = Dimensions.get('window').height;

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  ${globalStyles.OVERLAY}
`;

export const Dialog = styled(Animated.View)`
  max-height: ${windowHeight * 0.5}px;
  width: 80%;
  position: absolute;
  align-self: center;
  top: ${windowHeight * 0.2}px;
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

export const Scroll = styled.ScrollView<ThemeNameProps>`
  background-color: ${props => (props.themeName === 'light' ? colors.WHITE : colors.DARK_200)};
  padding: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Title = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: ${colors.WHITE};
`;
