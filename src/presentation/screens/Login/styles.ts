import { StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

import { Button, TextField } from '~components/index';
import { colors, globalStyles } from '~styles/constants';

export const Container = styled.View`
  flex: 1;
`;

export const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 1;
`;

export const Title = styled.Text`
  font-weight: 400;
  font-size: 32px;
  color: ${colors.WHITE};
`;

export const WrapperForm = styled.View`
  margin-top: 52px;
  width: 80%;
  gap: 18px;
`;

export const SFeather = styled(Feather)`
  background-color: ${colors.WHITE};
  padding: 10px;
  border-radius: 40px;
  color: ${colors.PURPLE_PRIMARY};

  ${globalStyles.SHADOW}
`;

export const SLinearGradient = styled(LinearGradient)`
  flex: 1;
  width: 100%;
`;

export const STextField = styled(TextField)`
  border-color: ${colors.WHITE};
`;

export const SButton = styled(Button)`
  margin-top: 42px;
  margin-bottom: 42px;
`;

export const styles = StyleSheet.create({
  textLabel: {
    color: colors.WHITE,
    fontSize: 18,
  },
  textInput: {
    color: colors.WHITE,
  },
});
