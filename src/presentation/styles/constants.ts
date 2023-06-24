import { Platform } from 'react-native';
import { Keyframe } from 'react-native-reanimated';

import { css } from 'styled-components/native';

export const colors = {
  PURPLE_PRIMARY: '#9c27b0',

  GRAY_100: '#EBEBEB',
  GRAY_200: '#dedede',
  GRAY_300: '#ccc',
  GRAY_500: '#606060',
  GRAY_600: '#808080',
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

  TEXT: '#1a1a1a',
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
};
