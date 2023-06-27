import { Dimensions } from 'react-native';

import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { colors } from '~styles/constants';

const { width } = Dimensions.get('window');

export const LeftIcon = styled(Feather)`
  border-right-color: ${colors.GRAY_500};
  border-right-width: 0.5px;
  margin-left: ${width * 0.675}px;
  padding-right: 10px;
`;

export const RightIcon = styled(Feather)`
  border-left-color: ${colors.GRAY_500};
  border-left-width: 0.5px;
  margin-left: -${width * 0.05}px;
  padding-left: 10px;
`;
