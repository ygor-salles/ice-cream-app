import { TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { Feather } from '@expo/vector-icons';

import { colors } from '~styles/constants';
import { ToastEnum } from '~types/index';

import { Container, Description, styles } from './styles';

enum ToastPositionEnum {
  Top,
  Bottom,
}

interface ToastProps {
  open: boolean;
  message: string;
  type: ToastEnum;
  position?: ToastPositionEnum;
  removeToast: () => void;
}

export function Toast({
  message,
  open,
  removeToast,
  type,
  position = ToastPositionEnum.Top,
}: ToastProps) {
  const positionY = useSharedValue(position === ToastPositionEnum.Top ? -100 : 100);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(positionY.value) }],
  }));

  if (open) {
    if (position === ToastPositionEnum.Top) {
      positionY.value = 0;
    }
    if (position === ToastPositionEnum.Bottom) {
      positionY.value = -16;
    }
  }

  if (!open) {
    if (position === ToastPositionEnum.Top) {
      positionY.value = -100;
    }
    if (position === ToastPositionEnum.Bottom) {
      positionY.value = 100;
    }
  }

  return (
    <Animated.View
      style={[
        styles.commonToastStyle,
        position === ToastPositionEnum.Top ? styles.topToastStyle : styles.bottomToastStyle,
        animatedStyle,
      ]}
    >
      <Description>{message}</Description>
      <TouchableOpacity onPress={removeToast}>
        <Feather name="x" size={22} color={colors.WHITE} />
      </TouchableOpacity>
    </Animated.View>
  );
}
