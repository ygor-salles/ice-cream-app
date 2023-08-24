import { useMemo, useState } from 'react';
import { useController } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';

import { Row } from '~components/Row';

import { Error, Label, ValueText, Wrapper } from '../styles';
import { ModalOption } from './ModalOptions';
import { Icon, SRow, Touch } from './styles';
import { TagInput } from './TagInput';
import { SelectMultipleFieldProps } from './types';

export function SelectMultipleField({
  control,
  label,
  name,
  options,
  disabled,
  placeholder,
  required,
  styleTextLabel,
  variant = 'filled',
  ...rest
}: SelectMultipleFieldProps) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, name });

  const [showModal, setShowModal] = useState(false);

  const sortedOptions = useMemo(
    () => options.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)).map(item => item),
    [options],
  );

  const valueField = () => {
    if (disabled) return '';
    if (placeholder && !disabled) return placeholder;
    return 'Selecione';
  };

  const onSelect = (item: string) => {
    onChange([...value, item]);
  };

  const onRemoveItemArray = (itemRemove: string) => {
    onChange(value.filter((item: string) => item !== itemRemove));
  };

  return (
    <>
      <View>
        <Wrapper disabled={disabled} error={!!error} variant={variant} {...rest}>
          <Label error={!!error} disabled={disabled} style={styleTextLabel}>
            {required ? `${label} *` : label}
          </Label>
          <Row>
            {value && value.length > 0 ? (
              <SRow gap={4}>
                {value.map((item: string) => (
                  <TagInput key={item} label={item} onRemove={() => onRemoveItemArray(item)} />
                ))}
              </SRow>
            ) : (
              <Touch onPress={() => setShowModal(true)}>
                <ValueText isValue={false}>{valueField()}</ValueText>
              </Touch>
            )}

            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Icon name="chevron-down" />
            </TouchableOpacity>
          </Row>
        </Wrapper>
        {!!error && <Error>{error.message}</Error>}
      </View>
      <ModalOption
        show={showModal}
        onClose={() => setShowModal(false)}
        title={label}
        options={sortedOptions}
        onSelect={onSelect}
        onRemoveItemArray={onRemoveItemArray}
        value={value}
      />
    </>
  );
}
