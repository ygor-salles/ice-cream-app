import { Platform } from 'react-native';
import { Keyframe } from 'react-native-reanimated';

import { css } from 'styled-components/native';

export const colors = {
  PURPLE_PRIMARY: '#9c27b0',
  PURPLE_PRIMARY_DARK: '#D944C2',
  PURPLE_PRIMARY_OPACITY: 'rgba(156, 39, 176, 0.2)',
  PURPLE_PRIMARY_DARK_OPACITY: 'rgba(217, 68, 194, 0.2)',

  GRAY_100: '#EBEBEB',
  GRAY_200: '#dedede',
  GRAY_300: '#ccc',
  GRAY_400: '#C0C0C0',
  GRAY_500: '#909090',
  GRAY_600: '#808080',
  GRAY_700: '#606060',
  GRAY_800: '#333',
  GRAY_900: '#212121',

  WHITE: '#fff',

  SHADOW: '#000',

  DARK_200: '#1F2829',
  DARK_500: '#181823',
  DARK_800: '#121214',

  RED: '#E52E4D',
  RED_ERROR: '#EE3524',
  RED_DARK: '#B82C25',

  GREEN: '#33CC95',

  YELLOW: '#FDFD96',

  // TEXT: '#1a1a1a',
  TEXT: '#041E42',
  OVERLAY: '#00000080',
};

export type Theme = {
  bgScreen: string;
  bg: string;
  bgOpacity: string;

  text: string;
  textPrimary: string;
  textDisabled: string;
  textPlaceholder: string;
  textError: string;
  textWhite: string;

  border: string;
  borderGray: string;
  borderOutlined: string;

  iconGray: string;
  iconInactive: string;
  iconText: string;
  iconPrimary: string;
  iconWhite: string;

  primary: string;
  success: string;
  danger: string;
  alert: string;
  disabled: string;
};

export const themeLight: Theme = {
  bgScreen: colors.GRAY_200,
  bg: colors.WHITE,
  bgOpacity: colors.PURPLE_PRIMARY_OPACITY,

  text: colors.TEXT,
  textPrimary: colors.PURPLE_PRIMARY,
  textDisabled: colors.GRAY_400,
  textPlaceholder: colors.GRAY_500,
  textError: colors.RED_ERROR,
  textWhite: colors.WHITE,

  border: colors.PURPLE_PRIMARY,
  borderGray: colors.GRAY_300,
  borderOutlined: colors.PURPLE_PRIMARY,

  iconGray: colors.GRAY_500,
  iconInactive: colors.GRAY_300,
  iconText: colors.TEXT,
  iconPrimary: colors.PURPLE_PRIMARY,
  iconWhite: colors.WHITE,

  primary: colors.PURPLE_PRIMARY,
  success: colors.GREEN,
  danger: colors.RED,
  alert: colors.YELLOW,
  disabled: colors.GRAY_400,
};

export const themeDark: Theme = {
  bgScreen: colors.DARK_500,
  bg: colors.DARK_200,
  bgOpacity: colors.PURPLE_PRIMARY_DARK_OPACITY,

  text: colors.WHITE,
  textPrimary: colors.PURPLE_PRIMARY_DARK,
  textDisabled: colors.GRAY_700,
  textPlaceholder: colors.GRAY_500,
  textError: colors.RED_ERROR,
  textWhite: colors.WHITE,

  border: colors.GRAY_300,
  borderGray: colors.GRAY_300,
  borderOutlined: colors.WHITE,

  iconGray: colors.GRAY_500,
  iconInactive: colors.GRAY_500,
  iconText: colors.WHITE,
  iconPrimary: colors.PURPLE_PRIMARY_DARK,
  iconWhite: colors.WHITE,

  primary: colors.PURPLE_PRIMARY,
  success: colors.GREEN,
  danger: colors.RED_DARK,
  alert: colors.YELLOW,
  disabled: colors.GRAY_400,
};

export const globalStyles = {
  SHADOW: css`
    ${Platform.select({
      ios: css`
        shadow-color: ${colors.SHADOW};
        shadow-offset: 0px 2px;
        shadow-opacity: 0.2;
        shadow-radius: 4px;
      `,
      android: css`
        elevation: 4;
      `,
    })}
  `,
  OVERLAY: css`
    background-color: ${colors.OVERLAY};
  `,
  WRAP_FIELD_FILLED: css`
    padding: 8px 12px;
    border-width: 1px;
    border-color: ${props => props.theme.border};
    border-radius: 4px;
  `,
  WRAP_FIELD_STD: css`
    border-bottom-width: 1px;
    background-color: transparent;
    border-color: ${props => props.theme.border};
  `,
  FIELD_DISABLED: css`
    background-color: ${props => props.theme.disabled};
  `,
  FIELD_ERROR: css`
    border-color: ${props => props.theme.textError};
  `,
  LABEL_DISABLED: css`
    color: ${props => props.theme.textDisabled};
  `,
  LABEL_ERROR: css`
    color: ${props => props.theme.textError};
    font-weight: bold;
  `,
};

export const globalKeyFrames = {
  ENTER_BOTTOM: new Keyframe({
    from: {
      // opacity: 0,
      transform: [{ translateY: -100 }],
    },
    to: {
      // opacity: 1,
      transform: [{ translateY: 0 }],
    },
  }).duration(125),
  ENTER_TOP: new Keyframe({
    from: {
      // opacity: 0,
      transform: [{ translateY: 100 }],
    },
    to: {
      // opacity: 1,
      transform: [{ translateY: 0 }],
    },
  }).duration(125),
  ENTER_LEFT: new Keyframe({
    from: {
      // opacity: 0,
      transform: [{ translateX: 100 }],
    },
    to: {
      // opacity: 1,
      transform: [{ translateX: 0 }],
    },
  }).duration(125),
  ENTER_RIGHT: new Keyframe({
    from: {
      // opacity: 0,
      transform: [{ translateX: -100 }],
    },
    to: {
      // opacity: 1,
      transform: [{ translateX: 0 }],
    },
  }).duration(125),
  EXIT_BOTTOM: new Keyframe({
    from: {
      // opacity: 1,
      transform: [{ translateY: 0 }],
    },
    to: {
      // opacity: 0,
      transform: [{ translateY: 100 }],
    },
  }).duration(125),
  EXIT_TOP: new Keyframe({
    from: {
      // opacity: 1,
      transform: [{ translateY: 0 }],
    },
    to: {
      // opacity: 0,
      transform: [{ translateY: -100 }],
    },
  }).duration(125),
  EXIT_LEFT: new Keyframe({
    from: {
      // opacity: 1,
      transform: [{ translateX: 0 }],
    },
    to: {
      // opacity: 0,
      transform: [{ translateX: -100 }],
    },
  }).duration(125),
  EXIT_RIGHT: new Keyframe({
    from: {
      // opacity: 1,
      transform: [{ translateX: 0 }],
    },
    to: {
      // opacity: 0,
      transform: [{ translateX: 100 }],
    },
  }).duration(125),
  ENTER_TOP_SLOW: new Keyframe({
    from: {
      opacity: 0,
      transform: [{ translateY: 50 }],
    },
    to: {
      opacity: 1,
      transform: [{ translateY: 0 }],
    },
  }).duration(350),
  EXIT_BOTTOM_SLOW: new Keyframe({
    from: {
      opacity: 0,
      transform: [{ translateY: 0 }],
    },
    to: {
      opacity: 1,
      transform: [{ translateY: 50 }],
    },
  }).duration(380),
};
