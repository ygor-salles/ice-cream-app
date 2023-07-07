import { StyleSheet, Dimensions } from 'react-native';

import styled, { css } from 'styled-components/native';

import { colors, globalStyles } from '~styles/constants';
import { ThemeNameProps } from '~types/index';

interface ItemProps extends ThemeNameProps {
  lastItem?: boolean;
}

const windowWidth = Dimensions.get('window').width;

export const Header = styled.View`
  padding: 16px;
  background-color: ${colors.PURPLE_PRIMARY};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Title = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: ${colors.WHITE};
`;

export const Item = styled.View<ItemProps>`
  padding: 16px;
  background-color: ${props => (props.themeName === 'light' ? colors.WHITE : colors.DARK_200)};
  border-bottom-width: 1px;
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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.OVERLAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: colors.WHITE,
    width: windowWidth * 0.8,
  },
});
