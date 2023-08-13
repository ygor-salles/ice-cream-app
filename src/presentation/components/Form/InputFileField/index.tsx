import { Control, useController } from 'react-hook-form';
import { Alert, ToastAndroid, View } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import { Row } from '~components/Row';
import { IFile } from '~types/index';

import { Close, Description, Icon, Img } from './styles';

interface InputFileFieldProps {
  label: string;
  control: Control<any>;
  name: string;
}

export function InputFileField({ label, control, name }: InputFileFieldProps) {
  const {
    field: { onChange, value },
  } = useController({ control, name });

  const handlePickerImage = async () => {
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
      <Row gap={6} isButton onPress={handlePickerImage}>
        <Description>{label}</Description>
        <Icon name="upload" />
      </Row>
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
