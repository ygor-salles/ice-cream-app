import styled, { css } from 'styled-components/native';

interface SRowProps {
  gapNum?: number;
}

export const SRow = styled.View<SRowProps>`
  flex-direction: row;
  align-items: center;

  ${({ gapNum }) =>
    gapNum
      ? css`
          gap: ${gapNum}px;
        `
      : css`
          justify-content: space-between;
        `}
`;
