import { useState } from 'react';
import { useController } from 'react-hook-form';

import { Feather } from '@expo/vector-icons';

import { Row } from '~components/Row';
import { useThemeContext } from '~hooks/useThemeContext';
import { colors } from '~styles/constants';

import { Label, ValueText, WrapperTouch } from '../styles';
import { ModalOption } from './ModalOptions';
import { SelectFieldProps } from './types';

export function SelectField({
  control,
  label,
  name,
  disabled,
  placeholder,
  required,
  styleTextLabel,
  variant = 'filled',
  ...rest
}: SelectFieldProps) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, name });

  const { themeName } = useThemeContext();

  const [showModal, setShowModal] = useState(false);

  const valueField = () => {
    if (value) return value;
    if (disabled) return '';
    if (placeholder && !disabled) return placeholder;
    return 'Selecione';
  };

  return (
    <>
      <WrapperTouch
        disabled={disabled}
        error={!!error}
        themeName={themeName}
        variant={variant}
        onPress={() => setShowModal(true)}
        {...rest}
      >
        <Label themeName={themeName} error={!!error} disabled={disabled} style={styleTextLabel}>
          {required ? `${label} *` : label}
        </Label>
        <Row>
          <ValueText isValue={!!value} themeName={themeName}>
            {valueField()}
          </ValueText>
          <Feather name="chevron-down" size={16} color={colors.GRAY_500} />
        </Row>
      </WrapperTouch>
      <ModalOption themeName={themeName} show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
