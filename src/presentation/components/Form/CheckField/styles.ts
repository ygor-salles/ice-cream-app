import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

interface CheckboxProps {
  isCheck: boolean;
}

interface LabelProps {
  disabled?: boolean;
}

export const Checkbox = styled.TouchableOpacity<CheckboxProps>`
  width: 22px;
  height: 22px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  border-width: 1px;
  border-color: ${props => props.theme.border};
  background-color: ${({ theme, isCheck }) => (isCheck ? theme.primary : theme.bg)};
`;

export const CheckboxInactive = styled.View`
  width: 22px;
  height: 22px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  border-width: 1px;
  border-color: ${props => props.theme.border};
  background-color: ${({ theme }) => theme.disabled};
`;

export const Label = styled.Text<LabelProps>`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme, disabled }) => (disabled ? theme.textDisabled : theme.textPrimary)};
`;

export const Icon = styled(Feather)`
  font-weight: 36px;
  color: ${props => props.theme.iconWhite};
`;
