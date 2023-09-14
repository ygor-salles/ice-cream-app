import { Dimensions } from 'react-native';

import styled, { css } from 'styled-components/native';

const { width } = Dimensions.get('window');

interface IsHorizontalProps {
  isHorizontal?: boolean;
}

interface WrapperCardProps extends IsHorizontalProps {
  firstItem: boolean;
  lastItem: boolean;
}

export const Container = styled.View<IsHorizontalProps>`
  ${({ isHorizontal }) =>
    isHorizontal
      ? css`
          flex: 1;
          padding-bottom: 16px;
          justify-content: center;
          align-items: center;
        `
      : css`
          padding-horizontal: 16px;
        `}
`;

export const WrapperCard = styled.View<WrapperCardProps>`
  ${({ isHorizontal, firstItem, lastItem }) =>
    isHorizontal
      ? css`
          width: ${width * 0.8}px;
          margin-left: ${firstItem ? 16 : 0}px;
          margin-right: ${lastItem ? 16 : 0}px;
        `
      : css`
          margin-bottom: ${lastItem ? 16 : 0}px;
        `}
`;

export const Presentation = styled.Text<IsHorizontalProps>`
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  font-size: 18px;

  ${({ isHorizontal }) =>
    isHorizontal
      ? css`
          padding-horizontal: 16px;
          padding-vertical: 16px;
        `
      : css`
          padding-vertical: 16px;
        `}
`;

export const Separator = styled.View<IsHorizontalProps>`
  ${({ isHorizontal }) =>
    isHorizontal
      ? css`
          margin-left: 16px;
        `
      : css`
          margin-bottom: 16px;
        `}
`;
