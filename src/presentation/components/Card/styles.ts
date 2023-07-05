/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components/native';

import { colors, globalStyles } from '~styles/constants';
import { ThemeNameProps } from '~types/index';

interface ContainerProps extends ThemeNameProps {
  bgColor?: string;
}

export const Container = styled.View<ContainerProps>`
  padding: 16px;
  background-color: ${props => (props.themeName === 'light' ? colors.WHITE : colors.DARK_200)};
  border-radius: 4px;

  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}

  ${globalStyles.SHADOW}
`;
