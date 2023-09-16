import styled from 'styled-components/native';

import { Icon as IconComp } from '../Icon';

export const TextFoot = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.theme.textWhite};
`;

export const Icon = styled(IconComp)`
  font-size: 24px;
  color: ${props => props.theme.iconWhite};
`;
