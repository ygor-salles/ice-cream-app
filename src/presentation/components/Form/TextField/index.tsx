import { useCallback, useRef, useState } from 'react';
import { useController } from 'react-hook-form';
import { TouchableWithoutFeedback, TextInput, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useCurrency } from '~hooks/useCurrency';
import { useThemeContext } from '~hooks/useThemeContext';
import { colors } from '~styles/constants';

import { Wrapper, InputField, Label, Error } from '../styles';
import { InputContainer } from './styles';
import { TextFieldProps } from './types';

export function TextField({
  control,
  name,
  customOnBlur,
  disabled,
  keyboardType,
  label,
  mask,
  maxLength = 10,
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
  currency,
  ...rest
}: TextFieldProps) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, name });

  const { themeName } = useThemeContext();

  const [currencyValue, handleCurrencyValue] = useCurrency({
    valueForm: value,
    onChangeForm: onChange,
  });

  const inputRef = useRef<TextInput>(null);

  const [inputTypePassword, setInputTypePassword] = useState(!!typePassword);
  const onToggleInputPassword = useCallback(() => setInputTypePassword(prev => !prev), []);

  const colorPlaceholder = placeholderTextColor || colors.GRAY_500;

  const handleTouchableInput = () => {
    if (!disabled && inputRef.current) {
      inputRef.current?.focus();
    }
  };

  return (
    <View>
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
              onChangeText={currency ? handleCurrencyValue : onChange}
              value={currency ? currencyValue : mask ? mask(value?.toString()) : value?.toString()}
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
    </View>
  );
}
