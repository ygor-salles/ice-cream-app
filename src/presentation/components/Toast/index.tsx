import { TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { colors } from '~styles/constants';
import { ToastEnum } from '~types/index';

import { Icon } from '../Icon';
import { Description, styles } from './styles';

export enum ToastPositionEnum {
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
        type === ToastEnum.success ? styles.success : styles.error,
        animatedStyle,
      ]}
    >
      <Description>{message}</Description>
      <TouchableOpacity onPress={removeToast}>
        <Icon name="x" size={22} color={colors.WHITE} />
      </TouchableOpacity>
    </Animated.View>
  );
}
