import { Container, Title } from './styles';

interface NewProps {
  teste: string;
}

export function New({ teste }: NewProps) {
  return (
    <Container>
      <Title>New {teste}</Title>
    </Container>
  );
}
