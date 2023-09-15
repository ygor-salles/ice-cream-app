import styled, { css } from 'styled-components/native';

import { Accordion } from '../Accordion';

interface CustomAccordionProps {
  mgBottom: number;
  firstItem: boolean;
  lastItem: boolean;
  hasGap: boolean;
}

export const CustomAccordion = styled(Accordion)<CustomAccordionProps>`
  margin-bottom: ${props => props.mgBottom}px;

  ${({ mgBottom, lastItem, firstItem, hasGap }) =>
    hasGap && lastItem
      ? css`
          border-radius: 4px;
        `
      : mgBottom === 0 &&
        css`
          border-top-left-radius: ${firstItem ? 4 : 0}px;
          border-top-right-radius: ${firstItem ? 4 : 0}px;
          border-bottom-left-radius: ${lastItem ? 4 : 0}px;
          border-bottom-right-radius: ${lastItem ? 4 : 0}px;
        `}
`;
