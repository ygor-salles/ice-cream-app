import styled, { css } from 'styled-components/native';

interface SRowProps {
  gap: number;
}

export const SRow = styled.View<SRowProps>`
  flex-direction: row;
  align-items: center;

  ${({ gap }) =>
    gap
      ? css`
          gap: ${gap}px;
        `
      : css`
          justify-content: space-between;
        `}
`;

export const SRowButton = styled.TouchableOpacity<SRowProps>`
  flex-direction: row;
  align-items: center;

  ${({ gap }) =>
    gap
      ? css`
          gap: ${gap}px;
        `
      : css`
          justify-content: space-between;
        `}
`;
