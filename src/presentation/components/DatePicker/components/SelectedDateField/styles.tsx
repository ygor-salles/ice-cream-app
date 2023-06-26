import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { colors } from '~styles/constants';

interface WrapperProps {
  isFocus: boolean;
}

export const Wrapper = styled.View<WrapperProps>`
  height: 56px;
  border: 1px;
  padding: 8px 8px 8px 16px;
  width: 50%;

  border-width: ${props => (props.isFocus ? '1px' : '2px')};
  border-color: ${props => (props.isFocus ? colors.GRAY_500 : colors.PURPLE_PRIMARY)};
`;

export const Label = styled.Text`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.DARK_200};
`;

export const SelectedDateContent = styled.View`
  flex-direction: row;
`;

interface SelectedDateTextProps {
  isValue: undefined | { dateString: string };
}

export const SelectedDateText = styled.Text<SelectedDateTextProps>`
  padding: 2px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  flex: 1;

  color: ${props => (props.isValue?.dateString ? colors.TEXT : colors.GRAY_300)};
`;

export const ClearIcon = styled(Feather)`
  align-self: flex-end;
`;
