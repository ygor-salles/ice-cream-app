import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';

import { Button } from '~components/Button';
import { TextApp } from '~components/TextApp';
import { colors } from '~styles/constants';

export const LayoutCalendar = styled(Animated.View)`
  z-index: 1;
  background-color: ${colors.WHITE};
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const WrapperCalendar = styled.View`
  flex: 1;
  padding-horizontal: 32px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.GRAY_300};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  border-bottom-width: 0.5px;
  border-bottom-color: ${colors.GRAY_300};
`;

export const Title = styled(TextApp)`
  font-weight: 500;
  font-size: 16px;
  color: ${colors.PURPLE_PRIMARY};
`;

export const HiddenIcon = styled.View`
  width: 24px;
  height: 24px;
`;

export const SelectedDateWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-color: ${colors.GRAY_300};
  border-bottom-color: ${colors.GRAY_300};
  padding: 16px;
`;

export const DividerHeader = styled.View`
  z-index: 1;
  height: 1px;
  background-color: ${colors.GRAY_300};
  position: absolute;
  top: 44px;
  width: 120%;
`;

export const SButton = styled(Button)`
  padding: 18px;
`;
