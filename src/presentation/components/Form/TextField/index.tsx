import { useCallback, useRef, useState } from 'react';
import { useController } from 'react-hook-form';
import { TouchableWithoutFeedback, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useThemeContext } from '~hooks/useThemeContext';
import { colors } from '~styles/constants';

import { Wrapper, InputField, Label } from '../styles';
import { InputContainer, Error } from './styles';
import { TextFieldProps } from './types';

export function TextField({
  control,
  name,
  customOnBlur,
  disabled,
  keyboardType,
  label,
  mask,
  maxLength,
  placeholder,
  renderLeft,
  renderRight,
  required,
  styleTextLabel,
  styleTextInput,
  placeholderTextColor,
  variant = 'filled',
  typePassword,
  lightEyeIcon,
  ...rest
}: TextFieldProps) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, name });

  const { themeName } = useThemeContext();

  const inputRef = useRef<TextInput>(null);

  const [inputTypePassword, setInputTypePassword] = useState(!!typePassword);
  const onToggleInputPassword = useCallback(() => setInputTypePassword(prev => !prev), []);

  const colorPlaceholder = error ? colors.RED_ERROR : placeholderTextColor || colors.GRAY_500;

  const handleTouchableInput = () => {
    if (!disabled && inputRef.current) {
      inputRef.current?.focus();
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handleTouchableInput}>
        <Wrapper disabled={disabled} error={!!error} variant={variant} {...rest}>
          <Label error={!!error} disabled={disabled} style={styleTextLabel}>
            {required ? `${label} *` : label}
          </Label>
          <InputContainer>
            {renderLeft || null}
            <InputField
              style={styleTextInput}
              underlineColorAndroid="transparent"
              accessible
              ref={inputRef}
              secureTextEntry={inputTypePassword}
              editable={!disabled}
              onChangeText={onChange}
              value={mask ? mask(value?.toString()) : value?.toString()}
              placeholder={!disabled ? placeholder : undefined}
              keyboardType={keyboardType}
              onBlur={customOnBlur}
              maxLength={maxLength}
              placeholderTextColor={colorPlaceholder}
            />
            {renderRight || null}
            {typePassword && (
              <Feather
                name={inputTypePassword ? 'eye-off' : 'eye'}
                size={24}
                color={themeName === 'dark' || lightEyeIcon ? colors.WHITE : colors.TEXT}
                onPress={onToggleInputPassword}
              />
            )}
          </InputContainer>
        </Wrapper>
      </TouchableWithoutFeedback>
      {!!error && <Error>{error.message}</Error>}
    </>
  );
}
