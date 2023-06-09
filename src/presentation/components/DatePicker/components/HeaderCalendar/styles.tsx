import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const HeaderWrapper = styled.View`
  position: absolute;
  justify-content: center;
  top: 0;
  height: 44px;
  right: ${width * 0.12}px;
  width: ${width * 0.775}px;
`;

export const HeaderText = styled.Text`
  padding-left: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.text};
`;
