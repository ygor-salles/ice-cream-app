import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

import { colors } from '~styles/constants';

export const Container = styled.View`
  gap: 10px;
  justify-content: center;
`;

export const styles = StyleSheet.create({
  inputFieldBottom: {
    borderWidth: 1,
    borderColor: colors.GRAY_300,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});
