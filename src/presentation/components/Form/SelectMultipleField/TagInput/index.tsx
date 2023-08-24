import { TouchableOpacity } from 'react-native';

import { Container, Icon, Label } from './styles';

interface TagInputProps {
  label: string;
  onRemove: () => void;
}

export function TagInput({ label, onRemove }: TagInputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <TouchableOpacity onPress={onRemove}>
        <Icon name="x" />
      </TouchableOpacity>
    </Container>
  );
}
