import { ReactNode, useState } from 'react';
import { LayoutAnimation } from 'react-native';

import { Body, Container, Header, SIcon, Title } from './styles';

interface AccordionProps {
  children: ReactNode;
  title: string;
  expanded?: boolean;
  renderHeader?: ReactNode;
  onHeaderPress?: () => void;
}

export function Accordion({
  children,
  title,
  renderHeader,
  expanded,
  onHeaderPress,
}: AccordionProps) {
  const [showExpanded, setShowExpanded] = useState(false);

  const onToggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    if (onHeaderPress) onHeaderPress();
    else setShowExpanded(prev => !prev);
  };

  const show = expanded || showExpanded;

  return (
    <Container>
      {renderHeader ?? (
        <Header onPress={onToggleExpanded}>
          <Title>{title}</Title>
          <SIcon name={show ? 'chevron-up' : 'chevron-down'} size={20} />
        </Header>
      )}

      {show && <Body>{children}</Body>}
    </Container>
  );
}
