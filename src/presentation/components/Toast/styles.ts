import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

import { colors } from '~styles/constants';

export const Description = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.textWhite};

  flex-wrap: wrap;
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
    top: 0,
    right: 0,
    left: 0,
    zIndex: 100,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  success: {
    backgroundColor: colors.GREEN,
  },
  error: {
    backgroundColor: colors.RED_ERROR,
  },
});
