import { useCallback, useRef, useState } from 'react';
import { useController } from 'react-hook-form';
import { TouchableWithoutFeedback, TextInput, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useThemeContext } from '~hooks/useThemeContext';
import { colors } from '~styles/constants';
import { formatCurrency } from '~utils/index';

import { Wrapper, InputField, Label, Error, Currency } from '../styles';
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
  currency,
  ...rest
}: TextFieldProps) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, name });

  const { themeName } = useThemeContext();

  const handleChangeForm = (text: string) => {
    const decimal = Number(text.replace(/\D/g, '')) / 100;
    onChange(formatCurrency(decimal || 0).replace('R$\xa0', ''));
  };

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
            {currency && !value.includes('R$') ? <Currency>R$</Currency> : null}
            <InputField
              style={styleTextInput}
              underlineColorAndroid="transparent"
              accessible
              ref={inputRef}
              secureTextEntry={inputTypePassword}
              editable={!disabled}
              onChangeText={currency ? handleChangeForm : onChange}
              value={mask ? mask(value?.toString()) : value}
              placeholder={!disabled ? placeholder : undefined}
              keyboardType={currency ? 'numeric' : keyboardType}
              onBlur={customOnBlur}
              maxLength={
                maxLength || (currency && value.includes('R$') ? 10 : currency ? 8 : maxLength)
              }
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
