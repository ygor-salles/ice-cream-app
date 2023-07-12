import { colors } from '~styles/constants';

export const buttonThemes = {
  PRIMARY: 'PRIMARY',
  OUTLINED: 'OUTLINED',
  OUTLINED_WHITE: 'OUTLINED_WHITE',
  SUCCESS: 'SUCCESS',
  DANGER: 'DANGER',
  ALERT: 'ALERT',
  WHITE: 'WHITE',
};

type ButtonThemes = typeof buttonThemes;

export const getBackgroundButton = (themeName: 'light' | 'dark', themeButton: string) => {
  const backgroundButton: ButtonThemes = {
    PRIMARY: colors.PURPLE_PRIMARY,
    OUTLINED: themeName === 'light' ? colors.WHITE : colors.DARK_200,
    OUTLINED_WHITE: 'transparent',
    SUCCESS: colors.GREEN,
    DANGER: colors.RED,
    ALERT: colors.YELLOW,
    WHITE: colors.WHITE,
  };

  return backgroundButton[themeButton] || colors.PURPLE_PRIMARY;
};

export const getTextButton = (themeName: 'light' | 'dark', themeButton: string) => {
  const textButton: ButtonThemes = {
    PRIMARY: colors.WHITE,
    OUTLINED: themeName === 'light' ? colors.PURPLE_PRIMARY : colors.WHITE,
    OUTLINED_WHITE: colors.WHITE,
    SUCCESS: colors.WHITE,
    DANGER: colors.WHITE,
    ALERT: colors.TEXT,
    WHITE: colors.TEXT,
  };

  return textButton[themeButton] || colors.WHITE;
};

export const getBorderButton = (themeName: 'light' | 'dark', themeButton: string) => {
  if (themeButton === buttonThemes.OUTLINED && themeName === 'light') {
    return colors.PURPLE_PRIMARY;
  }
  if (themeButton === buttonThemes.OUTLINED && themeName === 'dark') {
    return colors.WHITE;
  }
  if (themeButton === buttonThemes.OUTLINED_WHITE) {
    return colors.WHITE;
  }
  return undefined;
};
