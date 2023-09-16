import styled from 'styled-components/native';

import { Icon as IconComp } from '~components/Icon';

export const Icon = styled(IconComp)`
  font-size: 16px;
  color: ${props => props.theme.iconGray};
`;
