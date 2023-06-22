import { useCallback, useRef, useState } from 'react';
import { useController } from 'react-hook-form';

import { Feather } from '@expo/vector-icons';

import { useThemeContext } from '~hooks/useThemeContext';
import { colors } from '~styles/constants';

import { ListAutoComplete } from './ListAutoComplete';
import { Wrapper, InputContainer, InputField, Label, Error } from './styles';
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
  viewOnly,
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

  const [inputTypePassword, setInputTypePassword] = useState(!!typePassword);
  const onToggleInputPassword = useCallback(() => setInputTypePassword(prev => !prev), []);

  const [listAutocomplete, setListAutocomplete] = useState<string[]>([]);

  const refPressAutoComplete = useRef(false);

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
      <Wrapper
        disabled={disabled}
        error={!!error}
        themeName={themeName}
        variant={variant}
        {...rest}
      >
        <Label error={!!error} disabled={disabled || viewOnly} style={styleTextLabel}>
          {required ? `${label} *` : `${label} (opcional)`}
        </Label>
        <InputContainer>
          {renderLeft || null}
          <InputField
            style={styleTextInput}
            underlineColorAndroid="transparent"
            accessible
            secureTextEntry={inputTypePassword}
            editable={!disabled || viewOnly}
            onChangeText={text => (autoComplete ? handleSearch(text) : onChange(text))}
            value={mask ? mask(value?.toString()) : value?.toString()}
            placeholder={placeholder}
            keyboardType={keyboardType}
            onBlur={customOnBlur}
            maxLength={maxLength}
            placeholderTextColor={error ? colors.RED_ERROR : placeholderTextColor}
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
