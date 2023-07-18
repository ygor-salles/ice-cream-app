import { useState } from 'react';
import { useController } from 'react-hook-form';
import { View } from 'react-native';

import { Row } from '~components/Row';

import { Error, Label, ValueText, WrapperTouch } from '../styles';
import { ModalOption } from './ModalOptions';
import { Icon } from './styles';
import { SelectFieldProps } from './types';

export function SelectField({
  control,
  label,
  name,
  disabled,
  options,
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

  const [showModal, setShowModal] = useState(false);

  const valueField = () => {
    if (value) return value;
    if (disabled) return '';
    if (placeholder && !disabled) return placeholder;
    return 'Selecione';
  };

  const onSelect = (item: string) => {
    onChange(item);
    setShowModal(false);
  };

  return (
    <>
      <View>
        <WrapperTouch
          disabled={disabled}
          error={!!error}
          variant={variant}
          onPress={() => setShowModal(true)}
          {...rest}
        >
          <Label error={!!error} disabled={disabled} style={styleTextLabel}>
            {required ? `${label} *` : label}
          </Label>
          <Row>
            <ValueText isValue={!!value}>{valueField()}</ValueText>
            <Icon name="chevron-down" />
          </Row>
        </WrapperTouch>
        {!!error && <Error>{error.message}</Error>}
      </View>
      <ModalOption
        show={showModal}
        onClose={() => setShowModal(false)}
        title={label}
        options={options}
        onSelect={onSelect}
      />
    </>
  );
}
