import { useCallback, useRef, useState } from 'react';
import { TextInput, TouchableWithoutFeedback } from 'react-native';

import { DialogScroll } from '~components/DialogScroll';
import { colors } from '~styles/constants';

import { Description, Item, Input, InputWrapper, HeaderSearch, Icon } from './styles';

interface ModalOptionProps {
  show: boolean;
  title: string;
  options: string[];
  value: string[];
  onClose: () => void;
  onSelect: (item: string) => void;
  onRemoveItemArray: (itemRemove: string) => void;
}

export function ModalOption({
  title,
  show,
  options,
  value,
  onClose,
  onSelect,
  onRemoveItemArray,
}: ModalOptionProps) {
  const [listAutocomplete, setListAutocomplete] = useState<string[]>(options);

  const inputRef = useRef<TextInput>(null);

  const noHeaderDefault = options.length >= 10;

  const handleTouchableInput = () => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  };

  const handleSearch = useCallback(
    (text: string) => {
      const newUpdateInstance: string[] = [];
      const textTyped = new RegExp(text.toUpperCase(), 'i');

      // eslint-disable-next-line no-restricted-syntax
      for (const instance of options) {
        if (instance.match(textTyped)) {
          newUpdateInstance.push(instance);
        }

        setListAutocomplete(newUpdateInstance);
      }
    },
    [options],
  );

  const onCloseModal = () => {
    if (noHeaderDefault) {
      onClose();
      setListAutocomplete(options);
    } else {
      onClose();
    }
  };

  return (
    <DialogScroll
      show={show}
      onClose={onCloseModal}
      title={title}
      noHeaderDefault={noHeaderDefault}
      headerElement={
        <TouchableWithoutFeedback onPress={handleTouchableInput}>
          <HeaderSearch>
            <InputWrapper>
              <Icon name="search" isPosition="left" />
              <Input
                ref={inputRef}
                onChangeText={text => handleSearch(text)}
                placeholder="Pesquisar..."
                placeholderTextColor={colors.GRAY_500}
              />
            </InputWrapper>
          </HeaderSearch>
        </TouchableWithoutFeedback>
      }
    >
      {listAutocomplete.map(item => {
        const selected = value.find(val => val === item);

        return (
          <Item
            key={item}
            onPress={() => {
              onSelect(item);
              setListAutocomplete(options);
            }}
            selected={!!selected}
          >
            <Description>{item}</Description>
            {selected && (
              <Icon name="x-circle" onPress={() => onRemoveItemArray(item)} isPosition="right" />
            )}
          </Item>
        );
      })}
    </DialogScroll>
  );
}
