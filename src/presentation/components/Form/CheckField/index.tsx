/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, useController } from 'react-hook-form';

import { Row } from '~components/Row';

import { Label, Checkbox, Icon, CheckboxInactive } from './styles';

interface CheckFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  disabled?: boolean;
}

export function CheckField({ name, control, label, disabled }: CheckFieldProps) {
  const {
    field: { onChange, value },
  } = useController({ control, name });

  if (disabled) {
    return (
      <Row gap={8}>
        <CheckboxInactive>{value && <Icon name="check" />}</CheckboxInactive>
        <Label disabled>{label}</Label>
      </Row>
    );
  }

  const onPress = () => onChange(!value);

  return (
    <Row gap={8} isButton onPress={onPress}>
      <Checkbox isCheck={value} onPress={onPress}>
        {value && <Icon name="check" />}
      </Checkbox>
      <Label>{label}</Label>
    </Row>
  );
}
