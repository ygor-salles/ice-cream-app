import { Text as TextNative } from 'react-native';

import styled, { css } from 'styled-components/native';

import {
  getBorderButton,
  getBackgroundButton,
  getTextButton,
  buttonThemes,
} from '~constants/ButtonThemes';
import { colors, globalStyles } from '~styles/constants';
import { ThemeNameProps } from '~types/index';

interface ThemeButtonProps extends ThemeNameProps {
  themeButton: string;
}

export const Touchable = styled.TouchableOpacity<ThemeButtonProps>`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px;
  border-radius: 2px;
  border-width: ${props => (props.themeButton === buttonThemes.OUTLINED ? '1px' : 0)};

  ${({ themeName, themeButton }) =>
    themeName &&
    themeButton &&
    css`
      background-color: ${getBackgroundButton(themeName, themeButton)};
      border-color: ${getBorderButton(themeName, themeButton)};
    `}

  ${({ themeButton }) => themeButton !== buttonThemes.OUTLINED && globalStyles.SHADOW}
`;

export const Text = styled(TextNative)<ThemeButtonProps>`
  font-weight: 400;
  font-size: 16px;

  ${({ themeButton, themeName }) =>
    themeButton && themeName
      ? css`
          color: ${getTextButton(themeName, themeButton)};
        `
      : css`
          color: ${colors.WHITE};
        `}
`;
