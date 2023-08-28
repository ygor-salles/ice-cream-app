import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';

import { ToastEnum } from '~types/index';

interface ContainerProps {
  typeToast: ToastEnum;
}

export const Container = styled(Animated.View)<ContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
  background-color: ${({ theme, typeToast }) =>
    typeToast === ToastEnum.success ? theme.success : theme.textError};
`;

export const Description = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.textWhite};
`;

export const styles = StyleSheet.create({
  commonToastStyle: {
    height: 72,
    borderRadius: 8,
    margin: 8,
    padding: 16,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    position: 'absolute',
    right: 0,
    left: 0,
    zIndex: 100,
  },
  topToastStyle: {
    backgroundColor: '#FCFCFC',
    top: 0,
  },
  bottomToastStyle: {
    backgroundColor: '#FFCCCB',
    bottom: 0,
  },
});
