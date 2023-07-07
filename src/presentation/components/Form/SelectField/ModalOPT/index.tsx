import {
  Modal,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';

import { useThemeContext } from '~hooks/useThemeContext';

import { styles, Header, Description, Item, Title } from './styles';

interface ModalOPTProps {
  show: boolean;
  onClose: () => void;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function ModalOPT({ show, onClose }: ModalOPTProps) {
  const { themeName } = useThemeContext();

  return (
    <Modal animationType="fade" transparent visible={show} onRequestClose={onClose}>
      <TouchableOpacity style={styles.container} activeOpacity={1} onPressOut={onClose}>
        <View style={{ flex: 1, alignContent: 'stretch' }}>
          {/* <ScrollView directionalLockEnabled contentContainerStyle={styles.scrollModal}>
            <Header>
              <Title>Título</Title>
            </Header>
            {array.map(item => (
              <View key={item}>
                <View style={styles.modalContainer}>
                  <Item key={item} themeName={themeName}>
                    <Description themeName={themeName}>{item}</Description>
                  </Item>
                </View>
              </View>
            ))}
          </ScrollView> */}
          <Header>
            <Title>Título</Title>
          </Header>
          <FlatList
            // contentContainerStyle={styles.scrollModal}
            data={array}
            keyExtractor={item => item.toString()}
            renderItem={({ item }) => (
              <Item themeName={themeName}>
                <Description themeName={themeName}>{item}</Description>
              </Item>
            )}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
