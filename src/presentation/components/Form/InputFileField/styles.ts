import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { globalStyles } from '~styles/constants';

interface LabelProps {
  error: boolean;
  disabled: boolean;
}

interface IconProps {
  error: boolean;
  disabled: boolean;
}

export const Label = styled.Text<LabelProps>`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.textPrimary};

  ${({ disabled }) => disabled && globalStyles.LABEL_DISABLED}

  ${({ error }) => error && globalStyles.LABEL_ERROR}
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: 16px;
  color: ${props => props.theme.iconPrimary};

  ${({ disabled }) => disabled && globalStyles.LABEL_DISABLED}
  ${({ error }) => error && globalStyles.LABEL_ERROR}
`;

export const Img = styled.Image`
  margin-top: 16px;
  width: 300px;
  height: 300px;
  position: relative;
`;

export const Close = styled(Feather)`
  color: ${props => props.theme.iconPrimary};
  font-size: 26px;

  top: 10px;
  right: 10px;
  position: absolute;
  z-index: 1;
`;
