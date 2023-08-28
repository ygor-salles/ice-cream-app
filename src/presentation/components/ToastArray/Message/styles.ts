import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

export const Description = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.textWhite};

  flex-wrap: wrap;
`;

export const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    margin: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 24,
    elevation: 6,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
