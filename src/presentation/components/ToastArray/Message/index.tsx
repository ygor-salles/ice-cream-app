import { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { colors } from '~styles/constants';
import { ToastEnum } from '~types/index';

import { Description, styles } from './styles';

interface MessageProps {
  message: string;
  typeToast: ToastEnum;
  onHide: () => void;
}

export function Message({ onHide, message, typeToast }: MessageProps) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onHide();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={{
        opacity,
        transform: [
          {
            translateY: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, 0],
            }),
          },
        ],
        backgroundColor: typeToast === ToastEnum.success ? colors.GREEN : colors.RED_ERROR,
        ...styles.wrapper,
      }}
    >
      <Description>{message}</Description>
      <TouchableOpacity onPress={onHide}>
        <Feather name="x" size={22} color={colors.WHITE} />
      </TouchableOpacity>
    </Animated.View>
  );
}
