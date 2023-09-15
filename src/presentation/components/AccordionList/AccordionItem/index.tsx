import { PropsWithChildren } from 'react';

import { Icon } from '~components/Icon';

import { Body, Container, Header, Title } from './styles';

type AccordionItemProps = PropsWithChildren<{
  title: string;
  expanded?: boolean;
  onHeaderPress?: () => void;
}>;

export function AccordionItem({ children, title, expanded, onHeaderPress }: AccordionItemProps) {
  return (
    <Container>
      <Header onPress={onHeaderPress}>
        <Title>{title}</Title>
        <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={20} color="#bbb" />
      </Header>
      {expanded && <Body>{children}</Body>}
    </Container>
  );
}
