import { Feather } from '@expo/vector-icons';

import { colors } from '@styles/constants';

import { Container, ContentItem, Row, Text } from './styles';

interface PropTypes {
  listItems: Array<string>;
  renderLeft?: React.ReactElement;
  value?: string;
  onPress?: (text: string) => void;
}

export function ListAutoComplete({ listItems, onPress, renderLeft, value }: PropTypes) {
  return (
    <Container>
      {listItems.map(item => (
        <ContentItem key={item} bgBlue={item === value} onPress={() => onPress(item)}>
          <Row>
            {!!renderLeft && renderLeft}
            <Text>{item}</Text>
          </Row>
          {item === value && <Feather name="check" size={24} color={colors.PURPLE_PRIMARY} />}
        </ContentItem>
      ))}
    </Container>
  );
}
