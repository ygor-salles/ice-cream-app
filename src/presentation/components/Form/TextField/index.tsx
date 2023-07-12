import { useCallback, useRef, useState } from 'react';
import { useController } from 'react-hook-form';
import { TouchableWithoutFeedback, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useThemeContext } from '~hooks/useThemeContext';
import { colors } from '~styles/constants';

import { Wrapper, InputField, Label } from '../styles';
import { ListAutoComplete } from './ListAutoComplete';
import { InputContainer, Error } from './styles';
import { TextFieldProps } from './types';

export function TextField({
  control,
  name,
  autoComplete,
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

  const [listAutocomplete, setListAutocomplete] = useState<string[]>([]);

  const refPressAutoComplete = useRef(false);

  const colorPlaceholder = error ? colors.RED_ERROR : placeholderTextColor || colors.GRAY_500;

  const handleTouchableInput = () => {
    if (!disabled && inputRef.current) {
      inputRef.current?.focus();
    }
  };

  const handleSearch = useCallback(
    (text: string) => {
      onChange(text);

      const newUpdateInstance: string[] = [];
      const textTyped = new RegExp(text.toUpperCase(), 'i');

      // eslint-disable-next-line no-restricted-syntax
      for (const instance of autoComplete.listItems) {
        if (instance.match(textTyped)) {
          newUpdateInstance.push(instance);
        }

        setListAutocomplete(newUpdateInstance);
      }
      refPressAutoComplete.current = false;
    },
    [autoComplete, onChange],
  );

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
              onChangeText={text => (autoComplete ? handleSearch(text) : onChange(text))}
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

      {!!autoComplete && listAutocomplete.length > 0 && value.length > 0 && (
        <ListAutoComplete
          listItems={listAutocomplete}
          renderLeft={autoComplete.renderLeft}
          value={autoComplete.valueTextLeft}
          onPress={text => {
            refPressAutoComplete.current = true;
            onChange(text);
            if (autoComplete?.setValue) {
              autoComplete.setValue(autoComplete.fieldTextLeft, text);
            }
            setListAutocomplete([]);
          }}
        />
      )}
    </>
  );
}
