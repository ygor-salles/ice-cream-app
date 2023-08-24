import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { Row } from '~components/Row';

export const Icon = styled(Feather)`
  font-size: 20px;
  color: ${props => props.theme.iconGray};
`;

export const SRow = styled(Row)`
  flex-wrap: wrap;
  width: 95%;
`;

export const Touch = styled.TouchableOpacity`
  flex: 1;
`;
