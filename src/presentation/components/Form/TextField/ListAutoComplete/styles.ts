import styled from 'styled-components/native';

import { Card } from '~components/Card';
import { colors } from '~styles/constants';

interface ContentItemProps {
  bgBlue: boolean;
}

export const Container = styled(Card)`
  max-height: 384px;
  width: 100%;
  padding: 0;
  position: absolute;
  border-radius: 0;
  margin-top: 68px;
  z-index: 1;
`;

export const ContentItem = styled.TouchableOpacity<ContentItemProps>`
  padding: 14px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.bgBlue ? colors.PURPLE_PRIMARY : colors.WHITE)};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: ${colors.GRAY_300};

  margin-left: 12px;
`;
