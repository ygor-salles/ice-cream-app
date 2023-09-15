/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlattenInterpolation } from 'styled-components';
import styled, { css } from 'styled-components/native';

import { Card } from '../Card';
import { Icon } from '../Icon';

interface HeaderProps {
  customStyles: FlattenInterpolation<any>;
}

export const Body = styled.View`
  padding: 12px;
`;

export const Container = styled(Card)`
  padding: 0;
`;

export const Header = styled.TouchableOpacity<HeaderProps>`
  ${({ customStyles }) =>
    customStyles ??
    css`
      padding: 12px;
      background-color: ${({ theme }) => theme.bg};
      border-radius: 4px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `}
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

export const SIcon = styled(Icon)`
  color: ${({ theme }) => theme.text};
`;
