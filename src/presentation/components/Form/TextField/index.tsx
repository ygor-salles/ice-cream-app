import { useCallback, useRef, useState } from 'react';
import { useController } from 'react-hook-form';

import { useThemeContext } from '@hooks/useThemeContext';

import { ListAutoComplete } from './ListAutoComplete';
import { Wrapper, InputContainer, InputField, Label } from './styles';
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
  ...rest
}: TextFieldProps) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, name });

  const { themeName } = useThemeContext();

  const [listAutocomplete, setListAutocomplete] = useState<string[]>([]);

  const refPressAutoComplete = useRef(false);

  const handleSearch = useCallback((text: string) => {
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
  }, []);

  return (
    <>
      <Wrapper disabled={disabled} themeName={themeName} variant={variant} {...rest}>
        <Label error={!!error} disabled={disabled || viewOnly} style={styleTextLabel}>
          {required ? `${label} *` : `${label} (opcional)`}
        </Label>
        <InputContainer>
          {renderLeft || null}
          <InputField
            style={styleTextInput}
            underlineColorAndroid="transparent"
            accessible
            editable={!disabled || viewOnly}
            onChangeText={text => (autoComplete ? handleSearch(text) : onChange(text))}
            value={mask ? mask(value?.toString()) : value?.toString()}
            placeholder={placeholder}
            keyboardType={keyboardType}
            onBlur={customOnBlur}
            maxLength={maxLength}
            placeholderTextColor={placeholderTextColor}
          />
          {renderRight || null}
        </InputContainer>
      </Wrapper>

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
