import styled, { css } from 'styled-components/native';

interface SColumnProps {
  gap: number;
}

export const SColumn = styled.View<SColumnProps>`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}px;
    `}
`;

export const SColumnButton = styled.TouchableOpacity<SColumnProps>`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}px;
    `}
`;
