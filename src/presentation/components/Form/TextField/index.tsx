/* eslint-disable no-param-reassign */
import { useCallback, useRef, useState } from 'react';
import { useController } from 'react-hook-form';
import { TouchableWithoutFeedback, TextInput, View } from 'react-native';

import { Icon } from '~components/Icon';
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

  const handleChangeCurrency = useCallback(
    (text: string) => {
      if (text.includes('R$') && text.length > 10) {
        text = text.slice(0, 10);
      } else if (text.length > 8) {
        text = text.slice(0, 8);
      }

      const decimal = Number(text.replace(/\D/g, '')) / 100;
      onChange(formatCurrency(decimal || 0).replace('R$\xa0', ''));
    },
    [onChange],
  );

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
              onChangeText={currency ? handleChangeCurrency : onChange}
              value={mask ? mask(value?.toString()) : value}
              placeholder={!disabled ? placeholder : undefined}
              keyboardType={currency ? 'numeric' : keyboardType}
              onBlur={customOnBlur}
              maxLength={!currency ? maxLength : undefined}
              placeholderTextColor={colorPlaceholder}
            />
            {renderRight || null}
            {typePassword && (
              <Icon
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
