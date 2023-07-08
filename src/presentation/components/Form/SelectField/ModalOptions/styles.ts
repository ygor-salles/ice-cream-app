import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

import styled, { css } from 'styled-components/native';

import { colors, globalStyles } from '~styles/constants';
import { ThemeNameProps } from '~types/index';

const windowHeight = Dimensions.get('window').height;

interface ItemProps extends ThemeNameProps {
  lastItem?: boolean;
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

export const Dialog = styled(Animated.View)`
  width: 80%;
  height: 50%;
  position: absolute;
  align-self: center;
  top: ${windowHeight * 0.2}px;
`;

export const Header = styled.View`
  padding: 16px;
  background-color: ${colors.PURPLE_PRIMARY};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Scroll = styled.ScrollView`
  background-color: ${colors.WHITE};
  padding: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Title = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: ${colors.WHITE};
`;

export const Item = styled.TouchableOpacity<ItemProps>`
  padding: 16px;
  background-color: ${props => (props.themeName === 'light' ? colors.WHITE : colors.DARK_200)};
  border-bottom-width: 0.5px;
  border-bottom-color: ${colors.GRAY_200};

  ${({ lastItem }) =>
    lastItem &&
    css`
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    `}
`;

export const Description = styled.Text<ThemeNameProps>`
  font-weight: 400;
  font-size: 16px;
  color: ${props => (props.themeName === 'light' ? colors.TEXT : colors.WHITE)};
`;
