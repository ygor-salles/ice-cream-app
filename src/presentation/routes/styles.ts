import { StyleSheet } from 'react-native';

import { colors } from '@styles/constants';

export const styles = StyleSheet.create({
  drawer: {
    backgroundColor: colors.PURPLE_PRIMARY,
    width: 230,
  },
  label: {
    color: colors.WHITE,
  },
  icon: {
    color: colors.WHITE,
  },
  header: {
    backgroundColor: colors.PURPLE_PRIMARY,
  },
  headerTitle: {
    color: colors.WHITE,
  },
  headerIconLeft: {
    marginLeft: 12,
  },
  headerIconRight: {
    marginRight: 12,
  },
});
