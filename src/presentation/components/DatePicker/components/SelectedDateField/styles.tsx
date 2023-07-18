/* eslint-disable no-nested-ternary */
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

interface WrapperProps {
  isFocus: boolean;
  hasTwoInput: boolean;
}

interface SelectedDateTextProps {
  isValue: undefined | { dateString: string };
}

export const Wrapper = styled.View<WrapperProps>`
  height: 56px;
  border: 1px;
  padding: 8px 8px 8px 16px;
  width: ${props => (props.hasTwoInput ? '50%' : '100%')};

  border-width: ${props => (props.isFocus ? '1px' : '2px')};
  border-color: ${({ isFocus, theme }) => (isFocus ? theme.borderGray : theme.primary)};
`;

export const Label = styled.Text`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.textPrimary};
`;

export const SelectedDateText = styled.Text<SelectedDateTextProps>`
  padding: 2px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  flex: 1;

  color: ${({ theme, isValue }) => (isValue ? theme.text : theme.textPlaceholder)};
`;

export const IconClose = styled(Feather)`
  font-size: 24px;
  color: ${props => props.theme.iconGray};
`;

export const IconCalendar = styled(Feather)`
  font-size: 16px;
  color: ${props => props.theme.iconGray};
`;
