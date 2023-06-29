import styled, { css } from 'styled-components/native';

import { colors } from '~styles/constants';

interface WrapperProps {
  themeName: 'light' | 'dark';
}

interface WrapperFieldProps {
  secondInput?: boolean;
  themeName: 'light' | 'dark';
}

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  flex-direction: row;
  flex: 1;
  padding: 12px;
  background-color: ${props => (props.themeName === 'dark' ? colors.DARK_200 : colors.WHITE)};
`;

export const WrapperField = styled.View<WrapperFieldProps>`
  width: 50%;
  background-color: ${props => (props.themeName === 'dark' ? colors.DARK_200 : colors.WHITE)};

  ${({ secondInput, themeName }) =>
    secondInput
      ? css`
          padding-left: 10px;
          border-left-width: 0.5px;
          border-left-color: ${themeName === 'light' ? colors.GRAY_500 : colors.GRAY_500};
        `
      : css`
          padding-right: 10px;
          border-right-width: 0.5px;
          border-right-color: ${themeName === 'light' ? colors.GRAY_500 : colors.GRAY_500};
        `}
`;
