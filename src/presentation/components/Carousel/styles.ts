import { Dimensions } from 'react-native';

import styled, { css } from 'styled-components/native';

const { width } = Dimensions.get('window');

interface WrapperChildProps {
  dataLength: number;
  numPadding: number;
}

interface IndicatorProps {
  isActive: boolean;
}

export const WrapperChild = styled.View<WrapperChildProps>`
  width: ${width * 1}px;
  background-color: transparent;
  z-index: 2;

  ${({ numPadding }) =>
    numPadding &&
    css`
      padding: ${numPadding}px;
    `};
`;

export const Wrapper = styled.View`
  margin-top: 40px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Indicator = styled.View<IndicatorProps>`
  background-color: ${({ theme, isActive }) => (isActive ? theme.primary : theme.bgOpacity)};
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.primary};
`;
