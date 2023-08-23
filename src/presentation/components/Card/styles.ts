import styled, { css } from 'styled-components/native';

import { globalStyles } from '~styles/constants';

interface ContainerProps {
  bgColor?: string;
}

export const Container = styled.View<ContainerProps>`
  padding: 16px;
  background-color: ${props => props.theme.bg};
  border-radius: 4px;

  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}

  ${globalStyles.SHADOW}
`;
