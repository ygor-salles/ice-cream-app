import { useRef } from 'react';
import { useController } from 'react-hook-form';
import { TextInput, TouchableWithoutFeedback, View } from 'react-native';

import { Row } from '~components/Row';
import { colors } from '~styles/constants';

import { Error, Label } from '../styles';
import { Button, Icon, InputContainer, InputField, Wrapper } from './styles';
import { TextFieldCountProps } from './types';

export function TextFieldCount({
  control,
  label,
  name,
  disabled,
  placeholder,
  required,
  variant = 'filled',
  placeholderTextColor,
  customOnBlur,
  ...rest
}: TextFieldCountProps) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, name });
  const valueNum = Number(value);

  const inputRef = useRef<TextInput>(null);

  const handleTouchableInput = () => {
    if (!disabled && inputRef.current) {
      inputRef.current?.focus();
    }
  };

  const colorPlaceholder = placeholderTextColor || colors.GRAY_500;

  const onSubt = () => {
    if (valueNum >= 2) {
      onChange((valueNum - 1).toString());
    }
    if (!valueNum) {
      onChange('1');
    }
  };

  const onAdd = () => {
    onChange((valueNum + 1).toString());
    if (!valueNum) {
      onChange('1');
    }
  };

  const handleChange = (text: string) => {
    if (!text.length) {
      onChange('');
    }

    if (Number(text) >= 1) {
      onChange(text);
    }
  };

  return (
    <View>
      <Row>
        <Button error={!!error} onPress={onSubt}>
          <Icon name="minus" />
        </Button>
        <TouchableWithoutFeedback onPress={handleTouchableInput}>
          <Wrapper disabled={disabled} error={!!error} variant={variant} {...rest}>
            <Label error={!!error} disabled={disabled}>
              {required ? `${label} *` : label}
            </Label>
            <InputContainer>
              <InputField
                underlineColorAndroid="transparent"
                accessible
                ref={inputRef}
                editable={!disabled}
                onChangeText={handleChange}
                value={value?.toString()}
                placeholder={!disabled ? placeholder : undefined}
                keyboardType="numeric"
                onBlur={customOnBlur}
                maxLength={3}
                placeholderTextColor={colorPlaceholder}
              />
            </InputContainer>
          </Wrapper>
        </TouchableWithoutFeedback>
        <Button isAdd error={!!error} onPress={onAdd}>
          <Icon name="plus" />
        </Button>
      </Row>
      {!!error && <Error>{error.message}</Error>}
    </View>
  );
}
