import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

import { Icon } from '~components/Icon';

const { width } = Dimensions.get('window');

interface LeftIconProps {
  isActive: boolean;
}

export const LeftIcon = styled(Icon)<LeftIconProps>`
  border-right-color: ${props => props.theme.iconGray};
  border-right-width: 0.5px;
  margin-left: ${width * 0.675}px;
  padding-right: 10px;

  font-size: 24px;
  color: ${({ isActive, theme }) => (isActive ? theme.iconGray : theme.iconInactive)};
`;

export const RightIcon = styled(Icon)`
  border-left-color: ${props => props.theme.iconGray};
  border-left-width: 0.5px;
  margin-left: -${width * 0.05}px;
  padding-left: 10px;

  font-size: 24px;
  color: ${props => props.theme.iconGray};
`;
