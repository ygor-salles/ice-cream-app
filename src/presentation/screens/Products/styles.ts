import styled, { css } from 'styled-components/native';

import { Accordion } from '~components/Accordion';

export const Container = styled.View`
  padding: 16px;
`;

export const headerStyles = css`
  padding: 12px;
  background-color: yellow;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CustomAccordion = styled(Accordion)`
  margin-top: 50px;
`;
