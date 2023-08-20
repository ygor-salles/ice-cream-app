import { Control, useController } from 'react-hook-form';
import { Alert, ToastAndroid, View } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import { Row } from '~components/Row';
import { IFile } from '~types/index';

import { Error } from '../styles';
import { Close, Label, Icon, Img } from './styles';

interface InputFileFieldProps {
  label: string;
  control: Control<any>;
  name: string;
  disabled?: boolean;
  required?: boolean;
}

export function InputFileField({ label, control, name, disabled, required }: InputFileFieldProps) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, name });

  const handlePickerImage = async () => {
    if (disabled) return;

    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      Alert.alert('Permissão necessária', 'Permita que sua aplicação acesse as imagens');
    } else {
      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: false,
        aspect: [4, 4],
        quality: 1,
      });

      if (canceled) {
        ToastAndroid.show('Operação cancelada', ToastAndroid.SHORT);
      } else {
        const filename = assets[0].uri.substring(
          assets[0].uri.lastIndexOf('/') + 1,
          assets[0].uri.length,
        );

        const extend = filename.split('.')[1];

        const file: IFile = JSON.parse(
          JSON.stringify({
            name: filename,
            uri: assets[0].uri,
            type: `image/${extend}`,
          }),
        );

        if (file) {
          onChange(file);
        }
      }
    }
  };

  return (
    <View>
      <Row gap={10} isButton onPress={handlePickerImage}>
        <Label error={!!error} disabled={disabled}>
          {label}
          {required && ' *'}
        </Label>
        <Icon name="upload" error={!!error} disabled={disabled} />
      </Row>
      {!!error && <Error>{error.message}</Error>}
      <Row>
        {value && (
          <>
            <Img source={value} />
            <Close name="x-circle" onPress={() => onChange(null)} />
          </>
        )}
      </Row>
    </View>
  );
}
